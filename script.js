let tl = gsap.timeline();

function sheryAnimation() {
  Shery.mouseFollower({ skew: 5 });
  Shery.makeMagnet("#nav a, #nav svg", {
    ease: "cubic-bezier(0.23, 1, 0.320, 0.5)",
  });
  Shery.hoverWithMediaCircle("#web , #GRAPHIC" /* Element to target.*/, {
    images: ["hover.jpg"] /*OR*/,
  });
  Shery.imageEffect(".images", {
    style: 6,
    debug:true,
    gooey: true,
    config: {
      noiseDetail: { value: 6.11, range: [0, 100] },
      distortionAmount: { value: 2.9, range: [0, 10] },
      scale: { value: 59.54, range: [0, 100] },
      speed: { value: 0.58, range: [0, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.8333333134651184 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: true },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.27, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 0 },
      noise_speed: { value: 0.84, range: [0, 10] },
      metaball: { value: 0.44, range: [0, 2] },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.38, range: [0, 2] },
      noise_scale: { value: 8.4, range: [0, 100] },
    },
  });
  
}
sheryAnimation();

function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    multiplier: 0.5,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
locomotive();

// function themeChange(){
//   let obys = document.querySelector("#nav #n1 #n11 .obyssvg")
//   obys.addEventListener("click",() => {
//     document.documentElement.style.setProperty("--primary","#fff")
//     document.documentElement.style.setProperty("--secondary","#151515")
//   })
// }
// themeChange();

function loadingAnimation() {
  let load = document.querySelector("#loader h4");
  let loader = document.querySelector("#loader");
  grow = 0;
  let int = setInterval(function () {
    if (grow < 100) {
      grow++;
      load.innerHTML = grow;
    }
  }, 30);
  tl.from("#loader h1 , #loader h2", {
    y: 100,
    duration: 1,
    stagger: 0.1,
  });

  setTimeout(function () {
    clearInterval(int);
    tl.to("#loader h1 , #loader h2", {
      opacity: 0,
      stagger: 0.3,
    });
    tl.to("#load", {
      delay: 0,
      opacity: 0,
    });
    tl.to("#loader p", {
      delay: 0,
      opacity: 0,
    });
    tl.to("#loader", {
      duration: 0.7,
      delay: 0.5,
      top: "-100%",
    });
    tl.from("#page1 h1 , #page1 h2", {
      y: 130,
      duration: 1,
      // delay: 0.5,
      stagger: 0.2,
    });
  }, 4000);
}
loadingAnimation();

function page2ani() {
  let vid = document.querySelector("#page2 #video");
  let vidImg = document.querySelector("#page2 #video img");
  let video = document.querySelector("#page2 #video video");
  flag = 0;
  vid.addEventListener("click", function () {
    if (flag == 0) {
      vidImg.style.zIndex = "-1";
      video.play();
      flag = 1;
    } else {
      vidImg.style.zIndex = "1";
      video.pause();
      flag = 0;
    }
  });
  vid.addEventListener("mouseenter", function () {
    gsap.to(".mousefollower", {
      opacity: 0,
    });
  });
  vid.addEventListener("mouseleave", function () {
    gsap.to(".mousefollower", {
      opacity: 1,
    });
    gsap.to("#page2 .play", {
      left: 1000,
      top: -70,
    });
  });
  vid.addEventListener("mousemove", function (elem) {
    gsap.to("#page2 .play", {
      left: elem.x - 650,
      top: elem.y - 300,
    });
  });
}
page2ani();

// function page5(){
//   gsap.to("#page5 #left",{
//     x:-1000,
//     scrollTrigger:{
//       trigger:"page5",
//       scroll:"#main",
//       start:"top 150%",
//       end:"top -50%",
//       scrub:2,
//       markers:true
//     }
//   })
//   gsap.from("#page5 #right",{
//     x:-1000,
//     scrollTrigger:{
//       trigger:"page5",
//       scroll:"#main",
//       start:"top 150%",
//       end:"top -50%",
//       scrub:2,
//       markers:true
//     }
//   })
// }
// page5()
