"use strict"

const imagens = [
    "./img/image-01.jpg",
    "./img/image-02.jpg",
    "./img/image-03.jpg",
    // "./img/image-04.jpg",
    "./img/image-05.jpg",
    "./img/image-06.jpg",
    // "./img/image-07.jpg",
    "./img/image-08.jpg",
    "./img/image-09.jpg",
    "./img/image-10.jpg",
]

// const

const limpraId = (url) => url.replace("./img/", "").split(".")[0].replace(" ", "-")

const criarItem = (urlImagem) => {
    const container = document.querySelector(".galeria-container")

    const novoLink = document.createElement("a")
    novoLink.href = `urlImagem`
    novoLink.classList.add("galeria-items")
    novoLink.innerHTML = `<img src="${urlImagem}" alt=""></img>`
    container.appendChild(novoLink)

    // container.innerHTML += `
    //         <a href="${urlImagem}" class="galeria-items">
    //             <img src="${urlImagem}" alt="">
    //         </a>
    //         `

}

const carregarGaleria = (imagens) => imagens.forEach(criarItem)

const criarSlide = (urlImagem) => {
    const container = document.querySelector(".slide-container")
    const novoDiv = document.createElement("div")
    novoDiv.classList.add("slide")
    novoDiv.id = limpraId(urlImagem)
    novoDiv.innerHTML = `
    <div class="slide" id="zenitsu-agatsuma">
        <div class="imagem-container">
            <a href="" class="icones fechar">&#10006;</a>
            <a href="#tanjiro-kamado" class="icones anterior">&#171;</a>
            <img src="img/zenitsu-agatsuma.jpg" alt="">
            <a href="#demon-slayer" class="icones proximo">&#187;</a>
        </div>
    </div>`
}

const carregarSlide = (imagens) => imagens.forEach(criarItem)

carregarGaleria(imagens)
carregarSlide(imagens)