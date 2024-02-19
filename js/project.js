//gsap scroll inline

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
      snap: 1 / (sections.length - 1),
      end: "+=3500",
    },
  });
});

// gsap anim scroll smooth
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
        animateFrom(elem);
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

//burgermenu

const burgerIcon = document.querySelector(".burger-button i");
const burgerButton = document.querySelector(".burger-button");
const burgerMenu = document.querySelector(".burger-menu");

burgerButton.onclick = function () {
  burgerMenu.classList.toggle("openmenu");
  const isOpen = burgerMenu.classList.contains("openmenu");
  burgerIcon.className = isOpen ? "fas fa-xmark" : "fas fa-bars";
};

window.onload = function () {
  burgerMenu.classList.remove("openmenu");
};
