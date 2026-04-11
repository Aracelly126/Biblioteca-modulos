const ROOT_DRIVE_FOLDER = "https://drive.google.com/drive/folders/1EqhRak41WKeRigcrkxDjiDorUbf8ScPO?usp=drive_link";
const MODULO_1_FOLDER = "https://drive.google.com/drive/folders/1-piCPZozC4ZySLLBipXTn_rC1VXMkhQ9?usp=drive_link";
const MODULO_2_FOLDER = "https://drive.google.com/drive/folders/1p_cVEg96SGgEVce3VZlcMbqNch7p8RA_?usp=drive_link";
const MODULO_3_FOLDER = "https://drive.google.com/drive/folders/11W5KKlkWoVVA5g-vfTszA6W6cDh4KAXx?usp=drive_link";
const MODULO_4_FOLDER = "https://drive.google.com/drive/folders/1Pny6oK8RqzrPXlkL8gqrNZWhlzbTeV-U?usp=drive_link";

// Videos cargados desde Drive - usa las carpetas de módulos ya definidas arriba
// Para reproducción directa de videos específicos, usa: https://drive.google.com/file/d/FILE_ID/view
// O descarga desde: https://drive.google.com/file/d/FILE_ID/edit

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
      link: `${MODULO_1_FOLDER}`,
      type: "MP4",
      image: "img/microbioligia.jpg"
    },
    {
      title: "1.2. Bacterias, Virus y Hongos",
      link: `${MODULO_1_FOLDER}`,
      type: "MP4",
      image: "img/bacterias.jpg"
    },
    {
      title: "1.3. CHATTO",
      link: `${MODULO_1_FOLDER}`,
      type: "MP4",
      image: "img/Madigan.jpg"
    },
    {
      title: "1.4. ETAs",
      link: `${MODULO_1_FOLDER}`,
      type: "MP4",
      image: "img/ETAS.jpg"
    },
    {
      title: "1.5. Brotes epidemiológicos",
      link: `${MODULO_1_FOLDER}`,
      type: "MP4",
      image: "img/brotes.jpg",
      coverPosition: "72% center"
    },
    {
      title: "Madigan, Michael T. - Brock. Biología de los microorganismos",
      link: `${MODULO_1_FOLDER}`,
      type: "PDF",
      image: "img/Madigan.jpg"
    }
  ],
  "higiene-saneamiento": [
    {
      title: "2.1 Higiene Personal",
      link: `${MODULO_2_FOLDER}`,
      type: "MP4",
      image: "img/higiene personal m2.jpg"
    },
    {
      title: "2.2 Lavado de Manos",
      link: `${MODULO_2_FOLDER}`,
      type: "MP4",
      image: "img/lavado manos m2.jpg"
    },
    {
      title: "2.3 Limpieza y Desinfección",
      link: `${MODULO_2_FOLDER}`,
      type: "MP4",
      image: "img/desinfeccion m2.jpeg"
    },
    {
      title: "2.4 Manejo y Dosificación de Químicos",
      link: `${MODULO_2_FOLDER}`,
      type: "MP4",
      image: "img/dosificacion m2.jpg"
    },
    {
      title: "2.5 Cronogramas de LYD",
      link: `${MODULO_2_FOLDER}`,
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
      link: `${MODULO_3_FOLDER}`,
      type: "MP4",
      image: "img/infraestructira m3.jpg"
    },
    {
      title: "3.2 Mantenimiento y Limpieza de Equipos",
      link: `${MODULO_3_FOLDER}`,
      type: "MP4",
      image: "img/mantenimiento m3.jpg"
    },
    {
      title: "3.3 Manejo Integrado de Plagas",
      link: `${MODULO_3_FOLDER}`,
      type: "MP4",
      image: "img/plagas m3.jpg"
    },
    {
      title: "NORMA-440",
      link: `${MODULO_3_FOLDER}`,
      type: "PDF",
      image: "img/440 m3.png"
    },
    {
      title: "RESOLUCIÓN-ARCSA-DE-2022-016-AKRG_Alimentos-procesados-2",
      link: `${MODULO_3_FOLDER}`,
      type: "PDF",
      image: "img/ARCSA m3 .png"
    }
  ],
  "biblioteca-audiovisual": [
    {
      title: "El poder invisible de los microbios _ ZonaDocu",
      link: `${MODULO_4_FOLDER}`,
      type: "MP4",
      image: "img/microbios m4.png"
    },
    {
      title: "Azúcar y aditivos - El lado oscuro de la industria alimentaria",
      link: `${MODULO_4_FOLDER}`,
      type: "MP4",
      image: "img/azucares m4.jpg"
    },
    {
      title: "Salud e higiene de los empleados",
      link: `${MODULO_4_FOLDER}`,
      type: "MP4",
      image: "img/salud empelados m4.jpg"
    },
    {
      title: "MANEJO DE RESIDUOS (1)",
      link: `${MODULO_4_FOLDER}`,
      type: "MP4",
      image: "img/residuos m4.jpg"
    },
    {
      title: "Control de plagas en la industria de alimentos. Riesgos",
      link: `${MODULO_4_FOLDER}`,
      type: "MP4",
      image: "img/plagas alimentos m4.jpg"
    },
    {
      title: "Manipulación de pollo fresco (1)",
      link: `${MODULO_4_FOLDER}`,
      type: "MP4",
      image: "img/pollo m4.jpg"
    },
    {
      title: "Limpieza y desinfección",
      link: `${MODULO_4_FOLDER}`,
      type: "MP4",
      image: "img/desinfeccion m4.jpg"
    },
    {
      title: "Normas de higiene para el personal manipulador de alimentos",
      link: `${MODULO_4_FOLDER}`,
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
        ${isVideo ? "Abrir desde Drive" : "Abrir recurso"}
      </p>
    </div>
  `;

  return card;
}

function closeInlineVideo() {
  const inlinePlayer = document.getElementById("inlinePlayer");
  const inlineVideo = document.getElementById("inlineVideo");

  if (!inlinePlayer || !inlineVideo) return;

  inlineVideo.pause();
  inlineVideo.removeAttribute("src");
  inlineVideo.load();
  inlinePlayer.style.display = "none";
  activeInlineVideoLink = "";
}

function openInlineVideo(resourceTitle, videoLink) {
  // Abre la carpeta de Drive en una ventana flotante
  // Si en el futuro tienes IDs de archivo específicos, puedes cambiar esto
  // para usar URLs de reproducción directa: https://drive.google.com/file/d/ID/preview
  window.open(videoLink, 'driveFolder', 'width=1000,height=700,resizable=yes,scrollbars=yes');
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
  const driveLink = document.getElementById("moduleDriveLink");

  if (title) title.textContent = "Biblioteca Institucional";
  if (subtitle) subtitle.textContent = "Innova Food";
  if (desc) desc.textContent = "Recursos académicos en ciencia y tecnología alimenta";
  if (badge) badge.textContent = selectedModule.subtitle;
  if (totalBooks) totalBooks.textContent = resources.length;

  if (driveLink && selectedModule.driveFolder) {
    driveLink.href = selectedModule.driveFolder;
    driveLink.style.display = "inline-flex";
  }

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
      const resourceTitle = titleNode ? titleNode.textContent.trim() : "Reproductor de video";

      if (videoLink) {
        openInlineVideo(resourceTitle, videoLink);
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
