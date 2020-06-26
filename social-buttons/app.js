(function () {
     let divs = document.querySelectorAll(".icons div");
     divs.forEach(function (div, index) {
          div.style.animation = `topToBottom 1s cubic-bezier(0.51, 0.92, 0.24, 1.15)forwards ${
               index / 7 + 0.3
          }s`;
     });
})();
