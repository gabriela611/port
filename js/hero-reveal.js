/* ==========================================================================
   Hero Section - Subtitle Reveal Animation Controller (i18n Compatible)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const subtitleLine = document.getElementById('hero-subtitle-line');
  const counterSpan = document.getElementById('hero-subtitle-counter');

  if (!subtitleLine) return;

  const subtitlesDict = {
    es: [
      {
        label: "Ingeniería de Sistemas - Universidad EAFIT",
        text: "Estudiante de Ingeniería de Sistemas construyendo soluciones que eliminan trabajo manual."
      },
      {
        label: "Especialista en Datos & Automatización",
        text: "Transformando procesos manuales en dashboards multi-página Power BI y Power Apps."
      },
      {
        label: "Traductora Freelance & Tech Writer",
        text: "Traductora y redactora enfocada en proyectos remotos e internacionales de alto impacto."
      }
    ],
    en: [
      {
        label: "Systems Engineering - EAFIT University",
        text: "Systems Engineering student building tools that eliminate manual work."
      },
      {
        label: "Data & Automation Specialist",
        text: "Transforming manual workflows into multi-page Power BI dashboards and Power Apps."
      },
      {
        label: "Freelance Translator & Tech Writer",
        text: "Translator and technical writer focused on high-impact remote & global projects."
      }
    ]
  };

  let currentIndex = 0;
  let isTyping = false;
  let currentTimeout = null;
  let currentInterval = null;

  function getSubtitles() {
    const lang = (typeof getLanguage === 'function') ? getLanguage() : 'es';
    return subtitlesDict[lang] || subtitlesDict.es;
  }

  function typeSubtitle(index) {
    if (isTyping) return;
    isTyping = true;

    const subtitles = getSubtitles();
    const currentObj = subtitles[index % subtitles.length];
    const fullText = currentObj.text;

    // Update counter text
    if (counterSpan) {
      counterSpan.textContent = `SUBTITLE [0${(index % subtitles.length) + 1} / 0${subtitles.length}] — ${currentObj.label}`;
    }

    // Reset line state
    subtitleLine.classList.remove('visible');
    subtitleLine.textContent = '';

    currentTimeout = setTimeout(() => {
      subtitleLine.classList.add('visible');
      let charIdx = 0;

      currentInterval = setInterval(() => {
        if (charIdx < fullText.length) {
          subtitleLine.textContent += fullText.charAt(charIdx);
          charIdx++;
        } else {
          clearInterval(currentInterval);
          isTyping = false;

          // Schedule next subtitle line after 4.5 seconds
          currentTimeout = setTimeout(() => {
            currentIndex = (currentIndex + 1) % subtitles.length;
            typeSubtitle(currentIndex);
          }, 4500);
        }
      }, 35);
    }, 400);
  }

  function resetAndReType() {
    clearTimeout(currentTimeout);
    clearInterval(currentInterval);
    isTyping = false;
    typeSubtitle(currentIndex);
  }

  window.addEventListener('languageChange', () => {
    resetAndReType();
  });

  // Kickstart animation
  typeSubtitle(0);
});
