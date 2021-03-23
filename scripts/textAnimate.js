// script to animate text from tobiasahlin.com/movingletters

// Wrap every letter in a span
function animateLanding(){

  var textWrapper = document.querySelector('.ml3');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({loop: false})
    .add({
      targets: '.ml3 .letter',
      opacity: [0,1],
      easing: "easeInOutQuad",
      duration: 2250,
      delay: (el, i) => 40 * (i+1)
    });;

  var textWrapper1 = document.querySelector('.ml31');
  textWrapper1.innerHTML = textWrapper1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({loop: false})
    .add({
      targets: '.ml31 .letter',
      opacity: [0,1],
      easing: "easeInOutQuad",
      duration: 2250,
      delay: (el, i) => 150 * (i+1)
    });;

    var textWrapper2 = document.querySelector('.ml32');
    textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: false})
      .add({
        targets: '.ml32 .letter',
        opacity: [0,1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: (el, i) => 10 * (i+1)
      });;

    var textWrapper3 = document.querySelector('.ml33');
    textWrapper3.innerHTML = textWrapper3.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: false})
      .add({
        targets: '.ml33 .letter',
        opacity: [0,1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: (el, i) => 150 * (i+1)
      });;

    var textWrapper4 = document.querySelector('.ml34');
    textWrapper4.innerHTML = textWrapper4.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: false})
      .add({
        targets: '.ml34 .letter',
        opacity: [0,1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: (el, i) => 150 * (i+1)
      });;
}
