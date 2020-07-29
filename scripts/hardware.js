var animation = bodymovin.loadAnimation({
  container: document.getElementById("hardware"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "/animation/hardware.json",
  frameRate: 20,
});
// animation.setSpeed(2);
