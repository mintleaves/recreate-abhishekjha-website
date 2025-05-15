// const tl = gsap.timeline();
// tl.to("#fs", {
//   height: 0,
//   duration: 2,
//   ease: Expo.easeInOut,
// });
// tl.to("#elem", {
//   height: "100%",
//   duration: 2,
//   delay: -2,
//   ease: Expo.easeInOut,
// });
// tl.to("#white", {
//   height: "100%",
//   duration: 2,
//   delay: -1.6,
//   ease: Expo.easeInOut,
// });

function revealToSpan() {
  document.querySelectorAll(".reveal").forEach((element) => {
    let spanParent = document.createElement("span");
    let spanChild = document.createElement("span");
    spanParent.classList.add("parent");
    spanChild.classList.add("child");
    spanChild.innerHTML = element.innerHTML;
    spanParent.appendChild(spanChild);
    element.innerHTML = "";
    element.appendChild(spanParent);
  });
}
revealToSpan();
let tl = gsap.timeline();
tl.from(".child span", {
  x: 100,
  duration: 1.4,
  stagger: 0.2,
  ease: Power3.easeInOut,
})
  .to(".parent .child", {
    y: "-100%",
    duration: 1,
    ease: Circ.easeInOut,
  })
  .to("#loader", {
    height: 0,
    duration: 1,
    ease: Circ.easeInOut,
  })
  .to("#green", {
    height: "100%",
    top: 0,
    duration: 1,
    delay: -.8,
    ease: Circ.easeInOut,
  })
  .to("#green", {
    height: 0,
    duration: 1,
    delay: -.5,
    ease: Circ.easeInOut,
  });
