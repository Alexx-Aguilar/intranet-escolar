const modoBtn = document.getElementById("modoBtn");
const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menuToggle");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const navigationLinks = document.querySelectorAll(".sidebar-link[data-view]");
const viewPanels = document.querySelectorAll(".view-panel");

const setModeLabel = () => {
    if (!modoBtn) return;
    const darkMode = document.body.classList.contains("modo-oscuro");
    modoBtn.querySelector("span").textContent = darkMode ? "☀" : "☾";
    modoBtn.setAttribute("aria-label", darkMode ? "Activar modo claro" : "Activar modo oscuro");
};

if (modoBtn) {
    modoBtn.addEventListener("click", () => {
        document.body.classList.toggle("modo-oscuro");
        setModeLabel();
    });
    setModeLabel();
}

const closeMenu = () => {
    sidebar?.classList.remove("is-open");
    sidebarOverlay?.classList.remove("is-visible");
    menuToggle?.setAttribute("aria-expanded", "false");
};

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        const open = sidebar.classList.toggle("is-open");
        sidebarOverlay.classList.toggle("is-visible", open);
        menuToggle.setAttribute("aria-expanded", String(open));
    });
}
sidebarOverlay?.addEventListener("click", closeMenu);

const showView = (viewId) => {
    const targetPanel = document.querySelector(`[data-view-panel="${viewId}"]`);
    if (!targetPanel) return;
    viewPanels.forEach((panel) => panel.classList.toggle("active", panel === targetPanel));
    navigationLinks.forEach((link) => link.classList.toggle("active", link.dataset.view === viewId));
    document.title = `AURALEXX | ${viewId.charAt(0).toUpperCase() + viewId.slice(1)}`;
    closeMenu();
    window.scrollTo({ top: 0, behavior: "smooth" });
};

navigationLinks.forEach((link) => link.addEventListener("click", () => showView(link.dataset.view)));
document.querySelectorAll("[data-go-to]").forEach((button) => button.addEventListener("click", () => showView(button.dataset.goTo)));
document.querySelector("[data-view-link]")?.addEventListener("click", (event) => {
    event.preventDefault();
    showView("inicio");
});

const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const usuario = document.getElementById("usuario").value.trim();
        const password = document.getElementById("password").value;
        const mensaje = document.getElementById("mensajeLogin");
        if (usuario === "estudiante" && password === "1234") {
            mensaje.textContent = "Acceso correcto. Preparando tu espacio...";
            mensaje.className = "mensaje-login success";
            setTimeout(() => { window.location.href = "index.html"; }, 850);
        } else {
            mensaje.textContent = "Revisa tu usuario o contraseña e inténtalo de nuevo.";
            mensaje.className = "mensaje-login error";
        }
    });
}

const showXpFeedback = (message) => {
    const feedback = document.getElementById("feedbackXp");
    if (!feedback) return;
    feedback.textContent = message;
    feedback.classList.remove("show");
    requestAnimationFrame(() => feedback.classList.add("show"));
    setTimeout(() => feedback.classList.remove("show"), 2200);
};

document.querySelectorAll(".task-check").forEach((button) => button.addEventListener("click", () => {
    const task = button.closest("article");
    const completed = task.classList.toggle("completed");
    button.setAttribute("aria-label", completed ? "Marcar tarea como pendiente" : "Marcar tarea como completada");
    if (completed) {
        task.classList.add("task-complete-pop");
        showXpFeedback("+50 XP · Tarea completada");
        setTimeout(() => task.classList.remove("task-complete-pop"), 700);
    }
}));

const challengeButton = document.querySelector(".daily-challenge .challenge-button");
if (challengeButton) {
    challengeButton.addEventListener("click", () => {
        challengeButton.textContent = "¡Reto activado!";
        challengeButton.classList.add("activated");
        challengeButton.disabled = true;
        const xpActual = document.getElementById("xpActual");
        const xpBar = document.getElementById("xpBar");
        const xpMensaje = document.getElementById("xpMensaje");
        if (xpActual) xpActual.textContent = "1,290";
        if (xpBar) xpBar.style.width = "86%";
        if (xpMensaje) xpMensaje.innerHTML = "Te faltan <b>210 XP</b> para desbloquear un nuevo nivel.";
        showXpFeedback("+50 XP · Reto diario activado");
    });
}
