
/*--------------
-----COLORS
-----------------*/

let resColor = document.getElementById('resultColor');
resColor.onclick = function () {
    resColor.style.color = "lime"
}
resColor.onmouseover = function () {
    resColor.style.color = "red"
}
resColor.ondblclick = function () {
    resColor.style.color = "navy"
}


/*--------------
-----positions
-----------------*/
let resPos = document.getElementById('resultPos');
resPos.style.display = "flex"
let child = resPos.children[0]
child.style.width = "500px";
let oldStylePos = child.style;
child.onclick = function () {
    this.style.width = '1px';
    this.style.marginLeft = "48%"
}
child.ondblclick = function () {
    child.style = oldStyle
}


/*--------------
-----police
-----------------*/

let resPol = document.getElementById('resultPol');
resPol.style.lineHeight = "16px";
resPol.style.fontSize = "16px";
let oldStylePol = resPol.style
resPol.onmouseover = function () {
    this.style.fontFamily = "Verbana";
    this.style.textDecoration = "line-through";
    this.style.lineHeight = (parseInt(this.style.lineHeight.replace('px', '')) * 2) + "px"

    this.style.fontSize = (parseInt(this.style.fontSize.replace('px', '')) * 1.5) + "px"
    this.style.textTransform = "capitalize"

}
resPol.onmouseout = function () {
    this.style = oldStylePol
}



/*--------------
-----roll over
-----------------*/

let myImg = document.getElementById('img1');

myImg.onmouseover = function () {
    this.setAttribute('oldSrc', this.src)
    this.src = "tor_a01_paquet_action_web_v1-page-003.webp"

}
myImg.onmouseout = function () {
    this.src = this.getAttribute('oldSrc')
}


/*--------------
-----ajout petit text
-----------------*/
let par = document.getElementById('parPetitText');
let petitPar = `
<p style="font-size:8px; font-style:italic">
Chancellor sitting in Lincoln's Inn Hall. Implacable November weather. As much mud in the streets as if the waters had but newly retired from the face of the earth, and it would not be wonderful to meet a Megalosaurus, forty feet long or so, waddling</p>
`
par.onmouseover = function () {
    this.setAttribute('oldContent', this.innerHTML)
    this.innerHTML = this.getAttribute('oldContent') + petitPar

}
par.onmouseout = function () {
    this.innerHTML = this.getAttribute('oldContent')
}
