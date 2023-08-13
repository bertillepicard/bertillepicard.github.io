gsap.registerPlugin(MorphSVGPlugin)
const colors = ["#99999999", "#99999999", "#99999999", "#99999999", "#99999999", "#99999999"];

for (let i = 0; i < 6; i++) {
  gsap.to("#start" + i, {
    duration: 1, 
    morphSVG: "#end" + i,
    fill: colors[i],
    yoyo: true,
    repeat: -1,
    repeatDelay: 0.5,
    ease: "power3.inOut"
  });
}
