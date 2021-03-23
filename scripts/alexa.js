// script to control website background music and color theme through alexa

// toggle alexa sidebar functions
function openAlexa() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeAlexa() {
  document.getElementById("mySidenav").style.width = "0";
}

// toggle website background mute
var muteBG=document.getElementById('muteBG');
muteBG.addEventListener("click",function(){
  document.getElementById('horrorBgSound').volume=!document.getElementById('horrorBgSound').volume;
  if (muteBG.innerText==="Alexa mute the sound"){
    muteBG.innerText="Alexa unmute the sound";
  }else {
    muteBG.innerText="Alexa mute the sound";
  }
});


//toggle between dark and light modes by changing the colors of elements
var toggleDark=document.getElementById('toggleDark');

var dark=true;
var darkColor="#110f10";
var darkColor2="#444";

var lightColor="white";
var lightColor2="#eee";
var lightColor3="#aaa";

toggleDark.addEventListener("click",function(){
  if (dark){//if current mode is dark, change it to light mode
    dark=false;
    toggleDark.innerText="Alexa turn on Dark Mode";
    document.getElementById('logo').classList.add("invert");
    document.getElementById('plotLine').style.color=darkColor2;
    document.getElementById('watchMovieIcon').style.color=darkColor;
    document.getElementById('meetCastIcon').style.color=darkColor;
    document.getElementById('watchMovieIcon').style.borderColor=darkColor;
    document.getElementById('meetCastIcon').style.borderColor=darkColor;
    document.getElementById('plotHead').style.color=darkColor;
    document.getElementById('movCap').style.color=darkColor2;
    document.getElementById('movieIconText').style.color=darkColor2;
    document.getElementById('castIconText').style.color=darkColor2;
    document.getElementById('body').style.backgroundColor="white";
    document.getElementById('body').style.color=darkColor;
    document.getElementById('menuIcon').style.fill=darkColor;
    document.getElementById('line1').style.stroke=darkColor;
    document.getElementById('line2').style.stroke=darkColor;
    document.getElementById('line3').style.stroke=darkColor;
    document.getElementById('myNav').style.backgroundColor="white";
    document.getElementById('mySidenav').style.backgroundColor="#ddd";
    document.getElementById('muteBG').style.color=darkColor;
    document.getElementById('toggleDark').style.color=darkColor;
    document.getElementById('closeAlexa').style.color=darkColor;

    document.getElementById('movieSection').style.backgroundColor="#ddd";
    document.getElementById('movieTitle').style.color=darkColor;
    document.getElementById('playBtn').style.color=darkColor;
    document.getElementById('pauseBtn').style.color=darkColor;
    document.getElementById('volUpBtn').style.color=darkColor;
    document.getElementById('volDownBtn').style.color=darkColor;
    document.getElementById('muteBtn').style.color=darkColor;
    document.getElementById('fullScrBtn').style.color=darkColor;

    document.getElementById('teamSection').style.backgroundColor=lightColor;
    document.getElementById('teamTitle').style.color=darkColor2;
    document.getElementById('teamRole').style.color=darkColor;
    document.getElementById('castDesc').style.color=darkColor2;
    document.getElementById('github').style.color=darkColor2;
    document.getElementById('facebook').style.color=darkColor2;
    document.getElementById('instagram').style.color=darkColor2;
    document.getElementById('prevTeam').style.color=darkColor2;
    document.getElementById('nextTeam').style.color=darkColor2;
    document.getElementById('prevTeam').style.borderColor=darkColor;
    document.getElementById('nextTeam').style.borderColor=darkColor;

    document.getElementById('storeSection').style.backgroundColor='#ddd';
    document.getElementById('storeTitle').style.color=darkColor;
    document.getElementById('currCart').style.color=darkColor;
    document.getElementById('currTotal').style.color=darkColor;
    document.getElementById('prod1i').style.backgroundColor=lightColor;
    document.getElementById('prod2i').style.backgroundColor=lightColor;
    document.getElementById('prod3i').style.backgroundColor=lightColor;

    document.getElementById('prod1b').style.color=darkColor;
    document.getElementById('prod2b').style.color=darkColor;
    document.getElementById('prod3b').style.color=darkColor;

    document.getElementById('prod1c').style.color=darkColor;
    document.getElementById('prod2c').style.color=darkColor;
    document.getElementById('prod3c').style.color=darkColor;

    document.getElementById('checkoutBtn').style.backgroundColor=darkColor;
    // document.getElementById('checkoutBtn').style.color=lightColor;

    document.getElementById('cart1').style.backgroundColor="black";
    // document.getElementById('cart1').style.color=lightColor;
    document.getElementById('cart2').style.backgroundColor="black";
    // document.getElementById('cart2').style.color=lightColor;
    document.getElementById('cart3').style.backgroundColor="black";
    // document.getElementById('cart3').style.color=lightColor;

    document.getElementById('contactSection').style.backgroundColor=lightColor;
    document.getElementById('contactTitle').style.color=darkColor;
    document.getElementById('alexaInstruction').style.color=darkColor2;
    document.getElementById('alexaIntro').style.color=darkColor;
    document.getElementById('alexaIntroWrapper').style.color=darkColor;
    document.getElementById('alexaEmail').style.color=darkColor;
    document.getElementById('alexaEmailWrapper').style.color=darkColor;
    document.getElementById('alexaMessage').style.color=darkColor;
    document.getElementById('alexaMessageWrapper').style.color=darkColor;
    document.getElementById('alexaThanksWrapper').style.color=darkColor;
    document.getElementById('alexaThanks').style.color=darkColor;

    document.getElementById('nameInput').style.color=darkColor;
    document.getElementById('emailInput').style.color=darkColor;
    document.getElementById('messageInput').style.color=darkColor;
  }
  else{//if current mode is light, change it to dark mode
    dark=true;
    toggleDark.innerText="Alexa turn on Light Mode";
    document.getElementById('logo').classList.remove("invert");
    document.getElementById('plotLine').style.color=lightColor2;
    document.getElementById('watchMovieIcon').style.color=lightColor;
    document.getElementById('meetCastIcon').style.color=lightColor;
    document.getElementById('watchMovieIcon').style.borderColor=lightColor;
    document.getElementById('meetCastIcon').style.borderColor=lightColor;
    document.getElementById('plotHead').style.color=lightColor;
    document.getElementById('movCap').style.color=lightColor3;
    document.getElementById('movieIconText').style.color=lightColor3;
    document.getElementById('castIconText').style.color=lightColor3;
    document.getElementById('body').style.backgroundColor=darkColor;
    document.getElementById('body').style.color=lightColor;
    document.getElementById('menuIcon').style.fill=lightColor;
    document.getElementById('line1').style.stroke=lightColor;
    document.getElementById('line2').style.stroke=lightColor;
    document.getElementById('line3').style.stroke=lightColor;
    document.getElementById('myNav').style.backgroundColor="black";
    document.getElementById('mySidenav').style.backgroundColor="#111";
    document.getElementById('muteBG').style.color="#818181";
    document.getElementById('toggleDark').style.color="#818181";
    document.getElementById('closeAlexa').style.color="#818181";

    document.getElementById('movieSection').style.backgroundColor="#444";
    document.getElementById('movieTitle').style.color=lightColor;
    document.getElementById('playBtn').style.color=lightColor2;
    document.getElementById('pauseBtn').style.color=lightColor2;
    document.getElementById('volUpBtn').style.color=lightColor2;
    document.getElementById('volDownBtn').style.color=lightColor2;
    document.getElementById('muteBtn').style.color=lightColor2;
    document.getElementById('fullScrBtn').style.color=lightColor2;

    document.getElementById('teamSection').style.backgroundColor=darkColor;
    document.getElementById('teamTitle').style.color=lightColor2;
    document.getElementById('teamRole').style.color=lightColor;
    document.getElementById('castDesc').style.color=lightColor2;
    document.getElementById('github').style.color=lightColor3;
    document.getElementById('facebook').style.color=lightColor3;
    document.getElementById('instagram').style.color=lightColor3;
    document.getElementById('prevTeam').style.color=lightColor3;
    document.getElementById('nextTeam').style.color=lightColor3;
    document.getElementById('prevTeam').style.borderColor=lightColor;
    document.getElementById('nextTeam').style.borderColor=lightColor;

    document.getElementById('storeSection').style.backgroundColor='#444';
    document.getElementById('storeTitle').style.color=lightColor;
    document.getElementById('currCart').style.color=lightColor;
    document.getElementById('currTotal').style.color=lightColor;
    document.getElementById('prod1i').style.backgroundColor="black";
    document.getElementById('prod2i').style.backgroundColor="black";
    document.getElementById('prod3i').style.backgroundColor="black";

    document.getElementById('prod1b').style.color=lightColor;
    document.getElementById('prod2b').style.color=lightColor;
    document.getElementById('prod3b').style.color=lightColor;

    document.getElementById('prod1c').style.color=lightColor;
    document.getElementById('prod2c').style.color=lightColor;
    document.getElementById('prod3c').style.color=lightColor;

    document.getElementById('checkoutBtn').style.backgroundColor="transparent";
    // document.getElementById('checkoutBtn').style.color=darkColor;

    document.getElementById('cart1').style.backgroundColor="transparent";
    // document.getElementById('cart1').style.color=darkColor;
    document.getElementById('cart2').style.backgroundColor="transparent";
    // document.getElementById('cart2').style.color=darkColor;
    document.getElementById('cart3').style.backgroundColor="transparent";
    // document.getElementById('cart3').style.color=darkColor;

    document.getElementById('contactSection').style.backgroundColor=darkColor;
    document.getElementById('contactTitle').style.color=lightColor;
    document.getElementById('alexaInstruction').style.color=lightColor2;
    document.getElementById('alexaIntro').style.color=lightColor;
    document.getElementById('alexaIntroWrapper').style.color=lightColor;
    document.getElementById('alexaEmail').style.color=lightColor;
    document.getElementById('alexaEmailWrapper').style.color=lightColor;
    document.getElementById('alexaMessage').style.color=lightColor;
    document.getElementById('alexaMessageWrapper').style.color=lightColor;
    document.getElementById('alexaThanksWrapper').style.color=lightColor;
    document.getElementById('alexaThanks').style.color=lightColor;

    document.getElementById('nameInput').style.color=lightColor;
    document.getElementById('emailInput').style.color=lightColor;
    document.getElementById('messageInput').style.color=lightColor;



  }
});
