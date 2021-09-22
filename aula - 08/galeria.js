"use strict"

const imagens = [
    "./img/image - 02.jpg",
    "./img/image - 03.jpg",
    "./img/image - 05.jpg",
    "./img/image - 06.jpg",
    "./img/image - 07.jpg",
    "./img/image - 08.jpg",
    "./img/image - 09.jpg",
    "./img/image - 01.jpg",
    "./img/image - 04.jpg",
    "./img/image - 10.jpg",
    "./img/image - 11.jpg",
    "./img/image - 12.jpg",
    "./img/image - 13.jpg",
    "./img/image - 14.jpg",
    "./img/image - 15.jpg",
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