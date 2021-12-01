'use strict';

import { openModal, closeModal } from './modal.js';
import { getProdutos, postProduto, deleteProduto } from './produtos.js';
import { imagemPreview } from './imagemPreview.js'

const criarLinha = ({ foto, nome, preco, categoria }) => {
    const linha = document.createElement('tr');
    linha.innerHTML = `
    <tr>
    <td>
        <img src="${foto}" class="produto-image" />
    </td>
    <td>${nome}</td>
    <td>${preco}</td>
    <td>${categoria}</td>
    <td>
        <button type="button" class="button green" data-idproduto="${id}">
            Editar
        </button>
        <button type="button" class="button red" data-idproduto="${id}">
            Excluir
        </button>
    </td>
    </tr>
    `;
    return linha;
};

const carrregarTabela = async () => {
    const container = document.querySelector('.records tbody');
    const produtos = await getProdutos();
    const linhas = produtos.map(criarLinha);

    container.replaceChildren(...linhas);
    // console.log(linhas);
};

const handleFile = () => imagemPreview('inputFile', 'imagePreview');

const salvarProduto = () => {

    const produto = {
        nome: document.getElementById('product').value,
        preco: document.getElementById('price').value,
        categoria: document.getElementById('category').value,
        foto: document.getElementById('imagePreview').src
    };

    postProduto(produto);
    closeModal();
    carregarTabela();

};

const handleClickTbody = ({ target }) => {

    if (target.type === 'button') {
        const acaoBotao = target.textContent.trim();
        if (acaoBotao === 'Excluir') {
            deleteProduto(target.dataset.idproduto);
            carregarTabela();
        }
    }

};

carrregarTabela();

document
    .getElementById('cadastrarCliente')
    .addEventListener('click', openModal);

document.getElementById('modalClose').addEventListener('click', closeModal);

document.getElementById('cancel').addEventListener('click', closeModal);

document.getElementById('inputFile').addEventListener('change', handleFile);

document.getElementById('save').addEventListener('click', salvarProduto);

document.querySelector('.records tbody').addEventListener('click', handleClickTbody);