
const site ='https://source.unsplash.com/random/300x300';

var randomResimler = new Array();
for (let a = 0; a < 15; a++) {
  randomResimler[a] = site + randomSayisi();
}

function randomSayisi() {
  return Math.floor(Math.random()*200)+1;
}

var resimler = document.getElementsByClassName('resim');
for (let r = 0; r < 15; r++) {
  resimler[r].innerHTML =
    resimler[r].innerHTML + '<img src='+ randomResimler[r] + '/>';
  console.log(resimler[r]);
}

