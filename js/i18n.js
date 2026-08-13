/* ==========================================================================
   Gabriela Sanabria Gonzalez - Internationalization (i18n) Module
   Handles Spanish / English translation switching, persistence & DOM updates
   ========================================================================== */

const translations = {
  es: {
    // Navigation
    "nav.about": "Sobre mí",
    "nav.projects": "Proyectos",
    "nav.skills": "Skills",
    "nav.contact": "Contacto",
    "nav.cta": "Hablemos",

    // Hero Section
    "hero.tagline": "Systems engineer building tools that eliminate manual work - data, automation, and clean interfaces.",
    "hero.btnProjects": "Explorar Proyectos",
    "hero.btnContact": "Contactar",
    "hero.stat1Label": "Universidad",
    "hero.stat1Val": "Ing. Sistemas - EAFIT",
    "hero.stat3Label": "Especialidad",
    "hero.stat3Val": "Data & BI / Automation",
    "hero.stat4Label": "Modalidad",
    "hero.stat4Val": "Remote & International",

    // Projects Section
    "projects.tag": "Proyectos Académicos & Soluciones",
    "projects.title": "Portafolio de Proyectos",
    "projects.subtitle": "Casos prácticos de Business Intelligence, automatizaciones con Microsoft Power Platform, herramientas OCR e interfaces web.",
    "projects.filterAll": "Todos los Proyectos",
    "projects.filterAuto": "Power Platform & Auto",
    "projects.filterAi": "AI & OCR",
    "projects.flowLabel": "Flujo Técnico:",
    "projects.viewDetails": "Ver Detalle Técnico",

    // Skills Section
    "skills.tag": "Habilidades & Competencias",
    "skills.title": "Tech Stack & Skills",
    "skills.subtitle": "Agrupadas por dominio técnico: análisis de datos, automatización low-code, desarrollo de software e idiomas.",
    "skills.group1Title": "Datos & BI",
    "skills.group2Title": "Automatización & CRM",
    "skills.group3Title": "Desarrollo & DBs",
    "skills.group4Title": "Idiomas & Roles",
    "skills.group4Desc": "Dominio bilingüe certificado con experiencia en comunicación médica crítica y redacción técnica internacional.",
    "skills.levelAdvanced": "Avanzado",
    "skills.levelUpperInter": "Intermedio-Alto",
    "skills.levelInter": "Intermedio",
    "skills.levelNative": "Nativo",
    "skills.langEsName": "Español",
    "skills.langEnName": "Inglés C1",
    "skills.langEnLevel": "Intérprete Médica",
    "skills.badge1": "Interpretación Médica Remota",
    "skills.badge2": "Traducción Técnica & Copy",
    "skills.workflowName": "Flujos de Trabajo & Negocio",

    // Contact Section
    "contact.tag": "Contacto Directo",
    "contact.title": "Hablemos de tu Próximo Proyecto",
    "contact.subtitle": "¿Interesado en mi perfil para vacantes remotas, consultoría de automatización o proyectos de datos? Escríbeme directamente.",
    "contact.role": "Estudiante de Ing. de Sistemas & Intérprete Médica",
    "contact.locLabel": "Ubicación",
    "contact.locVal": "Medellín, Colombia (Disponible Globalmente)",
    "contact.formTitle": "Enviar Mensaje Directo",
    "contact.labelName": "Nombre Completo",
    "contact.placeholderName": "Tu nombre o empresa",
    "contact.labelEmail": "Correo de Contacto",
    "contact.placeholderEmail": "ejemplo@correo.com",
    "contact.labelMsg": "Mensaje",
    "contact.placeholderMsg": "Cuéntame sobre la propuesta, proyecto o vacante...",
    "contact.btnSubmit": "Enviar Mensaje",

    // Footer
    "footer.text": "Ingeniería de Sistemas — Universidad EAFIT. Apasionada por eliminar trabajo repetitivo mediante código, datos y diseño limpio.",
    "footer.copy": "© 2026 Gabriela Sanabria Gonzalez. Todos los derechos reservados.",

    // Subtitles Typewriter
    "hero.sub1Label": "Ingeniería de Sistemas — EAFIT University",
    "hero.sub1Text": "Estudiante de Ingeniería de Sistemas construyendo soluciones que eliminan trabajo manual.",
    "hero.sub2Label": "Bilingual Medical Interpreter C1",
    "hero.sub2Text": "Intérprete médica remota bilingüe (EN/ES) con precisión en entornos clínicos de alto nivel.",
    "hero.sub3Label": "Data & Automation Specialist",
    "hero.sub3Text": "Transformando procesos manuales en dashboards multi-página Power BI y Power Apps.",
    "hero.sub4Label": "Freelance Translator & Tech Writer",
    "hero.sub4Text": "Traductora y redactora enfocada en proyectos remotos e internacionales de alto impacto."
  },
  en: {
    // Navigation
    "nav.about": "About me",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "nav.cta": "Let's Talk",

    // Hero Section
    "hero.badge": "Available for Remote & International Roles",
    "hero.tagline": "Systems engineer building tools that eliminate manual work - data, automation, and clean interfaces.",
    "hero.btnProjects": "Explore Projects",
    "hero.btnContact": "Get in Touch",
    "hero.stat1Label": "University",
    "hero.stat1Val": "Systems Eng. — EAFIT",
    "hero.stat2Label": "Certified Bilingual",
    "hero.stat2Val": "Medical Interpreter C1 (EN/ES)",
    "hero.stat3Label": "Specialty",
    "hero.stat3Val": "Data & BI / Automation",
    "hero.stat4Label": "Work Mode",
    "hero.stat4Val": "Remote & International",

    // Projects Section
    "projects.tag": "Academic Projects & Solutions",
    "projects.title": "Project Portfolio",
    "projects.subtitle": "Case studies in Business Intelligence, Microsoft Power Platform automations, OCR tools, and web interfaces.",
    "projects.filterAll": "All Projects",
    "projects.filterAuto": "Power Platform & Auto",
    "projects.filterAi": "AI & OCR",
    "projects.flowLabel": "Technical Flow:",
    "projects.viewDetails": "View Technical Details",

    // Skills Section
    "skills.tag": "Skills & Competencies",
    "skills.title": "Tech Stack & Skills",
    "skills.subtitle": "Grouped by technical domain: data analytics, low-code automation, software development, and languages.",
    "skills.group1Title": "Data & BI",
    "skills.group2Title": "Automation & CRM",
    "skills.group3Title": "Development & DBs",
    "skills.group4Title": "Languages & Roles",
    "skills.group4Desc": "Certified bilingual proficiency with experience in high-stakes medical interpretation and international technical writing.",
    "skills.levelAdvanced": "Advanced",
    "skills.levelUpperInter": "Upper-Intermediate",
    "skills.levelInter": "Intermediate",
    "skills.levelNative": "Native",
    "skills.langEsName": "Spanish",
    "skills.langEnName": "English C1",
    "skills.langEnLevel": "Medical Interpreter",
    "skills.badge1": "Remote Medical Interpretation",
    "skills.badge2": "Technical Translation & Copywriting",
    "skills.workflowName": "Workflows & Business Processes",

    // Contact Section
    "contact.tag": "Direct Contact",
    "contact.title": "Let's Talk About Your Next Project",
    "contact.subtitle": "Interested in my profile for remote positions, automation consulting, or data projects? Write to me directly.",
    "contact.role": "Systems Engineering Student & Medical Interpreter",
    "contact.locLabel": "Location",
    "contact.locVal": "Medellín, Colombia (Available Globally)",
    "contact.formTitle": "Send a Direct Message",
    "contact.labelName": "Full Name",
    "contact.placeholderName": "Your name or company",
    "contact.labelEmail": "Contact Email",
    "contact.placeholderEmail": "example@email.com",
    "contact.labelMsg": "Message",
    "contact.placeholderMsg": "Tell me about the proposal, project, or open role...",
    "contact.btnSubmit": "Send Message",

    // Footer
    "footer.text": "Systems Engineering - EAFIT University. Passionate about eliminating repetitive work through code, data, and clean design.",
    "footer.copy": "© 2026 Gabriela Sanabria Gonzalez. All rights reserved.",

    // Subtitles Typewriter
    "hero.sub1Label": "Systems Engineering - EAFIT University",
    "hero.sub1Text": "Systems Engineering student building tools that eliminate manual work.",
    "hero.sub2Label": "Bilingual Medical Interpreter C1",
    "hero.sub2Text": "Remote bilingual medical interpreter (EN/ES) with high precision in clinical environments.",
    "hero.sub3Label": "Data & Automation Specialist",
    "hero.sub3Text": "Transforming manual workflows into multi-page Power BI dashboards and Power Apps.",
    "hero.sub4Label": "Freelance Translator & Tech Writer",
    "hero.sub4Text": "Translator and technical writer focused on high-impact remote & global projects."
  }
};

