// script to change the text color accompanying the hovered icon in the landing section
document.getElementById('watchMovieIcon').addEventListener("mouseover",function(){
  document.getElementById('movieIconText').classList.add('white');
});
document.getElementById('watchMovieIcon').addEventListener("mouseout",function(){
  document.getElementById('movieIconText').classList.remove('white');
});

document.getElementById('meetCastIcon').addEventListener("mouseover",function(){
  document.getElementById('castIconText').classList.add('white');
});
document.getElementById('meetCastIcon').addEventListener("mouseout",function(){
  document.getElementById('castIconText').classList.remove('white');
});
