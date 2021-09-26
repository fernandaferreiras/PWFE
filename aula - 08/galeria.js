"use strict"

const imagens = [
    "./img/image-01.png",
    "./img/image-02.png",
    "./img/image-03.png",
    "./img/image-04.png",
    "./img/image-05.png",
    "./img/image-06.png",
    "./img/image-07.png",
    "./img/image-08.png",
    "./img/image-09.png",
    "./img/image-10.png",
]

const criarItem = (urlImagem) => {
        const container = document.querySelector(".galeria-container")

        const novoLink = document.createElement("a")
        novoLink.href = urlImagem
        novoLink.classList.add("galeria-items")
        novoLink.innerHTML = `<img src="${urlImagem}" alt=""></img>`
        container.appendChild(novoLink)

        // container.innerHTML += `
        //         <a href="${urlImagem}" class="galeria-items">
        //             <img src="${urlImagem}" alt="">
        //         </a>
        //         `

}

const carregarImagens = () => imagens.forEach(criarItem)

carregarImagens()