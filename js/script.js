/* Apenas Mobile! */

let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('nav-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})


/* Carrossel */

const carousels = document.querySelectorAll('.carousel');

carousels.forEach((carousel) => {
    const track = carousel.querySelector('.carousel-track');
    const items = carousel.querySelectorAll('.carousel-item');
    const prevButton = carousel.querySelector('.carousel-buttons #prev');
    const nextButton = carousel.querySelector('.carousel-buttons #next');

    let currentIndex = 0;

    function updateCarousel() {
        const width = items[0].clientWidth;
        track.style.transform = `translateX(-${currentIndex * width}px)`;

        items.forEach((item, index) => {
            const overlay = item.querySelector('.overlay');
            overlay.classList.remove('animate');
            void overlay.offsetWidth;  
            overlay.classList.add('animate');
        });
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);

    updateCarousel();
});


/* Modal */

    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = "flex"; 
        document.body.style.overflow = "hidden"; 
    }
    
    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = "none";
        document.body.style.overflow = "auto";  
    }
    
    window.onclick = function(event) {
        const modals = document.getElementsByClassName('modal');
        for (let i = 0; i < modals.length; i++) {
            if (event.target == modals[i]) {
                modals[i].style.display = "none";
                document.body.style.overflow = "auto"; 
            }
        }
    };
    


/* Cookies */ 

var msgCookies = document.getElementById('cookies-msg')

function aceito(){
    localStorage.lgpd = "sim"
    msgCookies.classList.remove('mostrar')
}

if(localStorage.lgpd == 'sim'){
    msgCookies.classList.remove('mostrar')
}

else{
    msgCookies.classList.add('mostrar')
}

 /* Barra de pesquisa do Academy */

 async function pesquisarCursos() {
    const termo = document.getElementById('search').value;

    // Evita busca se a barra estiver vazia
    if (termo.trim() === '') {
        document.getElementById('resultados').innerHTML = '';
        return;
    }

    try {
        const response = await fetch(`https://fenixreborn.com.br/search_academy.php?termo=${encodeURIComponent(termo)}`);
        const cursos = await response.json();

        // Limpar resultados anteriores
        const resultadosDiv = document.getElementById('resultados');
        resultadosDiv.innerHTML = '';

        // Exibir cursos encontrados
        cursos.forEach(curso => {
            const cursoDiv = document.createElement('div');
            cursoDiv.classList.add('resultado-item');
            cursoDiv.innerHTML = `
                <h3>${curso.nome}</h3>
                <p>${curso.descricao}</p>
                <p><strong>Preço: R$ ${parseFloat(curso.preco).toFixed(2)}</strong></p>
                <a href="${curso.link_compra}" target="_blank" class="btn-comprar">Comprar</a>
            `;
            resultadosDiv.appendChild(cursoDiv);
        });

        if (cursos.length === 0) {
            resultadosDiv.innerHTML = '<p>Nenhum curso encontrado.</p>';
        }
    } catch (erro) {
        console.error('Erro ao pesquisar cursos:', erro);
    }
} 

/* Conexão do Back-End com a página Academy */

async function carregarProdutos() {
    try {
        const response = await fetch('https://fenixreborn.com.br/listar_produtos.php');
        const produtos = await response.json();
        const container = document.getElementById('produtos');

        produtos.forEach(produto => {
            const card = document.createElement('div');
            card.classList.add('col-md-4', 'mb-4');
            card.innerHTML = `
                <div class="card">
                    <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}" style="height: 200px; object-fit: cover;">
                    <div class="card-body">
                        <h5 class="card-title">${produto.nome}</h5>
                        <p class="card-text">Preço: R$ ${produto.preco}</p>
                        <button onclick="mostrarDetalhes(${produto.id})" class="detalhes-btn">
                            Ver detalhes
                        </button>
                        <a href="${produto.link_compra}" target="_blank" class="btn btn-success mt-2">Comprar</a>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    } catch (erro) {
        console.error('Erro ao carregar produtos:', erro);
    }
}

async function mostrarDetalhes(id) {
    try {
        // Faz a requisição ao backend para obter os detalhes do produto
        const response = await fetch(`https://fenixreborn.com.br/listar_produto.php?id=${id}`);
        const produto = await response.json();

        // Preenche os elementos do modal com os dados do produto
        document.getElementById('modalImagem').src = produto.imagem || 'default.jpg';
        document.getElementById('modalNome').textContent = produto.nome;
        document.getElementById('modalDescricao').textContent = produto.descricao;
        document.getElementById('modalPreco').textContent = produto.preco;
        document.getElementById('modalLinkCompra').href = produto.link_compra || '#';

        // Exibe o modal
        document.getElementById('produtoModal').style.display = 'block';
    } catch (erro) {
        console.error('Erro ao carregar detalhes do produto:', erro);
    }
}

// Seleciona os elementos do modal e do botão de fechar
const modal = document.getElementById('produtoModal');
const modalClose = document.getElementById('modalClose');

// Fechar ao clicar no botão de fechar
modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Fechar ao clicar fora do conteúdo do modal
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});