// ---------------------------
// DESPLAZAMIENTO SUAVE ENTRE SECCIONES
// ---------------------------
document.querySelectorAll('nav a, .botones button').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href') || this.dataset.href;
    if (href && href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// ---------------------------
// RESALTAR MENÚ ACTIVO SEGÚN SECCIÓN VISIBLE
// ---------------------------
const secciones = document.querySelectorAll("section");
const menuLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let actual = "";

  secciones.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 100;
    const height = sec.offsetHeight;
    if (top >= offset && top < offset + height) {
      actual = sec.getAttribute("id");
    }
  });

  menuLinks.forEach(link => {
    link.classList.remove("activo");
    if (link.getAttribute("href") === `#${actual}`) {
      link.classList.add("activo");
    }
  });
});

// ---------------------------
// BOTONES SIGUIENTE / ANTERIOR ENTRE SECCIONES
// ---------------------------
document.querySelectorAll(".boton-siguiente").forEach(boton => {
  boton.addEventListener("click", () => {
    const actual = boton.closest("section");
    const siguiente = actual.nextElementSibling;
    if (siguiente && siguiente.tagName === "SECTION") {
      siguiente.scrollIntoView({ behavior: "smooth" });
    }
  });
});

document.querySelectorAll(".boton-anterior").forEach(boton => {
  boton.addEventListener("click", () => {
    const actual = boton.closest("section");
    const anterior = actual.previousElementSibling;
    if (anterior && anterior.tagName === "SECTION") {
      anterior.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ---------------------------
// BOTÓN "VOLVER ARRIBA"
// ---------------------------
const botonArriba = document.createElement("button");
botonArriba.textContent = "↑ Volver arriba";
botonArriba.style.position = "fixed";
botonArriba.style.bottom = "20px";
botonArriba.style.right = "20px";
botonArriba.style.padding = "10px 15px";
botonArriba.style.background = "#004b8d";
botonArriba.style.color = "white";
botonArriba.style.border = "none";
botonArriba.style.borderRadius = "8px";
botonArriba.style.cursor = "pointer";
botonArriba.style.display = "none";
botonArriba.style.boxShadow = "0 2px 5px rgba(0,0,0,0.3)";
botonArriba.style.zIndex = "999";
botonArriba.style.transition = "0.3s";

botonArriba.addEventListener("mouseover", () => {
  botonArriba.style.background = "#f5a623";
});
botonArriba.addEventListener("mouseout", () => {
  botonArriba.style.background = "#004b8d";
});
botonArriba.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.body.appendChild(botonArriba);

// Mostrar / ocultar el botón según el scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    botonArriba.style.display = "block";
  } else {
    botonArriba.style.display = "none";
  }
});
