document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    let sections = gsap.utils.toArray(".section");
  
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        pin: true,
        scrub: 1,
        snap: 1/ (sections.length - 1),
        end: "+=3500",
      },
    });
  });


document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  function hide(elem) {
    gsap.set(elem, { autoAlpha: 0 });
  }

  function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 200;
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(
      elem,
      { x: x, y: y, autoAlpha: 0 },
      {
        duration: 1.35,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto",
      }
    );
  }

  gsap.utils.toArray(".reveal").forEach(function (elem) {
    hide(elem);
    ScrollTrigger.create({
      trigger: elem,
      onEnter: function () {
        animateFrom(elem, );
      },
      onEnterBack: function () {
        animateFrom(elem, -1);
      },
      onLeave: function () {
        hide(elem);
      },
    });
  });
});