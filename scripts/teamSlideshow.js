// script to add carousel functionality to the team section and dynamically change the content of the section

// content for all team members:
var currIndex=0;
var roles=['lead actor','editor','tech expert','creative lead'];
var descs=['Ishmal is a sophomore (Class of 2023), majoring in Computer Science.She loves acting, and her skills lend her the leading role in the movie! She is also a fan of horror movies - today she knows how it is to be in one of them!',
            'Ayesha is a sophomore (Class of 2023), majoring in Computer Science. She loves programming, travelling, exploring, and channeling her inner creativity into amazing work. She loves to help the community, and does so by being an Resident Assistant.',
            'Hasin is a Sophomore from Pakistan deciding between Computer Science and Interactive Media as potential majors. When he is not coding, you can find him playing the guitar or staring into the starry night sky.',
            'Anas is a sophomore (Class of 2023) from Pakistan, majoring in Computer Science. He loves programming, and is pursuing his interests as a major. Besides, he enjoys exploring places and food, and has an interest in politics and cricket.'
            ];
var githubLinks=['https://github.com/ishmalkhalid',
                  'https://github.com/AyeshaZfr',
                  'https://github.com/hasin-shabbir',
                  'https://github.com/MuhammadAnas720'
                ];
var instagramLinks=['https://www.instagram.com/ishmal1n0nly/',
                    'https://www.instagram.com/ayesha2842/',
                    'https://www.instagram.com/hasin.shabbir/',
                    'https://www.instagram.com/insta4anas/'
                  ];
var facebookLinks=['https://www.facebook.com/ishmal.khalid.9',
                    'https://www.facebook.com/ayesha.zafar.96343',
                    'https://www.facebook.com/Muhammad.Hasin.Shabbir/',
                    'https://www.facebook.com/manas.gadar'
                  ];

var currIndex=0;
var teamRole=document.getElementById('teamRole');
var castDesc=document.getElementById('castDesc');
var teamPics=document.getElementsByClassName('teamImages');
var github=document.getElementById('github');
var instagram=document.getElementById('instagram');
var facebook=document.getElementById('facebook');

// initialize the settings of the team carousel content
document.getElementById('body').onload=function(){
  teamPics[currIndex].style.transform="translateX(0%)";
  github.href=githubLinks[currIndex];
  instagram.href=instagramLinks[currIndex];
  facebook.href=facebookLinks[currIndex];
};

var nextBtn=document.getElementById('nextTeam');
var prevBtn=document.getElementById('prevTeam');

// loads the previous team member
prevBtn.addEventListener("click",function(){
  teamPics[currIndex].style.transform="translateX(-110%)";

  setTimeout(function(){

    teamPics[currIndex].classList.add("displayNone");
    if (currIndex==0){
      currIndex=3;
    }else {
      currIndex-=1;
    }
    teamPics[currIndex].classList.remove("displayNone");

    setTimeout(function(){

      teamPics[currIndex].style.transform="translateX(0%)";
      // update content:
      teamRole.innerText=roles[currIndex];
      castDesc.innerText=descs[currIndex];
      github.href=githubLinks[currIndex];
      instagram.href=instagramLinks[currIndex];
      facebook.href=facebookLinks[currIndex];
    },400);
  },400);

});

// loads the next team member
nextBtn.addEventListener("click",function(){
  teamPics[currIndex].style.transform="translateX(-110%)";

  setTimeout(function(){

    teamPics[currIndex].classList.add("displayNone");
    currIndex=(currIndex+1)%4;
    teamPics[currIndex].classList.remove("displayNone");

    setTimeout(function(){

      teamPics[currIndex].style.transform="translateX(0%)";
      // update content:
      teamRole.innerText=roles[currIndex];
      castDesc.innerText=descs[currIndex];
      github.href=githubLinks[currIndex];
      instagram.href=instagramLinks[currIndex];
      facebook.href=facebookLinks[currIndex];
    },400);
  },400);

});
