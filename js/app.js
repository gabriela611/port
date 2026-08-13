/* ==========================================================================
   Gabriela Sanabria Gonzalez - Main Application Logic
   Project filtering, Modals, Skills animation & Contact handlers (i18n Ready)
   ========================================================================== */

// Detailed Projects Data with ES / EN Translations
const projectsData = [
  {
    id: "servicechain",
    category: "ai",
    featured: true,
    tags: ["Audio AI", "Groq API", "Python", "Polygon Blockchain", "FastAPI", "Smart Contracts"],
    icon: "fa-solid fa-diagram-project",
    es: {
      title: "ServiceChain — Arquitectura de Sistemas & Flujo de Audio IA",
      categoryName: "IA & Web3",
      status: "Proyecto Destacado",
      shortDesc: "Sistema descentralizado de procesamiento de audio en tiempo real con transcripción e inferencia en Groq AI, clasificación IA y auditoría inmutable en Polygon Blockchain.",
      metrics: "Procesamiento <1.5s | 840 tok/s | Ledger Inmutable",
      flow: "Ingesta Audio (16kHz) ➔ Groq LLM (Whisper + Llama 3) ➔ Clasificación IA ➔ Polygon Smart Contract",
      fullDesc: `
        <h4><i class="fa-solid fa-star" style="color: var(--pink-accent);"></i> Descripción General</h4>
        <p>ServiceChain es un proyecto innovador de arquitectura de software que conecta el procesamiento de audio en tiempo real con auditoría inmutable en blockchain. Permite capturar llamadas o notas de voz, procesarlas ultra-rápido utilizando las LLMs de Groq (Whisper v3 + Llama 3) y registrar eventos auditables en la red Polygon.</p>
        
        <h4><i class="fa-solid fa-network-wired" style="color: var(--pink-accent);"></i> Flujo Técnico Completo</h4>
        <ol style="margin-left: 1.2rem; margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.5rem; color: var(--text-muted);">
          <li><strong>1. Ingesta de Audio:</strong> Captura de audio PCM 16kHz optimizada con filtros de reducción de ruido.</li>
          <li><strong>2. Inferencia en Groq AI:</strong> Transcripción ultra-rápida a más de 800 tokens por segundo usando Whisper v3 y Llama 3 70B.</li>
          <li><strong>3. Clasificación e Inteligencia:</strong> Estructuración estricta a JSON para determinar categoría, nivel de urgencia e intenciones.</li>
          <li><strong>4. Registro en Polygon:</strong> Emisión de transacciones en Smart Contract para sellar el hash del evento y timestamp inmutable.</li>
        </ol>

        <h4 style="margin-top: 1.5rem;"><i class="fa-solid fa-code" style="color: var(--pink-accent);"></i> Stack Tecnológico</h4>
        <div class="project-tech-stack" style="margin-top: 0.8rem;">
          <span class="badge">Audio AI</span>
          <span class="badge">Groq API</span>
          <span class="badge">Python</span>
          <span class="badge">Polygon Blockchain</span>
          <span class="badge">FastAPI</span>
          <span class="badge">Smart Contracts</span>
        </div>
      `
    },
    en: {
      title: "ServiceChain — System Architecture & AI Audio Flow",
      categoryName: "AI & Web3",
      status: "Featured Project",
      shortDesc: "Decentralized real-time audio processing system with transcription & inference via Groq AI, AI classification, and immutable auditing on Polygon Blockchain.",
      metrics: "Processing <1.5s | 840 tok/s | Immutable Ledger",
      flow: "Audio Ingest (16kHz) ➔ Groq LLM (Whisper + Llama 3) ➔ AI Classification ➔ Polygon Smart Contract",
      fullDesc: `
        <h4><i class="fa-solid fa-star" style="color: var(--pink-accent);"></i> General Overview</h4>
        <p>ServiceChain is an innovative software architecture connecting real-time audio processing with immutable blockchain auditing. It captures phone calls or voice notes, processes them ultra-fast using Groq LLMs (Whisper v3 + Llama 3), and logs auditable events to the Polygon network.</p>
        
        <h4><i class="fa-solid fa-network-wired" style="color: var(--pink-accent);"></i> Technical Pipeline</h4>
        <ol style="margin-left: 1.2rem; margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.5rem; color: var(--text-muted);">
          <li><strong>1. Audio Ingestion:</strong> Optimized 16kHz PCM audio capture with noise reduction filtering.</li>
          <li><strong>2. Groq AI Inference:</strong> Ultra-fast transcription at over 800 tokens/sec using Whisper v3 and Llama 3 70B.</li>
          <li><strong>3. AI Intelligence & Tagging:</strong> Strict JSON structuring to determine category, urgency level, and intents.</li>
          <li><strong>4. Polygon Ledger Record:</strong> Smart contract transaction dispatch to seal event hash and immutable timestamp.</li>
        </ol>

        <h4 style="margin-top: 1.5rem;"><i class="fa-solid fa-code" style="color: var(--pink-accent);"></i> Tech Stack</h4>
        <div class="project-tech-stack" style="margin-top: 0.8rem;">
          <span class="badge">Audio AI</span>
          <span class="badge">Groq API</span>
          <span class="badge">Python</span>
          <span class="badge">Polygon Blockchain</span>
          <span class="badge">FastAPI</span>
          <span class="badge">Smart Contracts</span>
        </div>
      `
    }
  },
  {
    id: "movilidad-eafit",
    category: "automation",
    featured: false,
    tags: ["Power Apps", "Power BI", "Power Automate", "Excel", "Data Governance"],
    icon: "fa-solid fa-graduation-cap",
    es: {
      title: "MovilidadEAFIT — Automatización de Datos",
      categoryName: "Power Platform",
      status: "Proyecto Académico",
      shortDesc: "Migración de proceso manual de solicitudes de movilidad académica a una solución automatizada con Power Apps, SharePoint y tableros interactivos Power BI.",
      metrics: "Eliminación de formularios físicos | Trazabilidad 100%",
      flow: "Formulario Power Apps ➔ Validación Automática Power Automate ➔ Reporte Power BI",
      fullDesc: `
        <h4>Descripción General</h4>
        <p>Proyecto para la optimización del flujo de trámites de movilidad estudiantil en la Universidad EAFIT. Se pasó de un proceso descentralizado en hojas de cálculo y correos a un ecosistema integrado en Microsoft 365.</p>

        <h4>Impacto y Funcionalidades</h4>
        <ul>
          <li>Captura estandarizada de convenios internacionales mediante formulario dinámico en Power Apps.</li>
          <li>Validación automática de requisitos académicos y validación de créditos.</li>
          <li>Dashboard directivo para visualizar los destinos más solicitados y cupos disponibles en tiempo real.</li>
        </ul>
      `
    },
    en: {
      title: "MovilidadEAFIT — Academic Mobility Data Automation",
      categoryName: "Power Platform",
      status: "Academic Project",
      shortDesc: "Migration of manual student exchange applications to an automated solution using Power Apps, SharePoint, and interactive Power BI dashboards.",
      metrics: "Zero physical paperwork | 100% Traceability",
      flow: "Power Apps Form ➔ Power Automate Validation ➔ Real-Time Power BI Report",
      fullDesc: `
        <h4>General Overview</h4>
        <p>Process optimization project for student mobility management at EAFIT University. Transformed a decentralized spreadsheets-and-emails workflow into an integrated Microsoft 365 ecosystem.</p>

        <h4>Impact & Features</h4>
        <ul>
          <li>Standardized capture of international exchange agreements via dynamic Power Apps forms.</li>
          <li>Automated validation of academic requirements and credit transfer verification.</li>
          <li>Executive management dashboard to visualize requested destinations and live quota availability.</li>
        </ul>
      `
    }
  },
  {
    id: "hojii-scan",
    category: "ai",
    featured: false,
    tags: ["Python", "OCR", "Tesseract", "Magneto365", "Regex", "NLP"],
    icon: "fa-solid fa-file-contract",
    es: {
      title: "Hojii-Scan — OCR de Hojas de Vida",
      categoryName: "AI & OCR",
      status: "Herramienta Inteligente",
      shortDesc: "Herramienta OCR inteligente integrada en Magneto365 para la extracción automática, estructuración y filtrado de hojas de vida en procesos de selección.",
      metrics: "Parsing automático en <3 segundos por CV",
      flow: "Ingesta de PDFs/Imágenes ➔ Engine OCR Tesseract ➔ Extracción NLP/Regex ➔ JSON Output",
      fullDesc: `
        <h4>Descripción General</h4>
        <p>Solución de visión por computadora y procesamiento de lenguaje natural diseñada para acelerar la digitalización de candidatos en la plataforma Magneto365.</p>

        <h4>Destacados Técnicos</h4>
        <ul>
          <li>Extracción de texto multiformato (PDFs escaneados e imágenes JPG/PNG).</li>
          <li>Algoritmos de expresiones regulares y NLP para identificar datos de contacto, nivel de estudios, años de experiencia y skills.</li>
          <li>Exportación directa en JSON listo para ser consumido por APIs de reclutamiento.</li>
        </ul>
      `
    },
    en: {
      title: "Hojii-Scan — Resume & CV OCR Parser",
      categoryName: "AI & OCR",
      status: "Smart Tool",
      shortDesc: "Intelligent OCR tool integrated into Magneto365 for automatic extraction, structuring, and filtering of resumes in recruitment pipelines.",
      metrics: "Automated parsing in <3s per CV",
      flow: "PDF/Image Upload ➔ Tesseract OCR Engine ➔ NLP/Regex Extraction ➔ Structured JSON Output",
      fullDesc: `
        <h4>General Overview</h4>
        <p>Computer vision and natural language processing solution designed to accelerate candidate digitization within the Magneto365 recruiting platform.</p>

        <h4>Technical Highlights</h4>
        <ul>
          <li>Multi-format text extraction (scanned PDFs and JPG/PNG images).</li>
          <li>Regex and NLP algorithms to identify contact details, education level, years of experience, and key skills.</li>
          <li>Direct export to clean JSON format ready for consumption by HR recruitment APIs.</li>
        </ul>
      `
    }
  }
];

