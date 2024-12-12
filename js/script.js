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
                        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#produtoModal" onclick="mostrarDetalhes(${produto.id})">
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
        const response = await fetch(`https://fenixreborn.com.br/listar_produto.php?id=${id}`);
        const produto = await response.json();

        // Preencher o modal com os detalhes do produto
        document.getElementById('modalImagem').src = produto.imagem || 'default.jpg';
        document.getElementById('modalNome').textContent = produto.nome;
        document.getElementById('modalDescricao').textContent = produto.descricao;
        document.getElementById('modalPreco').textContent = produto.preco;
        document.getElementById('modalLinkCompra').href = produto.link_compra || '#';

        // Exibir o modal
        const modal = new bootstrap.Modal(document.getElementById('produtoModal'));
        modal.show();
    } catch (erro) {
        console.error('Erro ao carregar detalhes do produto:', erro);
    }
}