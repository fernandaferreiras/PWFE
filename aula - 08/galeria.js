"use strict"

const imagens = [
    "./img/demon-slayer.jpg",
    "./img/giyu-tomioka.png",
    "./img/inosuke-hashibira.jpg",
    "./img/luas-superiores.jpg",
    "./img/muzan-kibutsuji.png",
    "./img/nezuko-kamado.jpg",
    "./img/tanjiro-kamado.png",
    "./img/zenitsu-agatsuma.jpg",
]

const limparId = (url) => url.replace("./img/", "").split(".")[0].replace(" ", "-")

const criarItem = (urlImagem) => {
    const container = document.querySelector(".galeria-container")

    const novoLink = document.createElement("a")
    novoLink.href = `#${limparId(urlImagem)}`
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



const criarSlide = (urlImagem, indice, arr) => {
    const container = document.querySelector(".slide-container")
    const novoDiv = document.createElement("div")
    novoDiv.classList.add("slide")
    novoDiv.id = limparId(urlImagem)

    const indiceAnterior = indice <= 0 ? arr.length - 1 : indice - 1
    const idAnterior = limparId(arr[indiceAnterior])

    const indiceProximo = indice >= arr.length -1 ? 0 : indice + 1
    const idProximo = limparId(arr[indiceProximo])

    novoDiv.innerHTML = `
        <div class="imagem-container">
            <a href="" class="icones fechar">&#10006;</a>
            <a href="#${idAnterior}" class="icones anterior">&#171;</a>
            <img src="${urlImagem}" alt="">
            <a href="#${idProximo}" class="icones proximo">&#187;</a>
        </div>
        `

    container.appendChild(novoDiv)
}

const carregarSlide = (imagens) => imagens.forEach(criarSlide)

carregarGaleria(imagens)
carregarSlide(imagens)