/* =========================================
   AUTENTICACIÓN Y SEGURIDAD
   ========================================= */

// Hash SHA-256 de la contraseña "BibliotecaInnovaSegura.GC"
const CORRECT_PASSWORD_HASH = "6d29b7bf2cc2c7b141d60631278d9907fdf864ab7c84e396c43d34703f42f58c";

// Función para generar hash SHA-256 usando Web Crypto API
async function generateHash(password) {
  try {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
  } catch (error) {
    console.error("Error generando hash:", error);
    return null;
  }
}

// Función para verificar si el usuario está autenticado
function isUserAuthenticated() {
  return sessionStorage.getItem("bibliotecaAuthenticated") === "true";
}

// Función para autenticar al usuario
async function authenticateUser(password) {
  console.log("Autenticando con contraseña:", password);
  
  const inputHash = await generateHash(password);
  console.log("Hash generado:", inputHash);
  console.log("Hash esperado:", CORRECT_PASSWORD_HASH);
  console.log("¿Coinciden?:", inputHash === CORRECT_PASSWORD_HASH);
  
  return inputHash === CORRECT_PASSWORD_HASH;
}

// Función para cerrar sesión
function logoutUser() {
  sessionStorage.removeItem("bibliotecaAuthenticated");
  location.reload();
}

// Función para manejar el formulario de login
async function handleLoginSubmit(event) {
  console.log("Formulario enviado");
  event.preventDefault();
  
  const passwordInput = document.getElementById("passwordInput");
  const password = passwordInput.value;
  const loginError = document.getElementById("loginError");
  const loginBtn = document.querySelector(".login-btn");
  
  console.log("Password field value:", password);
  
  if (!password) {
    loginError.textContent = "Por favor ingresa la contraseña.";
    loginError.style.display = "block";
    return;
  }
  
  // Deshabilitar botón mientras se procesa
  loginBtn.disabled = true;
  loginBtn.textContent = "Verificando...";
  
  try {
    if (await authenticateUser(password)) {
      console.log("Autenticación exitosa");
      // Contraseña correcta
      sessionStorage.setItem("bibliotecaAuthenticated", "true");
      const modal = document.getElementById("loginModal");
      modal.classList.add("hidden");
      loginError.style.display = "none";
      passwordInput.value = "";
      console.log("Modal ocultado");
    } else {
      console.log("Autenticación fallida");
      // Contraseña incorrecta
      loginError.textContent = "Contraseña incorrecta. Intenta de nuevo.";
      loginError.style.display = "block";
      passwordInput.value = "";
      passwordInput.focus();
    }
  } catch (error) {
    console.error("Error en autenticación:", error);
    loginError.textContent = "Error en la autenticación. Intenta de nuevo.";
    loginError.style.display = "block";
  } finally {
    loginBtn.disabled = false;
    loginBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Iniciar Sesión';
  }
}

// Inicializar login cuando el DOM esté listo
function initializeLogin() {
  console.log("Inicializando login...");
  
  const loginForm = document.getElementById("loginForm");
  const loginModal = document.getElementById("loginModal");
  const passwordInput = document.getElementById("passwordInput");
  
  console.log("Elementos encontrados:", { loginForm: !!loginForm, loginModal: !!loginModal, passwordInput: !!passwordInput });
  
  // Si ya está autenticado, ocultar el modal
  if (isUserAuthenticated()) {
    console.log("Usuario ya autenticado");
    loginModal.classList.add("hidden");
  } else {
    console.log("Usuario no autenticado - mostrando login");
    loginModal.classList.remove("hidden");
    if (passwordInput) {
      passwordInput.focus();
    }
  }
  
  // Manejar el envío del formulario
  if (loginForm) {
    loginForm.addEventListener("submit", handleLoginSubmit);
    console.log("Event listener para submit registrado");
  } else {
    console.error("No se encontró el formulario de login");
  }
}

// Iniciar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM Cargado - Inicializando autenticación");
  initializeLogin();
});

