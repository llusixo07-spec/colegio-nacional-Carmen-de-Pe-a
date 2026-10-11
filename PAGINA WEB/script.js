/* ========================================
MENÚ RESPONSIVE
======================================== */

const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", function () {
    menu.classList.toggle("activo");
});

const enlacesMenu = document.querySelectorAll("#menu a");

enlacesMenu.forEach(function (enlace) {
    enlace.addEventListener("click", function () {
        menu.classList.remove("activo");
    });
});

/* ========================================
AÑO AUTOMÁTICO
======================================== */

const copyright = document.getElementById("copyright");
const añoActual = new Date().getFullYear();

copyright.textContent =
    "© " + añoActual +
    " Colegio Nacional Carmen de Peña. Todos los derechos reservados.";

/* ========================================
ANIMACIÓN DE LAS SECCIONES
======================================== */

const elementos = document.querySelectorAll(
    ".tarjeta, .historia-contenido, .contacto-item"
);

elementos.forEach(function (elemento) {
    elemento.classList.add("animar");
});

const observador = new IntersectionObserver(
    function (entradas) {
        entradas.forEach(function (entrada) {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visible");
            }
        });
    },
    {
        threshold: 0.15
    }
);

elementos.forEach(function (elemento) {
    observador.observe(elemento);
});

/* ========================================
GALERÍAS DE FOTOGRAFÍAS
======================================== */

const galerias = {

    /* INFRAESTRUCTURA: SIN CAMBIOS */
    infraestructura: {
        titulo: "Infraestructura",
        descripcion:
            "Instalaciones y espacios del Colegio Nacional Carmen de Peña.",
        fotos: [
            {
                src: "imagen/piki.png.jpeg",
                alt: "Infraestructura del Colegio Nacional Carmen de Peña"
            },
            {
                src: "imagen/plaza.png.jpeg",
                alt: "Plaza e instalaciones del colegio"
            },
            {
                src: "imagen/anika.png.jpeg",
                alt: "Espacios del Colegio Nacional Carmen de Peña"
            },
            {
                src: "imagen/kamila.png.jpeg",
                alt: "Instalaciones del Colegio Nacional Carmen de Peña"
            }
        ]
    },

  /* OLIMPIADAS: SOLO LAS 7 FOTOS NUEVAS */
"san-juan": {
    titulo: "Olimpiadas",
    descripcion:
        "Fotografías de las competencias y actividades deportivas de nuestra institución.",
    fotos: [
        {
            src: "imagen/qw.png.jpeg",
            alt: "Olimpiadas del colegio"
        },
        {
            src: "imagen/qe.png.jpeg",
            alt: "Olimpiadas del colegio"
        },
        {
            src: "imagen/qr.png.jpeg",
            alt: "Olimpiadas del colegio"
        },
        {
            src: "imagen/aq.png.jpeg",
            alt: "Olimpiadas del colegio"
        },
        {
            src: "imagen/at.png.jpeg",
            alt: "Olimpiadas del colegio"
        },
        {
            src: "imagen/art.png.jpeg",
            alt: "Olimpiadas del colegio"
        },
        {
            src: "imagen/adf.png.jpeg",
            alt: "Olimpiadas del colegio"
        }
    ]
},
    /* FERIA: 7 FOTOS */
    feria: {
        titulo: "Feria",
        descripcion:
            "Fotografías de las ferias y exposiciones realizadas en el colegio.",
        fotos: [
            {
                src: "imagen/fer.png.jpeg",
                alt: "Feria del Colegio Nacional Carmen de Peña"
            },
            {
                src: "imagen/rty.png.jpeg",
                alt: "Feria escolar"
            },
            {
                src: "imagen/hjg.png.jpeg",
                alt: "Exposición de proyectos"
            },
            {
                src: "imagen/klo.png.jpeg",
                alt: "Participación estudiantil en la feria"
            },
            {
                src: "imagen/nena.png.jpeg",
                alt: "Feria del colegio"
            },
            {
                src: "imagen/oip.png.jpeg",
                alt: "Exposición escolar"
            },
            {
                src: "imagen/opi.png.jpeg",
                alt: "Actividades de la feria"
            }
        ]
    },

    /* DÍAS FESTIVOS: 8 FOTOS */
    "dia-folklore": {
        titulo: "Días Festivos",
        descripcion:
            "Fotografías de las celebraciones, actividades culturales y tradiciones de nuestra institución.",
        fotos: [
            {
                src: "imagen/mia.png.jpeg",
                alt: "Celebraciones y actividades festivas"
            },
            {
                src: "imagen/pop.png.jpeg",
                alt: "Días festivos del colegio"
            },
            {
                src: "imagen/tey.png.jpeg",
                alt: "Celebraciones escolares"
            },
            {
                src: "imagen/hop.png.jpeg",
                alt: "Actividades culturales"
            },
            {
                src: "imagen/joi.png.jpeg",
                alt: "Celebraciones de nuestra institución"
            },
            {
                src: "imagen/were.png.jpeg",
                alt: "Días festivos"
            },
            {
                src: "imagen/paki.png.jpeg",
                alt: "Actividades culturales del colegio"
            },
            {
                src: "imagen/yoi.png.jpeg",
                alt: "Celebraciones escolares"
            }
        ]
    },

    /* VITRINA DE TROFEOS: SIN CAMBIOS */
    trofeos: {
        titulo: "Vitrina de Trofeos",
        descripcion:
            "Trofeos, reconocimientos y logros obtenidos por nuestra institución.",
        fotos: [
            {
                src: "imagen/helem.png.jpeg",
                alt: "Vitrina de Trofeos del Colegio Nacional Carmen de Peña"
            }
        ]
    }
};

