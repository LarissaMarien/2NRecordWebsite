var random = function () {
      return Math.floor((Math.random() * 16));
}

var mijnMockUps = ["pics/plaatEmtyLizzFOTO.png","pics/plaatEmtyLizzTYPO.png","pics/plaatEmtyLizzILL.png","pics/plaatEmtyLizzALT.png","pics/plaatMandemFOTO.png","pics/plaatMandemTYPO.png","pics/plaatMandemILL.png","pics/plaatMandemALT.png","pics/plaatPreshesFOTO.png","pics/plaatPreshesTYPO.png","pics/plaatPreshesILL.png","pics/plaatPreshesALT.png","pics/plaatIcyJFOTO.jpg","pics/plaatIcyJTYPO.jpg","pics/plaatIcyJILL.jpg","pics/plaatIcyJALT.jpg"];

document.getElementById("pic06").setAttribute("src", mijnMockUps[random()]);
document.getElementById("pic07").setAttribute("src", mijnMockUps[random()]);
document.getElementById("pic08").setAttribute("src", mijnMockUps[random()]);
document.getElementById("pic09").setAttribute("src", mijnMockUps[random()]);
document.getElementById("pic10").setAttribute("src", mijnMockUps[random()]);
document.getElementById("pic11").setAttribute("src", mijnMockUps[random()]);
document.getElementById("pic12").setAttribute("src", mijnMockUps[random()]);
document.getElementById("pic13").setAttribute("src", mijnMockUps[random()]);
document.getElementById("pic14").setAttribute("src", mijnMockUps[random()]);
document.getElementById("pic15").setAttribute("src", mijnMockUps[random()]);
document.getElementById("pic16").setAttribute("src", mijnMockUps[random()]);
document.getElementById("pic17").setAttribute("src", mijnMockUps[random()]);
document.getElementById("pic18").setAttribute("src", mijnMockUps[random()]);
document.getElementById("pic19").setAttribute("src", mijnMockUps[random()]);
document.getElementById("pic20").setAttribute("src", mijnMockUps[random()]);
document.getElementById("pic21").setAttribute("src", mijnMockUps[random()]);


var arrayNumbers = [];

var deSlider = function () {
      var numbers = document.getElementsByClassName("webs");
      var teller = 0;
      var teller1 = 0;
      console.log(numbers.length);
      while (teller < numbers.length) {
            arrayNumbers.push(numbers[teller].getAttribute("src"));
            teller++;
      }
      console.log(arrayNumbers.join());
      arrayNumbers.shift();
      arrayNumbers.push(mijnMockUps[random()]);
      while (teller1 < numbers.length) {
            numbers[teller1].setAttribute("src",arrayNumbers[teller1]);
            teller1++;
      }
      console.log(arrayNumbers.join());
}
setInterval(deSlider,2000);

var mijnArtiesten = document.getElementsByClassName("artistbox");
var ii = 0;
while (ii < mijnArtiesten.length) {
  mijnArtiesten[ii].onmouseover = function() {
    var source = this.getAttribute("src");
    this.setAttribute("src",this.getAttribute("data-rug"));
    this.setAttribute("data-rug",source);
  }
  mijnArtiesten[ii].onmouseout = function() {
    var source = this.getAttribute("src");
    this.setAttribute("src",this.getAttribute("data-rug"));
    this.setAttribute("data-rug",source);
  }
  ii++;
}