const ROOT_DRIVE_FOLDER = "https://drive.google.com/drive/folders/1EqhRak41WKeRigcrkxDjiDorUbf8ScPO?usp=drive_link";
const MODULO_1_FOLDER = "https://drive.google.com/drive/folders/1-piCPZozC4ZySLLBipXTn_rC1VXMkhQ9";
const MODULO_2_FOLDER = "https://drive.google.com/drive/folders/1p_cVEg96SGgEVce3VZlcMbqNch7p8RA_";
const MODULO_3_FOLDER = "https://drive.google.com/drive/folders/11W5KKlkWoVVA5g-vfTszA6W6cDh4KAXx";
const MODULO_4_FOLDER = "https://drive.google.com/drive/folders/1Pny6oK8RqzrPXlkL8gqrNZWhlzbTeV-U";

// Función para generar URL de búsqueda en Drive por nombre de archivo
function generateDriveSearchUrl(folderUrl, filename) {
  const folderId = folderUrl.match(/folders\/([a-zA-Z0-9_-]+)/)?.[1];
  if (!folderId) return folderUrl;
  
  // Elimina extensión del nombre para la búsqueda
  const searchTerm = filename.replace(/\.(mp4|pdf|mov|avi)$/i, '');
  
  return `https://drive.google.com/drive/folders/${folderId}?q=${encodeURIComponent(searchTerm)}`;
}

const modules = [
  {
    slug: "microorganismos",
    title: "MÓDULO 1. MICROORGANISMOS",
    subtitle: "Microorganismos",
    description: "Fundamentos, tipos, riesgos y control microbiológico aplicado al contexto alimentario.",
    icon: "fa-microscope",
    image: "img/Modulo 1.png",
    driveFolder: MODULO_1_FOLDER
  },
  {
    slug: "higiene-saneamiento",
    title: "MÓDULO 2. HIGIENE Y SANEAMIENTO",
    subtitle: "Higiene y Saneamiento",
    description: "Protocolos de limpieza, desinfección, manejo sanitario y prevención de contaminación.",
    icon: "fa-pump-soap",
    image: "img/Modulo 2.png",
    driveFolder: MODULO_2_FOLDER
  },
  {
    slug: "bpm",
    title: "MÓDULO 3. BPM",
    subtitle: "Buenas Prácticas de Manufactura",
    description: "Procedimientos estándar de calidad para garantizar inocuidad y cumplimiento normativo.",
    icon: "fa-clipboard-check",
    image: "img/MODULO 3.jpg",
    driveFolder: MODULO_3_FOLDER
  },
  {
    slug: "biblioteca-audiovisual",
    title: "MÓDULO 4. Biblioteca Audiovisual Científica",
    subtitle: "Biblioteca Audiovisual Científica",
    description: "Material multimedia de apoyo académico para reforzar contenidos científicos.",
    icon: "fa-photo-film",
    image: "img/modulo 4.jpg",
    driveFolder: MODULO_4_FOLDER
  }
];

