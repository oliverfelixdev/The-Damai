function WindowScroller() {
  const lenis = new Lenis({
    lerp: 0.1,
    duration: 1.5,
    // infinite: true
    smooth: true,
    direction: "vertical",
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}
WindowScroller();

function navAnimation() {
  gsap.to(".nav-bar", {
    backgroundColor: "#0000003c",
    backdropFilter: "blur(30px)",
    height: "80px",
    borderBottomColor: "#ffffff1a",
    scrollTrigger: {
      trigger: ".nav-bar",
      scroller: "body",
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });

  gsap.to("#myDemolishNav", {
    backgroundColor: "#EAE5DF",
    borderBottomColor: "#a09690c2",
    duration: 0.5,
    scrollTrigger: {
      trigger: ".anchor-data-reciver-hero",
      scroller: "body",
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });

  gsap.to(".nav-anchor-container a", {
    color: "#322018",
    duration: 0.5,
    scrollTrigger: {
      trigger: ".anchor-data-reciver-hero",
      scroller: "body",
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });

  gsap.to(".hbsb-mn", {
    attr: { stroke: "#322018" },
    duration: 0.5,
    scrollTrigger: {
      trigger: ".anchor-data-reciver-hero",
      scroller: "body",
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });

  gsap.to(".mainLogo-gcs", {
    filter: "invert(75%)",
    duration: 0.5,
    scrollTrigger: {
      trigger: ".anchor-data-reciver-hero",
      scroller: "body",
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });

  gsap.to(".nav-r a", {
    color: "#F8F6F4",
    backgroundColor: "#00383C",
    duration: 0.5,
    scrollTrigger: {
      trigger: ".anchor-data-reciver-hero",
      scroller: "body",
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });
}
navAnimation();

function slide__Nav() {
  document.addEventListener("DOMContentLoaded", function () {
    let menuBTN = document.querySelector(".hbsb-mn");
    let navSlidemenu = document.querySelector(".navSlidemenu");
    gsap.set(navSlidemenu, {
      x: "-100%",
      ease: Expo.easeInOut,
      duration: .5,
     });
    if (menuBTN && navSlidemenu) {
      menuBTN.addEventListener("click", function () {
        navSlidemenu.style.display = "inline-block";
        gsap.to(navSlidemenu, {
          duration: .5,
          x: 0,
          ease: Expo.easeInOut });
      });
    }

    let menuBTNClose = document.querySelector(".icon-tabler-x");

    if (menuBTNClose && navSlidemenu) {
      menuBTNClose.addEventListener("click", function () {
        gsap.to(navSlidemenu, {
          duration: .5,
          x: "-100%",
          ease: Expo.easeInOut,
        });
      });
    }
  });
}
slide__Nav();

function mainSwiperSlideImages() {
  let imageSwiper = new Swiper(".swiper-container", {
    autoplay: {
      delay: 5050,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    /*     navigation:{
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }, */
    speed: 500,
    breakpoints: {
      640: {
        speed: 2200,
      },
      1240: {
        speed: 500,
      },
    },
    loop: true,
    effect: "fade",
    allowTouchMove: false,
  });
}
mainSwiperSlideImages();

let textSwiperFunc = () => {
  let textSwiper = new Swiper(".swiper-container-text", {
    autoplay: {
      delay: 5050,
    },
    speed: 500,
    breakpoints: {
      640: {
        speed: 2200,
      },
      1240: {
        speed: 500,
      },
    },
    loop: true,
    allowTouchMove: false,
  });
};
textSwiperFunc();

function swiperSlide3() {
  let swiper3 = new Swiper(".mySwiper3", {
    effect: "creative",
    loop: true,
    allowTouchMove: false,
    autoplay: {
      delay: 5050,
    },
    speed: 500,
    breakpoints: {
      640: {
        speed: 2200,
      },
      1240: {
        speed: 500,
      },
    },
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-20%", 0, -1],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
  });
}
swiperSlide3();

function loader__window_ms() {
  let loader = document.querySelector("#ms__loader");
  setTimeout(function () {
    loader.style.top = "-200%";
  }, 3000);
}
loader__window_ms();

gsap.to(".loaderImg", {
  duration: 2,
  opacity: 1,
  y: "140%",
  ease: "easeInOut",
});
