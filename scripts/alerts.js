var animation = bodymovin.loadAnimation({
  container: document.getElementById("alerts"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "/animation/alert-orbit.json",
});

animation.setSpeed(0.5);