const moduleResources = {
  microorganismos: [
    {
      title: "1.1 Introducción Microbiología",
      link: "https://drive.google.com/file/d/1BbYfMuyABRr5x6IHG_wITV1NdFXzw9da/view?usp=drive_link",
      type: "MP4",
      image: "img/microbioligia.jpg"
    },
    {
      title: "1.2. Bacterias, Virus y Hongos",
      link: "https://drive.google.com/file/d/19kcpAm_NFIzCuVvnyH0CQice3Sn4RqCd/view?usp=drive_link",
      type: "MP4",
      image: "img/bacterias.jpg"
    },
    {
      title: "1.3. CHATTO",
      link: "https://drive.google.com/file/d/1p_PKaHBCAbMcZCp6zBUnSlkvXiYiA5gC/view?usp=drive_link",
      type: "MP4",
      image: "img/Madigan.jpg"
    },
    {
      title: "1.4. ETAs",
      link: "https://drive.google.com/file/d/1S2i4zUC_mLI-Jn6Pu1Q3DrIVbVnQqx5d/view?usp=drive_link",
      type: "MP4",
      image: "img/ETAS.jpg"
    },
    {
      title: "1.5. Brotes epidemiológicos",
      link: "https://drive.google.com/file/d/1srf2R1MByDAuBPLHQjoMsJfl8187C_2-/view?usp=drive_link",
      type: "MP4",
      image: "img/brotes.jpg",
      coverPosition: "72% center"
    },
    {
      title: "Madigan, Michael T. - Brock. Biología de los microorganismos",
      link: "https://drive.google.com/file/d/1OLsCwMRRG1pWsIqUThxYPfPPtfdBLMPo/view?usp=drive_link",
      type: "PDF",
      image: "img/Madigan.jpg"
    }
  ],
  "higiene-saneamiento": [
    {
      title: "2.1 Higiene Personal",
      link: "https://drive.google.com/file/d/1qBE3lE6RrnwriClf8cMxJ9MQI2AkP8IU/view?usp=drive_link",
      type: "MP4",
      image: "img/higiene personal m2.jpg"
    },
    {
      title: "2.2 Lavado de Manos",
      link: "https://drive.google.com/file/d/12rPKa88kTlBrfNzHUR_sjxZ7C5i2aPhF/view?usp=drive_link",
      type: "MP4",
      image: "img/lavado manos m2.jpg"
    },
    {
      title: "2.3 Limpieza y Desinfección",
      link: "https://drive.google.com/file/d/10uT1TnmQ7t0NuQIYUJFQ_yynYhuGKGRY/view?usp=drive_link",
      type: "MP4",
      image: "img/desinfeccion m2.jpeg"
    },
    {
      title: "2.4 Manejo y Dosificación de Químicos",
      link: "https://drive.google.com/file/d/1frLqZIUp-Al8dLGE9CncCYiOI_jmwlD8/view?usp=drive_link",
      type: "MP4",
      image: "img/dosificacion m2.jpg"
    },
    {
      title: "2.5 Cronogramas de LYD",
      link: "https://drive.google.com/file/d/19uQrziH7ShfuYrBDALNoQ9EqY1Sgjr09/view?usp=drive_link",
      type: "MP4",
      image: "img/cronograma m2.png"
    },
    {
      title: "Guía de buenas prácticas para la limpieza y desinfección en la industria alimentaria",
      link: `${MODULO_2_FOLDER}`,
      type: "PDF",
      image: "img/guia buenas practicas m2.jpg"
    }
  ],
  bpm: [
    {
      title: "3.1 Infraestructura y Diseño",
      link: "https://drive.google.com/file/d/1Z2fQ3emUixRresVBL4x3q4Xw-6cOf8pc/view?usp=drive_link",
      type: "MP4",
      image: "img/infraestructira m3.jpg"
    },
    {
      title: "3.2 Mantenimiento y Limpieza de Equipos",
      link: "https://drive.google.com/file/d/1VTXmwe5WTbfJJvp3LgoYltsCPLg_IvrM/view?usp=drive_link",
      type: "MP4",
      image: "img/mantenimiento m3.jpg"
    },
    {
      title: "3.3 Manejo Integrado de Plagas",
      link: "https://drive.google.com/file/d/1Zyv8tb4RQ9hHces3nne2lwJa26psIWLi/view?usp=drive_link",
      type: "MP4",
      image: "img/plagas m3.jpg"
    },
    {
      title: "NORMA-440",
      link: "https://drive.google.com/file/d/1JHfyqQsmh47vjGAQzU3GzOWYejVU-HNb/view?usp=drive_link",
      type: "PDF",
      image: "img/440 m3.png"
    },
    {
      title: "RESOLUCIÓN-ARCSA-DE-2022-016-AKRG_Alimentos-procesados-2",
      link: "https://drive.google.com/file/d/1gHcuvoBvf6gk0R_bjwMXuBPuGonG3U6O/view?usp=drive_link",
      type: "PDF",
      image: "img/ARCSA m3 .png"
    }
  ],
  "biblioteca-audiovisual": [
    {
      title: "El poder invisible de los microbios _ ZonaDocu",
      link: "https://drive.google.com/file/d/1BJTmGvXLAR3B79qU0m7sFM518tcps8GB/view?usp=drive_link",
      type: "MP4",
      image: "img/microbios m4.png"
    },
    {
      title: "Azúcar y aditivos - El lado oscuro de la industria alimentaria",
      link: "https://drive.google.com/file/d/1BmETTy2eahJ4J8MT6kXja3FwOs9R37D_/view?usp=drive_link",
      type: "MP4",
      image: "img/azucares m4.jpg"
    },
    {
      title: "Salud e higiene de los empleados",
      link: "https://drive.google.com/file/d/1GqbnusNdUK-2lLjzpDJw9VhXmYpz2kLS/view?usp=drive_link",
      type: "MP4",
      image: "img/salud empelados m4.jpg"
    },
    {
      title: "MANEJO DE RESIDUOS (1)",
      link: "https://drive.google.com/file/d/1iIj6h9YotACgbsTZ1QxCDiMaEFZ8MQf-/view?usp=drive_link",
      type: "MP4",
      image: "img/residuos m4.jpg"
    },
    {
      title: "Control de plagas en la industria de alimentos. Riesgos",
      link: "https://drive.google.com/file/d/1jttNWgY_ryvYuNVgSTHgJzHZpxPwe5ng/view?usp=drive_link",
      type: "MP4",
      image: "img/plagas alimentos m4.jpg"
    },
    {
      title: "Manipulación de pollo fresco (1)",
      link: "https://drive.google.com/file/d/1m8Wf0cAkhP9gSbhrkH9Y3Sc33fTyLYke/view?usp=drive_link",
      type: "MP4",
      image: "img/pollo m4.jpg"
    },
    {
      title: "Limpieza y desinfección",
      link: "https://drive.google.com/file/d/1m8Wf0cAkhP9gSbhrkH9Y3Sc33fTyLYke/view?usp=drive_link",
      type: "MP4",
      image: "img/desinfeccion m4.jpg"
    },
    {
      title: "Normas de higiene para el personal manipulador de alimentos",
      link: "https://drive.google.com/file/d/1tzCu_UQjKPNAFzn206qn4_e7uSBa5atL/view?usp=drive_link",
      type: "MP4",
      image: "img/manipulacion m4.jpg"
    }
  ]
};