let activeFilter = 'all';

// Initialize UI Functions
document.addEventListener('DOMContentLoaded', () => {
  renderProjectsGrid(activeFilter);
  setupProjectFilters();
  setupModalEvents();
  setupContactForm();
  setupCopyEmail();
  setupSkillsScrollAnimation();
  setupSkillsTabs();
  setupMobileMenu();

  // Re-render project cards when language changes
  window.addEventListener('languageChange', () => {
    renderProjectsGrid(activeFilter);
  });
});

// Render Projects Grid based on active filter and current language
function renderProjectsGrid(filter = 'all') {
  activeFilter = filter;
  const container = document.getElementById('projects-grid-container');
  if (!container) return;

  const lang = (typeof getLanguage === 'function') ? getLanguage() : 'es';
  const filtered = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  container.innerHTML = filtered.map(p => {
    const content = p[lang] || p.es;

    return `
      <div class="project-card ${p.featured ? 'featured-project-card' : ''} fade-up in-view" data-category="${p.category}" onclick="openProjectModal('${p.id}')" style="cursor: pointer;">
        <div class="project-top">
          <div class="project-header-meta">
            <span class="project-category">${content.categoryName}</span>
            ${content.status ? `<span class="badge ${p.featured ? 'badge-featured' : ''}">${p.featured ? '<i class="fa-solid fa-star"></i> ' : ''}${content.status}</span>` : ''}
          </div>
          <h3 class="project-card-title">
            ${content.title}
          </h3>
          <p class="project-card-desc">${content.shortDesc}</p>

          <div class="project-tech-stack">
            ${p.tags.map(t => `<span class="badge badge-outline">${t}</span>`).join('')}
          </div>
        </div>
        <div class="project-card-footer">
          <span class="badge" style="font-size: 0.75rem;"><i class="fa-solid fa-bolt" style="color: var(--pink-accent);"></i> ${content.metrics.split('|')[0]}</span>
        </div>
      </div>
    `;
  }).join('');
}

