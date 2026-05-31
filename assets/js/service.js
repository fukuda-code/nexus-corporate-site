document.addEventListener('DOMContentLoaded', () => {

  const hash = window.location.hash;

  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      setTimeout(() => {
        gsap.set(target, { opacity: 1, x: 0, clearProps: "transform" });
        const headerHeight = document.querySelector('.header')?.offsetHeight ?? 0;
        const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 24;
        window.scrollTo({ top, behavior: 'smooth' });
      }, 100);
    }
  }

  // VANTA
  VANTA.NET({
    el: "#vanta-hero",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 700.00,
    minWidth: 100.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x00aaff,
    backgroundColor: 0x000000,
    points: 10.00,
    maxDistance: 20.00,
    spacing: 13.00,
  });

  // GSAP hero
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".hero h2", {
    opacity: 0,
    y: 40,
    duration: 1.4,
    ease: "power4.out"
  });

  // card
  const serviceCards = document.querySelectorAll('.service-section .service-card');

  /* 変更後 */
  serviceCards.forEach((card, i) => {
    const fromRight = i % 2 === 0;
    const isSP = window.innerWidth <= 768;

    gsap.fromTo(card,
      isSP
        ? { opacity: 0, y: 30 }
        : { opacity: 0, x: fromRight ? 200 : -200 },
      {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1,
        ease: 'power3.out',
      }
    );
  });

  // anker
  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      setTimeout(() => {
        gsap.set(target, { opacity: 1, x: 0 });
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }


});