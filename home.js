// home.js - GSAP Animations for Home Page

document.addEventListener('DOMContentLoaded', () => {
  // Ensure GSAP and ScrollTrigger are loaded
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  // 1. Hero Animations (Plays on load)
  const heroTl = gsap.timeline();
  
  // Text Reveal
  heroTl.fromTo('.gsap-reveal-text', 
    { y: 100, opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
    { y: 0, opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 1.2, ease: 'power4.out', delay: 0.2 }
  )
  .fromTo('.gsap-fade-in', 
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' },
    '-=0.8'
  );



  // 2. Generic Fade Up for Sections
  const fadeUpElements = document.querySelectorAll('.gsap-fade-up');
  
  fadeUpElements.forEach(el => {
    // If it's part of a stagger group, we skip it here and handle it below
    if (el.classList.contains('stagger-item') || el.classList.contains('stagger-prop') || el.classList.contains('why-stagger')) return;
    
    gsap.fromTo(el,
      { y: 60, opacity: 0 },
      { 
        y: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%', // Triggers when element top hits 85% of viewport
          toggleActions: 'play none none reverse'
        }
      }
    );
  });

  // 3. Services Stagger
  gsap.fromTo('.stagger-item',
    { y: 50, opacity: 0 },
    {
      y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
      scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  // 4. Properties Stagger
  gsap.fromTo('.stagger-prop',
    { y: 50, opacity: 0 },
    {
      y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out',
      scrollTrigger: {
        trigger: '.property-grid',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  // 5. Why Choose Us Stagger
  gsap.fromTo('.why-stagger',
    { x: -50, opacity: 0 },
    {
      x: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
      scrollTrigger: {
        trigger: '.why-list',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    }
  );


});