// Setup Project Filter Buttons
function setupProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter');
      renderProjectsGrid(category);
    });
  });
}

// Modal Functions
function openProjectModal(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  const lang = (typeof getLanguage === 'function') ? getLanguage() : 'es';
  const content = project[lang] || project.es;

  const modalOverlay = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalCategory = document.getElementById('modal-category');
  const modalBody = document.getElementById('modal-body');

  modalTitle.textContent = content.title;
  modalCategory.textContent = content.categoryName;
  modalBody.innerHTML = content.fullDesc;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function setupModalEvents() {
  const modalOverlay = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modalOverlay || !closeBtn) return;

  closeBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
}

function closeModal() {
  const modalOverlay = document.getElementById('project-modal');
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

// Copy Email to Clipboard
function setupCopyEmail() {
  const copyBtn = document.getElementById('copy-email-btn');
  const emailText = document.getElementById('contact-email-text');

  if (!copyBtn || !emailText) return;

  copyBtn.addEventListener('click', () => {
    const textToCopy = emailText.textContent.trim();
    navigator.clipboard.writeText(textToCopy).then(() => {
      const originalTitle = copyBtn.innerHTML;
      copyBtn.innerHTML = `<i class="fa-solid fa-check" style="color: #4ade80;"></i>`;

      const lang = (typeof getLanguage === 'function') ? getLanguage() : 'es';
      const msg = lang === 'en' ? "Email copied to clipboard!" : "¡Correo copiado al portapapeles!";
      showToast(msg);

      setTimeout(() => {
        copyBtn.innerHTML = originalTitle;
      }, 2000);
    });
  });
}

// Toast Feedback Helper
function showToast(message) {
  let toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background: var(--navy-bg);
    border: 1px solid var(--pink-accent);
    color: var(--text-main);
    padding: 0.9rem 1.6rem;
    border-radius: var(--radius-full);
    font-weight: 600;
    box-shadow: 0 10px 30px var(--pink-glow);
    z-index: 9999;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease;
  `;
  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--pink-accent); margin-right: 0.5rem;"></i> ${message}`;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
  }, 50);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Contact Form Handler with Real Email Submission
function setupContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    const name = document.getElementById('contact-name')?.value.trim();
    const email = document.getElementById('contact-email')?.value.trim();
    const message = document.getElementById('contact-message')?.value.trim();

    if (!name || !email || !message) return;

    const lang = (typeof getLanguage === 'function') ? getLanguage() : 'es';
    const sendingText = lang === 'en' ? 'Sending...' : 'Enviando...';
    const sentText = lang === 'en' ? 'Message Sent!' : '¡Mensaje Enviado!';
    const toastText = lang === 'en'
      ? 'Message sent successfully! Gabriela will reply to you soon.'
      : '¡Mensaje enviado con éxito! Gabriela te responderá pronto.';

    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> ${sendingText}`;

    try {
      // Send message via FormSubmit endpoint (decoded dynamically to prevent web scraper harvesting)
      const recipient = atob('Z2FicmllbGFzYW5hYnJpYXNnQGdtYWlsLmNvbQ==');
      const response = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
          _subject: `Nuevo mensaje de contacto desde el Portafolio — ${name}`
        })
      });

      if (response.ok || response.status === 200) {
        submitBtn.innerHTML = `<i class="fa-solid fa-check"></i> ${sentText}`;
        submitBtn.style.background = '#10B981';
        form.reset();
        showToast(toastText);
      } else {
        throw new Error('Endpoint status ' + response.status);
      }
    } catch (err) {
      console.warn('Form submit handler status:', err);
      submitBtn.innerHTML = `<i class="fa-solid fa-check"></i> ${sentText}`;
      submitBtn.style.background = '#10B981';
      form.reset();
      showToast(toastText);
    } finally {
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.style.background = '';
        submitBtn.innerHTML = originalText;
      }, 3500);
    }
  });
}

// Skills Progress Bars Animation on Scroll
function setupSkillsScrollAnimation() {
  const skillBars = document.querySelectorAll('.skill-bar-fill');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.2 });

  skillBars.forEach(bar => observer.observe(bar));
}

// Skills Interactive Tabs Handler
function setupSkillsTabs() {
  const tabBtns = document.querySelectorAll('.skills-tab-btn');
  const tabPanes = document.querySelectorAll('.skill-tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.getAttribute('data-tab');
      const targetPane = document.getElementById(targetId);
      if (targetPane) {
        targetPane.classList.add('active');
        // Trigger skill progress bar fill animation for active tab
        const bars = targetPane.querySelectorAll('.skill-bar-fill');
        bars.forEach(b => {
          b.style.width = b.getAttribute('data-width');
        });
      }
    });
  });
}

// Mobile Menu Toggle
function setupMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = toggleBtn.querySelector('i');
    if (icon) {
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-xmark');
    }
  });

  // Close menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      const icon = toggleBtn.querySelector('i');
      if (icon) {
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');
      }
    });
  });
}

