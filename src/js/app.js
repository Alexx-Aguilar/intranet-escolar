// ================================
// INTRANET ESCOLAR
// Funciones interactivas
// ================================

// Botón "Explorar portal"
const botonExplorar = document.querySelector(".bienvenida button");

if (botonExplorar) {
    botonExplorar.addEventListener("click", () => {
        const seccionMaterias = document.querySelector("#materias");

        if (seccionMaterias) {
            seccionMaterias.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
}


// ================================
// MENÚ DE NAVEGACIÓN
// ================================

const enlaces = document.querySelectorAll("nav a");

enlaces.forEach((enlace) => {
    enlace.addEventListener("click", () => {

        enlaces.forEach((item) => {
            item.classList.remove("activo");
        });

        enlace.classList.add("activo");
    });
});


// ================================
// MENSAJE DE BIENVENIDA
// ================================

console.log("🏫 Intranet Escolar cargada correctamente");
console.log("📚 Portal estudiantil listo para usar");

// ================================
// MODO OSCURO
// ================================

const modoBtn = document.getElementById("modoBtn");

if (modoBtn) {
    modoBtn.addEventListener("click", () => {

        document.body.classList.toggle("modo-oscuro");

        if (document.body.classList.contains("modo-oscuro")) {
            modoBtn.textContent = "☀️";
        } else {
            modoBtn.textContent = "🌙";
        }

    });
}

// ================================
// INICIO DE SESIÓN
// ================================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const usuario = document.getElementById("usuario").value.trim();
        const password = document.getElementById("password").value;
        const mensaje = document.getElementById("mensajeLogin");

        if (usuario === "estudiante" && password === "1234") {

            mensaje.textContent = "✅ Inicio de sesión correcto. Redirigiendo...";

            setTimeout(() => {
                window.location.href = "index.html";
            }, 800);

        } else {

            mensaje.textContent = "❌ Usuario o contraseña incorrectos";

        }

    });

}
