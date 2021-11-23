const botao = document.getElementById("bt")
const secao2 = document.getElementById("s2")
const imgMao = document.getElementById("imgsecao2")
const texts2 = document.getElementById("psecao2")
secao2.style.height = "800px"

function removetext() {
    texts2.innerHTML = "A energia solar deve ser utilizada pois contribui para a preservação do meio ambiente, é uma fonte de energia limpa e renovável, auxiliando na economia de energia elétrica. Além disso ela conta com uma instalação fácil, valoriza seu imóvel e possibilita a geração de créditos energéticos."
    texts2.setAttribute('id', "txtbtn");
}

function addimg() {

    const img = document.createElement("img")
    img.setAttribute('id', 'btnimg')
    img.src = "js/plantas.png"
    img.style.width = "100%"
    img.style.display = "block"
    img.style.float = "right"
    img.style.marginTop = "140px"
    img.style.paddingRight = "50px"

    imgMao.parentNode.replaceChild(img, imgMao)

}

function removeImage() {
    imgMao.remove()
}

function changeColor() {

    secao2.classList.remove("section2")
    secao2.classList.add("novacor")


}

function changeMode() {
    addimg();
    changeColor();
    removeImage();
    removetext();
    document.getElementById("bt").style.display = "none";

}



botao.addEventListener('click', changeMode)