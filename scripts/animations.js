// Overnight
var overnightAdnimation = bodymovin.loadAnimation({
  container: document.getElementById("overnight"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "/animation/overnight.json",
});

// Hardware

var hardwareAnimation = bodymovin.loadAnimation({
  container: document.getElementById("hardware"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "/animation/hardware.json",
});

// Alerts
var alertAnimation = bodymovin.loadAnimation({
  container: document.getElementById("alerts"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "/animation/alerts.json",
});

alertAnimation.setSpeed(0.5);

//   Analytics
var analyticsAnimation = bodymovin.loadAnimation({
  container: document.getElementById("analytics"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "/animation/analytics.json",
});

//   Shield
var shieldAnimation = bodymovin.loadAnimation({
  container: document.getElementById("shield"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "/animation/shield.json",
});

// Interactive

// LottieInteractivity.create({
//   mode: "scroll",
//   player: "#hardware",
//   actions: [
//     {
//       visibility: [0, 1],
//       type: "seek",
//       frames: [0, 150],
//     },
//   ],
// });
