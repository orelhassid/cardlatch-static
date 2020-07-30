var animation = bodymovin.loadAnimation({
  container: document.getElementById("alerts"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "/animation/alerts-bubbles.json",
});

animation.setSpeed(0.5);
