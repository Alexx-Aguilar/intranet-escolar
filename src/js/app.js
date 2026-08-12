// ================================
// INTRANET ESCOLAR
// Funciones interactivas
// ================================

// Botón "Explorar portal"
const botonExplorar = document.querySelector("button");

botonExplorar.addEventListener("click", () => {
    document.querySelector("#materias").scrollIntoView({
        behavior: "smooth"
    });
});


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