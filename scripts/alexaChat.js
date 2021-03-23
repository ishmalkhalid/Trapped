// script to add chat functionality to alexa contact section
// input fields are displayed after animation of alexa's text ends
// next message from alexa is displayed after the user presses enter in an input field

var alexa=document.getElementById('alexaImg');
var count=0;

var chatContainer=document.getElementById('chat-container');

var alexaIntroWrapper=document.getElementById('alexaIntroWrapper');
var alexaIntro=document.getElementById('alexaIntro');
var nameInput=document.getElementById('nameInput');

alexa.addEventListener("click",function(){
  if (count==0){
    alexa.style.cursor="default";
    count+=1;
    chatContainer.style.display="block";
    alexaIntroWrapper.style.display="block";
    location.hash="alexaImg";

  }

});


alexaIntro.addEventListener("animationend",function(e){
  if (e.animationName==="typing"){
    alexaIntro.style.border="0px";
    nameInput.style.display="block";
    location.hash="alexaImg";

  }
});

var name;
var alexaEmailWrapper=document.getElementById('alexaEmailWrapper');
var alexaEmail=document.getElementById('alexaEmail');
var emailInput=document.getElementById('emailInput');

var alexaThanks=document.getElementById('alexaThanks');

nameInput.addEventListener("keyup",function(e){
  if (e.keyCode===13){
    // store the name of the user
    name=nameInput.value;
    if (name.indexOf(' ')>=0){
      name=name.split(" ",1);
    }
    var genString=name+", what is your email?";
    alexaEmail.innerText=genString;
    alexaEmailWrapper.style.display="block";

    alexaThanks.innerText="Thank you "+ name +", your message has been received!"

    location.hash="alexaImg";

  }
});

alexaEmail.addEventListener("animationend",function(e){
  if (e.animationName==="typing"){
    alexaEmail.style.border="0px";
    emailInput.style.display="block";
    location.hash="alexaImg";

  }
});


var alexaMessageWrapper=document.getElementById('alexaMessageWrapper');
var alexaMessage=document.getElementById('alexaMessage');
var messageInput=document.getElementById('messageInput');

emailInput.addEventListener("keyup",function(e){
  if(e.keyCode===13){
    alexaMessageWrapper.style.display="block";
    location.hash="alexaImg";

  }
});

alexaMessage.addEventListener("animationend",function(e){
  if (e.animationName==="typing"){
    alexaMessage.style.border="0px";
    messageInput.style.display="block";
    location.hash="alexaImg";

  }
});

var alexaThanksWrapper=document.getElementById('alexaThanksWrapper');
messageInput.addEventListener("keyup",function(e){
  if(e.keyCode===13){
    alexaThanksWrapper.style.display="block";
    location.hash="alexaImg";

  }
});