let activeResources = [];
let activeModuleSlug = "";
let activeInlineVideoLink = "";

const moduleThemeKeywords = {
  microorganismos: "microbiology,laboratory,bacteria",
  "higiene-saneamiento": "hygiene,sanitation,cleaning",
  bpm: "food safety,quality control,factory",
  "biblioteca-audiovisual": "documentary,education,video"
};

const topicStyles = {
  microbiologia: { label: "Microbiología", icon: "MIC", c1: "#0f766e", c2: "#164e63" },
  higiene: { label: "Higiene", icon: "HIG", c1: "#0ea5e9", c2: "#1d4ed8" },
  quimicos: { label: "Químicos", icon: "QUI", c1: "#f59e0b", c2: "#b45309" },
  plagas: { label: "Plagas", icon: "PLA", c1: "#ef4444", c2: "#991b1b" },
  infraestructura: { label: "Infraestructura", icon: "INF", c1: "#64748b", c2: "#334155" },
  residuos: { label: "Residuos", icon: "RES", c1: "#16a34a", c2: "#166534" },
  alimentos: { label: "Inocuidad", icon: "INO", c1: "#22c55e", c2: "#15803d" },
  normativa: { label: "Normativa", icon: "NOR", c1: "#7c3aed", c2: "#4c1d95" },
  audiovisual: { label: "Audiovisual", icon: "VID", c1: "#db2777", c2: "#831843" },
  general: { label: "Contenido", icon: "GEN", c1: "#475569", c2: "#1e293b" }
};

function getThumbnailUrl(fileId) {
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w400`;
}

function extractDriveFileId(url) {
  if (!url) return "";

  const fromPath = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/)?.[1];
  if (fromPath) return fromPath;

  const fromParam = url.match(/[?&]id=([a-zA-Z0-9_-]+)/)?.[1];
  if (fromParam) return fromParam;

  return "";
}

function getInlinePlayableSource(resource) {
  const rawLink = resource.link || "";
  const customSrc = resource.videoSrc || "";
  const source = customSrc || rawLink;

  if (/\.(mp4|webm|ogg)(\?.*)?$/i.test(source)) {
    return { kind: "video", src: encodeURI(source) };
  }

  const driveFileId = resource.driveFileId || extractDriveFileId(rawLink);
  if (driveFileId) {
    return {
      kind: "drive",
      src: `https://drive.google.com/file/d/${driveFileId}/preview`
    };
  }

  return null;
}