/* ========================================
ELEMENTOS DEL VISOR
======================================== */

const visorGaleria = document.getElementById("visorGaleria");
const cerrarGaleria = document.getElementById("cerrarGaleria");
const tituloGaleria = document.getElementById("tituloGaleria");
const descripcionGaleria = document.getElementById("descripcionGaleria");
const imagenCarrusel = document.getElementById("imagenCarrusel");
const sinFotos = document.getElementById("sinFotos");
const contadorGaleria = document.getElementById("contadorGaleria");
const fotoAnterior = document.getElementById("fotoAnterior");
const fotoSiguiente = document.getElementById("fotoSiguiente");

let fotosActuales = [];
let fotoActual = 0;

/* ========================================
ABRIR CATEGORÍA
======================================== */

const categorias = document.querySelectorAll(".categoria-galeria");

categorias.forEach(function (categoria) {
    categoria.addEventListener("click", function () {
        const nombreCategoria = categoria.dataset.categoria;
        const galeria = galerias[nombreCategoria];

        if (!galeria) {
            return;
        }

        tituloGaleria.textContent = galeria.titulo;
        descripcionGaleria.textContent = galeria.descripcion;
        fotosActuales = galeria.fotos;
        fotoActual = 0;

        visorGaleria.classList.add("abierto");
        document.body.style.overflow = "hidden";

        mostrarFoto();
    });
});

/* ========================================
MOSTRAR FOTO
======================================== */

function mostrarFoto() {
    if (fotosActuales.length === 0) {
        imagenCarrusel.classList.add("oculto");
        sinFotos.classList.add("visible");

        contadorGaleria.textContent =
            "No hay fotografías disponibles todavía.";

        fotoAnterior.classList.add("oculto");
        fotoSiguiente.classList.add("oculto");

        return;
    }

    imagenCarrusel.classList.remove("oculto");
    sinFotos.classList.remove("visible");
    fotoAnterior.classList.remove("oculto");
    fotoSiguiente.classList.remove("oculto");

    const foto = fotosActuales[fotoActual];

    imagenCarrusel.onerror = function () {
        console.error("No se pudo cargar la imagen:", foto.src);
    };

    imagenCarrusel.src = foto.src;
    imagenCarrusel.alt = foto.alt;

    contadorGaleria.textContent =
        (fotoActual + 1) + " / " + fotosActuales.length;
}

/* ========================================
FOTO ANTERIOR
======================================== */

fotoAnterior.addEventListener("click", function () {
    if (fotosActuales.length === 0) {
        return;
    }

    fotoActual--;

    if (fotoActual < 0) {
        fotoActual = fotosActuales.length - 1;
    }

    mostrarFoto();
});

/* ========================================
FOTO SIGUIENTE
======================================== */

fotoSiguiente.addEventListener("click", function () {
    if (fotosActuales.length === 0) {
        return;
    }

    fotoActual++;

    if (fotoActual >= fotosActuales.length) {
        fotoActual = 0;
    }

    mostrarFoto();
});

/* ========================================
CERRAR GALERÍA
======================================== */

cerrarGaleria.addEventListener("click", cerrarVisor);

function cerrarVisor() {
    visorGaleria.classList.remove("abierto");
    document.body.style.overflow = "";
}

/* ========================================
CERRAR AL HACER CLIC FUERA
======================================== */

visorGaleria.addEventListener("click", function (evento) {
    if (evento.target === visorGaleria) {
        cerrarVisor();
    }
});

/* ========================================
CONTROLES DEL TECLADO
======================================== */

document.addEventListener("keydown", function (evento) {
    if (!visorGaleria.classList.contains("abierto")) {
        return;
    }

    if (evento.key === "Escape") {
        cerrarVisor();
    }

    if (evento.key === "ArrowLeft") {
        fotoAnterior.click();
    }

    if (evento.key === "ArrowRight") {
        fotoSiguiente.click();
    }
});