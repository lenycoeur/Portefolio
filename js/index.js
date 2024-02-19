document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  function hide(elem) {
    gsap.set(elem, { autoAlpha: 0 });
  }

  function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
      y = direction * 200;
    if (elem.classList.contains("reveal_G")) {
      x = -100;
      y = 0;
    } else if (elem.classList.contains("reveal_D")) {
      x = 100;
      y = 0;
    }
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

gsap.registerPlugin(ScrollTrigger, { clearProps: true });

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