function normalizeText(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function escapeSvgText(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function detectTopic(resource, moduleSlug) {
  const title = normalizeText(resource.title);

  if (/micro|bacter|virus|hongo|epidem/.test(title)) return topicStyles.microbiologia;
  if (/higiene|lavado|limpieza|desinfeccion/.test(title)) return topicStyles.higiene;
  if (/quimic/.test(title)) return topicStyles.quimicos;
  if (/plaga/.test(title)) return topicStyles.plagas;
  if (/infraestructura|equipo|mantenimiento/.test(title)) return topicStyles.infraestructura;
  if (/residu/.test(title)) return topicStyles.residuos;
  if (/pollo|alimento|manipulador|bpm/.test(title)) return topicStyles.alimentos;
  if (/norma|resolucion|guia|brock|biologia/.test(title)) return topicStyles.normativa;

  if (moduleSlug === "biblioteca-audiovisual") return topicStyles.audiovisual;
  if (moduleSlug === "microorganismos") return topicStyles.microbiologia;
  if (moduleSlug === "higiene-saneamiento") return topicStyles.higiene;
  if (moduleSlug === "bpm") return topicStyles.alimentos;

  return topicStyles.general;
}

function getThematicImageUrl(resource, moduleSlug, index) {
  const topic = detectTopic(resource, moduleSlug);
  const type = (resource.type || "PDF").toUpperCase();
  const title = escapeSvgText(resource.title);
  const badge = escapeSvgText(topic.label.toUpperCase());
  const code = escapeSvgText(topic.icon);
  const ref = String(index + 1).padStart(2, "0");

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="600" height="900" viewBox="0 0 600 900">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${topic.c1}"/>
      <stop offset="100%" stop-color="${topic.c2}"/>
    </linearGradient>
  </defs>
  <rect width="600" height="900" fill="url(#bg)"/>
  <circle cx="80" cy="120" r="120" fill="rgba(255,255,255,0.08)"/>
  <circle cx="520" cy="760" r="180" fill="rgba(255,255,255,0.08)"/>
  <rect x="36" y="34" width="210" height="46" rx="23" fill="rgba(255,255,255,0.20)"/>
  <text x="54" y="64" fill="#ffffff" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="700">${badge}</text>
  <rect x="430" y="34" width="134" height="46" rx="23" fill="rgba(0,0,0,0.24)"/>
  <text x="470" y="64" fill="#ffffff" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="700">${type}</text>
  <rect x="36" y="160" width="150" height="150" rx="22" fill="rgba(255,255,255,0.20)"/>
  <text x="76" y="246" fill="#ffffff" font-family="Inter, Arial, sans-serif" font-size="46" font-weight="800">${code}</text>
  <text x="36" y="376" fill="#ffffff" font-family="Inter, Arial, sans-serif" font-size="38" font-weight="700">${title}</text>
  <text x="36" y="846" fill="rgba(255,255,255,0.88)" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="600">Biblioteca Modular · Ref ${ref}</text>
</svg>`;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function getOrderFromTitle(title) {
  const match = title.match(/^(\d+)\s*\.\s*(\d+)/);
  if (!match) {
    return { major: Number.POSITIVE_INFINITY, minor: Number.POSITIVE_INFINITY };
  }

  return {
    major: Number.parseInt(match[1], 10),
    minor: Number.parseInt(match[2], 10)
  };
}

function sortResources(resources) {
  return [...resources].sort((a, b) => {
    const orderA = getOrderFromTitle(a.title);
    const orderB = getOrderFromTitle(b.title);

    if (orderA.major !== orderB.major) return orderA.major - orderB.major;
    if (orderA.minor !== orderB.minor) return orderA.minor - orderB.minor;

    return a.title.localeCompare(b.title, "es", { sensitivity: "base" });
  });
}

function createModuleCard(module, index) {
  const card = document.createElement("a");
  card.className = "module-card";
  card.href = `index.html?modulo=${encodeURIComponent(module.slug)}`;
  card.setAttribute("data-module-slug", module.slug);
  card.style.animationDelay = `${index * 0.04}s`;
  const moduleNumber = index + 1;

  card.innerHTML = `
    <div class="module-cover-wrap">
      <img class="module-cover" src="${module.image || "img/generic_book.png"}" alt="${module.subtitle}" loading="lazy" />
    </div>
    <div class="module-icon-wrap">
      <span class="module-number">${moduleNumber}</span>
    </div>
    <div class="module-info">
      <p class="module-kicker">Módulo</p>
      <h3 class="module-title">${module.title}</h3>
      <p class="module-desc">${module.description}</p>
      <span class="module-cta">Ingresar</span>
    </div>
  `;

  return card;
}

function renderModules() {
  const moduleGrid = document.getElementById("moduleGrid") || document.getElementById("libraryGrid");
  if (!moduleGrid) return;

  moduleGrid.classList.add("module-grid");
  moduleGrid.innerHTML = "";
  modules.forEach((module, index) => {
    moduleGrid.appendChild(createModuleCard(module, index));
  });

  const totalModules = document.getElementById("total-modules");
  if (totalModules) {
    totalModules.textContent = modules.length;
  }
}

function setupHomeFromModulePage() {
  document.body.dataset.page = "home";

  const moduleNav = document.querySelector(".module-nav");
  const searchWrapper = document.querySelector(".search-wrapper");
  const resultsInfo = document.getElementById("resultsInfo");
  const noResults = document.getElementById("noResults");
  const inlinePlayer = document.getElementById("inlinePlayer");
  const totalBooks = document.getElementById("total-books");
  const moduleNameBadge = document.getElementById("moduleNameBadge");

  if (moduleNav) moduleNav.style.display = "none";
  if (searchWrapper) searchWrapper.style.display = "none";
  if (resultsInfo) resultsInfo.style.display = "none";
  if (noResults) noResults.style.display = "none";
  if (inlinePlayer) inlinePlayer.style.display = "none";

  if (totalBooks) {
    totalBooks.textContent = modules.length;
    const statLabel = totalBooks.parentElement;
    if (statLabel) {
      statLabel.innerHTML = `<strong id="total-books">${modules.length}</strong> módulos disponibles`;
    }
  }

  if (moduleNameBadge) {
    moduleNameBadge.textContent = "Contenido organizado por módulo";
  }

  renderModules();
}

function createResourceCard(resource, index) {
  const encodedLink = encodeURI(resource.link);
  const rawLink = resource.link || "";
  const isVideo = (resource.type || "").toUpperCase() === "MP4" || /\.mp4$/i.test(rawLink);
  const isPdf = (resource.type || "").toUpperCase() === "PDF" || /\.pdf$/i.test(rawLink);
  const inlineSource = getInlinePlayableSource(resource);
  const card = document.createElement("a");
  card.className = "book-card";
  card.href = isVideo ? "#" : encodedLink;
  if (!isVideo) {
    card.target = "_blank";
    card.rel = "noopener noreferrer";
  }
  card.setAttribute("data-link", encodedLink);
  card.setAttribute("data-type", (resource.type || "PDF").toUpperCase());
  card.setAttribute("data-inline-video", String(isVideo));
  card.setAttribute("data-video-kind", inlineSource?.kind || "");
  card.setAttribute("data-video-src", inlineSource?.src || "");
  card.setAttribute("data-title", resource.title.toLowerCase());
  card.style.animationDelay = `${index * 0.04}s`;

  const thematicUrl = resource.image || getThematicImageUrl(resource, activeModuleSlug, index);
  const thumbUrl = resource.image
    ? resource.image
    : (isVideo ? thematicUrl : (resource.id ? getThumbnailUrl(resource.id) : thematicUrl));
  const coverPosition = resource.coverPosition || "center";
  const pdfPreviewHtml = isPdf && !resource.image
    ? `<object class="book-cover-pdf" data="${encodedLink}#page=1&toolbar=0&navpanes=0&scrollbar=0" type="application/pdf"></object>`
    : "";
  const imageHtml = thumbUrl
    ? `<img
        class="book-cover"
        src="${thumbUrl}"
        data-fallback="${thematicUrl}"
        style="object-position:${coverPosition};"
        alt="Portada: ${resource.title}"
        loading="lazy"
        onerror="const fallback=this.dataset.fallback; if(fallback && this.src !== fallback){ this.src=fallback; this.dataset.fallback=''; return; } this.style.display='none'; this.nextElementSibling.style.display='flex';"
      />`
    : "";

  card.innerHTML = `
    <div class="book-cover-wrapper">
      ${pdfPreviewHtml}
      ${imageHtml}
      <div class="book-cover-fallback" style="display:${thumbUrl || pdfPreviewHtml ? "none" : "flex"}">
        <i class="fas fa-file-alt"></i>
        <span>${resource.title}</span>
      </div>
      <span class="book-badge">${resource.type || "PDF"}</span>
    </div>
    <div class="book-info">
      <p class="book-title">${resource.title}</p>
      <p class="book-type">
        <i class="fas ${isVideo ? "fa-external-link-alt" : "fa-external-link-alt"}"></i>
        ${isVideo ? (inlineSource ? "Reproducir en esta página" : "Buscar en Drive") : "Abrir recurso"}
      </p>
    </div>
  `;

  return card;
}

function closeInlineVideo() {
  const inlinePlayer = document.getElementById("inlinePlayer");
  const inlineVideo = document.getElementById("inlineVideo");
  const inlineDriveFrame = document.getElementById("inlineDriveFrame");

  if (!inlinePlayer || !inlineVideo || !inlineDriveFrame) return;

  inlineVideo.pause();
  inlineVideo.removeAttribute("src");
  inlineVideo.load();
  inlineVideo.style.display = "none";

  inlineDriveFrame.removeAttribute("src");
  inlineDriveFrame.style.display = "none";

  inlinePlayer.style.display = "none";
  inlinePlayer.style.maxWidth = "1380px";
  activeInlineVideoLink = "";
}

function adjustInlinePlayerWidth(ratio = 16 / 9) {
  const inlinePlayer = document.getElementById("inlinePlayer");
  if (!inlinePlayer) return;

  const safeRatio = Number.isFinite(ratio) && ratio > 0 ? ratio : 16 / 9;
  const maxHeight = window.innerHeight * 0.72;
  const widthByRatio = maxHeight * safeRatio;
  const widthByViewport = Math.max(320, window.innerWidth - 48);
  const finalWidth = Math.max(320, Math.min(1380, widthByRatio, widthByViewport));

  inlinePlayer.style.maxWidth = `${Math.floor(finalWidth)}px`;
}

function openInlineVideo(resourceTitle, videoLink, inlineKind, inlineSrc) {
  const inlinePlayer = document.getElementById("inlinePlayer");
  const inlineVideo = document.getElementById("inlineVideo");
  const inlineDriveFrame = document.getElementById("inlineDriveFrame");
  const inlinePlayerTitle = document.getElementById("inlinePlayerTitle");

  if (!inlinePlayer || !inlineVideo || !inlineDriveFrame || !inlinePlayerTitle) {
    return;
  }

  if (inlineKind === "video" && inlineSrc) {
    inlineDriveFrame.removeAttribute("src");
    inlineDriveFrame.style.display = "none";

    inlineVideo.src = inlineSrc;
    inlineVideo.style.display = "block";
    inlineVideo.onloadedmetadata = () => {
      const ratio = inlineVideo.videoWidth && inlineVideo.videoHeight
        ? inlineVideo.videoWidth / inlineVideo.videoHeight
        : 16 / 9;
      adjustInlinePlayerWidth(ratio);
    };
    adjustInlinePlayerWidth();
    inlineVideo.load();
    inlinePlayerTitle.textContent = resourceTitle;
    inlinePlayer.style.display = "block";
    inlinePlayer.scrollIntoView({ behavior: "smooth", block: "start" });
    activeInlineVideoLink = videoLink;
    return;
  }

  if (inlineKind === "drive" && inlineSrc) {
    inlineVideo.pause();
    inlineVideo.removeAttribute("src");
    inlineVideo.load();
    inlineVideo.style.display = "none";

    inlineDriveFrame.src = inlineSrc;
    inlineDriveFrame.style.display = "block";
    adjustInlinePlayerWidth(16 / 9);
    inlinePlayerTitle.textContent = resourceTitle;
    inlinePlayer.style.display = "block";
    inlinePlayer.scrollIntoView({ behavior: "smooth", block: "start" });
    activeInlineVideoLink = videoLink;
    return;
  }

  // Obtiene la carpeta del módulo activo y genera URL de búsqueda
  let moduleFolder = MODULO_1_FOLDER;
  
  if (activeModuleSlug === "microorganismos") moduleFolder = MODULO_1_FOLDER;
  else if (activeModuleSlug === "higiene-saneamiento") moduleFolder = MODULO_2_FOLDER;
  else if (activeModuleSlug === "bpm") moduleFolder = MODULO_3_FOLDER;
  else if (activeModuleSlug === "biblioteca-audiovisual") moduleFolder = MODULO_4_FOLDER;
  
  // Genera URL de búsqueda por nombre del video
  const searchUrl = generateDriveSearchUrl(moduleFolder, resourceTitle);
  
  // Abre en ventana flotante
  window.open(searchUrl, 'driveVideo', 'width=1200,height=800,resizable=yes,scrollbars=yes');
}

function renderBooks(list) {
  const grid = document.getElementById("libraryGrid");
  if (!grid) return;

  grid.innerHTML = "";
  list.forEach((resource, index) => {
    grid.appendChild(createResourceCard(resource, index));
  });
}

function filterBooks() {
  const input = document.getElementById("searchInput");
  if (!input) return;

  const query = input.value.trim().toLowerCase();
  const clearBtn = document.getElementById("clearBtn");
  const resultsInfo = document.getElementById("resultsInfo");
  const noResults = document.getElementById("noResults");
  const grid = document.getElementById("libraryGrid");

  if (clearBtn) {
    clearBtn.style.display = query ? "block" : "none";
  }

  const filtered = activeResources.filter((resource) =>
    resource.title.toLowerCase().includes(query)
  );

  renderBooks(filtered);

  if (resultsInfo) {
    if (query) {
      resultsInfo.textContent = `${filtered.length} resultado${filtered.length !== 1 ? "s" : ""} para "${query}"`;
    } else {
      resultsInfo.textContent = "";
    }
  }

  if (noResults && grid) {
    const showNoResults = filtered.length === 0;
    noResults.style.display = showNoResults ? "block" : "none";
    grid.style.display = showNoResults ? "none" : "grid";
  }
}

function clearSearch() {
  const input = document.getElementById("searchInput");
  if (!input) return;

  input.value = "";
  filterBooks();
  input.focus();
}

function setupModulePage() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("modulo");
  if (!slug) {
    setupHomeFromModulePage();
    return;
  }

  const selectedModule = modules.find((item) => item.slug === slug);

  if (!selectedModule) {
    window.location.href = "index.html";
    return;
  }

  const resources = sortResources(moduleResources[selectedModule.slug] || []);
  activeResources = resources;
  activeModuleSlug = selectedModule.slug;

  document.title = `${selectedModule.subtitle} | Biblioteca Modular`;

  const title = document.getElementById("moduleTitle");
  const subtitle = document.getElementById("moduleSubtitle");
  const desc = document.getElementById("moduleDesc");
  const badge = document.getElementById("moduleNameBadge");
  const totalBooks = document.getElementById("total-books");

  if (title) title.textContent = "Biblioteca Institucional";
  if (subtitle) subtitle.textContent = "Innova Food";
  if (desc) desc.textContent = "Recursos académicos en ciencia y tecnología alimenta";
  if (badge) badge.textContent = selectedModule.subtitle;
  if (totalBooks) totalBooks.textContent = resources.length;

  renderBooks(resources);

  const grid = document.getElementById("libraryGrid");
  const inlinePlayerClose = document.getElementById("inlinePlayerClose");

  if (inlinePlayerClose) {
    inlinePlayerClose.addEventListener("click", closeInlineVideo);
  }

  if (grid) {
    grid.addEventListener("click", (event) => {
      const card = event.target.closest(".book-card");
      if (!card) return;

      const isInlineVideo = card.getAttribute("data-inline-video") === "true";
      if (!isInlineVideo) return;

      event.preventDefault();

      const titleNode = card.querySelector(".book-title");
      const videoLink = card.getAttribute("data-link") || "";
      const inlineKind = card.getAttribute("data-video-kind") || "";
      const inlineSrc = card.getAttribute("data-video-src") || "";
      const resourceTitle = titleNode ? titleNode.textContent.trim() : "Reproductor de video";

      if (videoLink) {
        openInlineVideo(resourceTitle, videoLink, inlineKind, inlineSrc);
      }
    });
  }

  const noResults = document.getElementById("noResults");
  if (noResults && resources.length === 0) {
    noResults.style.display = "block";
    noResults.innerHTML = `
      <i class="fas fa-folder-open fa-3x"></i>
      <p>Este módulo aún no tiene recursos cargados en la web.</p>
      <p class="no-results-help">Puedes vincularlos en el archivo script.js dentro de moduleResources.</p>
    `;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;

  if (page === "home") {
    renderModules();
    return;
  }

  if (page === "module") {
    setupModulePage();

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeInlineVideo();
      }
      if (e.key === "Escape") clearSearch();
      if ((e.ctrlKey && e.key === "k") || (e.key === "/" && document.activeElement.tagName !== "INPUT")) {
        e.preventDefault();
        const input = document.getElementById("searchInput");
        if (input) input.focus();
      }
    });
  }
});
