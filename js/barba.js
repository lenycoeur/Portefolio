/* --- BARBAJS ANIM ----*/

barba.init({
    transitions: [
      {
        name: 'slide',
        leave(data) {
          // Nettoyer les animations GSAP
          gsap.to(data.current.container, {
            duration: 0.3,
            onComplete: () => {
              // Supprimer tous les tweens du container courant
              gsap.killTweensOf(data.current.container);
            },
          });
        },
        enter(data) {
          // Nettoyer les animations GSAP
          gsap.from(data.next.container, {
            duration: 0.3,
            onComplete: () => {
              // Supprimer tous les tweens du container suivant
              gsap.killTweensOf(data.next.container);
            },
          });
        },
      },
    ],
    
    hooks: {
      afterEnter() {
        // Réinitialisez des animations ou des scripts si nécessaire
      },
    },
  });

  gsap.registerPlugin(ScrollTrigger, { clearProps: true });
