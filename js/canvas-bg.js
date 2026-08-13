/* ==========================================================================
   Interactive Background Canvas - Dynamic Particle & Mouse Glow
   ========================================================================== */

(function () {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  let mouse = {
    x: width / 2,
    y: height / 2,
    targetX: width / 2,
    targetY: height / 2,
    radius: 180,
    isHovered: false
  };

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initParticles();
  });

  window.addEventListener('mousemove', (e) => {
    mouse.targetX = e.clientX;
    mouse.targetY = e.clientY;
    mouse.isHovered = true;
  });

  window.addEventListener('mouseleave', () => {
    mouse.isHovered = false;
  });

  // Particle Class
  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.radius = Math.random() * 2 + 1;
      this.baseAlpha = Math.random() * 0.4 + 0.15;
      this.alpha = this.baseAlpha;
      // Alternate between Pink accent and Soft Pink/White
      this.color = Math.random() > 0.4 ? '255, 133, 187' : '255, 206, 227';
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // Bounce edges
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse attraction / interaction
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < mouse.radius && mouse.isHovered) {
        const force = (mouse.radius - dist) / mouse.radius;
        const angle = Math.atan2(dy, dx);
        this.x -= Math.cos(angle) * force * 1.5;
        this.y -= Math.sin(angle) * force * 1.5;
        this.alpha = Math.min(0.85, this.baseAlpha + force * 0.5);
      } else {
        this.alpha += (this.baseAlpha - this.alpha) * 0.05;
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = `rgba(${this.color}, 0.5)`;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  let particles = [];
  const particleCount = Math.min(80, Math.floor((width * height) / 15000));

  function initParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }

  initParticles();

  // Animation Loop
  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Smooth lerp mouse coordinates
    mouse.x += (mouse.targetX - mouse.x) * 0.08;
    mouse.y += (mouse.targetY - mouse.y) * 0.08;

    // Draw mouse spotlight ambient glow
    if (mouse.isHovered) {
      const gradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        mouse.radius * 1.8
      );
      gradient.addColorStop(0, 'rgba(255, 133, 187, 0.12)');
      gradient.addColorStop(0.5, 'rgba(2, 26, 84, 0.08)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    }

    // Connect close particles with subtle translucent pink lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          const alpha = (1 - dist / 130) * 0.18;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(255, 133, 187, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    // Update and draw particles
    particles.forEach((p) => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(animate);
  }

  animate();
})();
