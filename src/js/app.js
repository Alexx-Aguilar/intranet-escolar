const modoBtn = document.getElementById("modoBtn");

if (modoBtn) {
    const setModeLabel = () => {
        const darkMode = document.body.classList.contains("modo-oscuro");
        modoBtn.querySelector("span").textContent = darkMode ? "☀" : "☾";
        modoBtn.setAttribute("aria-label", darkMode ? "Activar modo claro" : "Activar modo oscuro");
    };

    modoBtn.addEventListener("click", () => {
        document.body.classList.toggle("modo-oscuro");
        setModeLabel();
    });
    setModeLabel();
}

const botonExplorar = document.querySelector(".explore-button");
if (botonExplorar) {
    botonExplorar.addEventListener("click", () => document.querySelector("#materias")?.scrollIntoView({ behavior: "smooth" }));
}

const enlaces = document.querySelectorAll("nav a");
enlaces.forEach((enlace) => enlace.addEventListener("click", () => {
    enlaces.forEach((item) => item.classList.remove("activo"));
    enlace.classList.add("activo");
}));

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

document.querySelectorAll(".task-check").forEach((button) => button.addEventListener("click", () => {
    const task = button.closest("article");
    const completed = task.classList.toggle("completed");
    button.setAttribute("aria-label", completed ? "Marcar tarea como pendiente" : "Marcar tarea como completada");
}));

const challengeButton = document.querySelector(".challenge-button");
if (challengeButton) {
    challengeButton.addEventListener("click", () => {
        challengeButton.textContent = "¡Reto activado!";
        challengeButton.classList.add("activated");
        challengeButton.disabled = true;
    });
}
