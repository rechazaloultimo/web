type UserPlan = "free" | "classic" | "premium";
type UserRole = "user" | "admin";

interface AdminUser {
  id: string;
  name: string;
  email: string;
  plan: UserPlan;
  role: UserRole;
}

const tbody = document.querySelector<HTMLTableSectionElement>("#users");
const status = document.querySelector<HTMLElement>("#status");

function setStatus(message: string, isError = false) {
  if (!status) return;
  status.textContent = message;
  status.classList.toggle("error", isError);
}

function renderUsers(users: AdminUser[]) {
  if (!tbody) return;
  tbody.replaceChildren();

  users.forEach((user) => {
    const row = document.createElement("tr");
    const name = document.createElement("td");
    name.textContent = user.name;
    const email = document.createElement("td");
    email.textContent = user.email;
    const roleCell = document.createElement("td");
    const roleSelect = document.createElement("select");
    roleSelect.setAttribute("aria-label", `Rol de ${user.email}`);
    const roleOptions: [UserRole, string][] = [
      ["user", "Terapeuta"],
      ["admin", "Administrador"],
    ];
    roleOptions.forEach(([value, label]) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = label;
      roleSelect.appendChild(option);
    });
    roleSelect.value = user.role;
    roleSelect.addEventListener("change", async () => {
      roleSelect.disabled = true;
      const response = await fetch("/api/admin/users", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: user.id, role: roleSelect.value }),
      });
      const result = (await response.json().catch(() => ({}))) as {
        message?: string;
        role?: UserRole;
      };
      if (!response.ok || !result.role) {
        roleSelect.disabled = false;
        roleSelect.value = user.role;
        setStatus(result.message || "No se pudo cambiar el rol.", true);
        return;
      }
      await loadUsers();
      setStatus(`Rol actualizado para ${user.email}.`);
    });
    roleCell.appendChild(roleSelect);

    const planCell = document.createElement("td");
    const select = document.createElement("select");
    select.setAttribute("aria-label", `Plan de ${user.email}`);

    const planOptions: [UserPlan, string][] = [
      ["free", "Gratis"],
      ["classic", "Pago"],
      ["premium", "Premium"],
    ];
    planOptions.forEach(([value, label]) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = label;
      select.appendChild(option);
    });
    select.value = user.plan;
    select.addEventListener("change", async () => {
      select.disabled = true;
      const response = await fetch("/api/admin/users", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: user.id, plan: select.value }),
      });
      const result = (await response.json().catch(() => ({}))) as {
        message?: string;
        plan?: UserPlan;
      };
      select.disabled = false;
      if (!response.ok || !result.plan) {
        select.value = user.plan;
        setStatus(result.message || "No se pudo cambiar el plan.", true);
        return;
      }
      user.plan = result.plan;
      setStatus(`Plan actualizado para ${user.email}.`);
    });
    planCell.appendChild(select);

    const actions = document.createElement("td");
    if (user.role !== "admin") {
      const deleteButton = document.createElement("button");
      deleteButton.type = "button";
      deleteButton.textContent = "Eliminar cuenta";
      deleteButton.addEventListener("click", async () => {
        if (!window.confirm(`¿Eliminar la cuenta de ${user.email} y todos sus datos?`)) return;
        deleteButton.disabled = true;
        const response = await fetch("/api/admin/users", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: user.id }),
        });
        const result = (await response.json().catch(() => ({}))) as { message?: string };
        if (!response.ok) {
          deleteButton.disabled = false;
          setStatus(result.message || "No se pudo eliminar la cuenta.", true);
          return;
        }
        row.remove();
        setStatus(`Cuenta de ${user.email} y sus datos eliminados.`);
      });
      actions.appendChild(deleteButton);
    }

    row.append(name, email, roleCell, planCell, actions);
    tbody.appendChild(row);
  });
}

async function loadUsers() {
  const response = await fetch("/api/admin/users", { cache: "no-store" });
  const result = (await response.json().catch(() => ({}))) as {
    message?: string;
    users?: AdminUser[];
  };
  if (!response.ok) {
    setStatus(result.message || "No se pudieron cargar los usuarios.", true);
    return;
  }
  const users = result.users || [];
  renderUsers(users);
  setStatus(`${users.length} usuarios.`);
}

void loadUsers();