let currentLang = localStorage.getItem('portfolio_lang') || 'es';

function getLanguage() {
  return currentLang;
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('portfolio_lang', lang);
  document.documentElement.lang = lang;

  updateDOMTranslations();

  // Dispatch custom event for dynamic components (projects, typewriter)
  window.dispatchEvent(new CustomEvent('languageChange', { detail: { lang } }));
}

function toggleLanguage() {
  const newLang = currentLang === 'es' ? 'en' : 'es';
  setLanguage(newLang);
}

function getText(key) {
  return (translations[currentLang] && translations[currentLang][key]) || key;
}

function updateDOMTranslations() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = getText(key);
    if (!text) return;

    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      if (el.hasAttribute('placeholder')) {
        el.placeholder = text;
      }
    } else {
      // Preserve icon elements if present within the node if any
      const icon = el.querySelector('i');
      if (icon) {
        const iconHTML = icon.outerHTML;
        el.innerHTML = `${iconHTML} ${text}`;
      } else {
        el.textContent = text;
      }
    }
  });

  const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
  placeholderElements.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const text = getText(key);
    if (text) {
      el.placeholder = text;
    }
  });

  // Update language toggle buttons text/active state
  const langToggles = document.querySelectorAll('.lang-switch-btn');
  langToggles.forEach(btn => {
    const esOption = btn.querySelector('.lang-opt-es');
    const enOption = btn.querySelector('.lang-opt-en');
    if (esOption && enOption) {
      if (currentLang === 'es') {
        esOption.classList.add('active');
        enOption.classList.remove('active');
      } else {
        enOption.classList.add('active');
        esOption.classList.remove('active');
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
});
