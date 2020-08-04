// var animation = bodymovin.loadAnimation({
//   container: document.getElementById("firstLottie"),
//   renderer: "svg",
//   loop: true,
//   autoplay: true,
//   path: "https://assets2.lottiefiles.com/packages/lf20_i9mxcD.json",
// });

LottieInteractivity.create({
  mode: "scroll",
  player: "#firstLottie",
  actions: [
    {
      visibility: [0, 1],
      type: "seek",
      frames: [0, 100],
    },
  ],
});
