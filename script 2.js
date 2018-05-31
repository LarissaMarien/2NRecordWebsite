var mijnArtiesten = document.getElementsByClassName("artistbox");
var ii = 0;
while (ii < mijnArtiesten.length) {
  mijnArtiesten[ii].onmouseover = function() {
    var source = this.getAttribute("src");
    this.setAttribute("src",this.getAttribute("data-rug"));
    this.setAttribute("data-rug",source);
    console.log("over");
  }
  mijnArtiesten[ii].onmouseout = function() {
    var source = this.getAttribute("src");
    this.setAttribute("src",this.getAttribute("data-rug"));
    this.setAttribute("data-rug",source);
    console.log("out");
  }
ii++;
}
