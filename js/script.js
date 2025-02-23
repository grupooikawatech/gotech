// URL do script PHP que lista as categorias
const URL_LISTAR_CATEGORIAS = "https://fenixreborn.com.br/listar_categorias.php";
const URL_LISTAR_CATEGORIAS_STORE = "https://fenixreborn.com.br/listar_categorias_store.php";

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

const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;
const itemCount = items.length;
const intervalTime = 10000; // 10 seconds

const updateCarousel = () => {
    const offset = -currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;
};

const showNextItem = () => {
    currentIndex = (currentIndex + 1) % itemCount;
    updateCarousel();
};

const showPrevItem = () => {
    currentIndex = (currentIndex - 1 + itemCount) % itemCount;
    updateCarousel();
};

nextButton.addEventListener('click', showNextItem);
prevButton.addEventListener('click', showPrevItem);

// Automatic transition every 10 seconds
setInterval(showNextItem, intervalTime);


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
    

function scrollToSection(event) {
    event.preventDefault();
    document.getElementById('search-container').scrollIntoView({ behavior: 'smooth' });
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
                <a href="${curso.link_compra}" target="_blank" class="btn-comprar">Quero me matricular!</a>
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

/* Barra de pesquisa do Store */

async function pesquisarProdutos() {
    const termo = document.getElementById('search').value;

    // Evita busca se a barra estiver vazia
    if (termo.trim() === '') {
        document.getElementById('resultados').innerHTML = '';
        return;
    }

    try {
        const response = await fetch(`https://fenixreborn.com.br/search_store.php?termo=${encodeURIComponent(termo)}`);
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
            resultadosDiv.innerHTML = '<p>Nenhum produto encontrado.</p>';
        }
    } catch (erro) {
        console.error('Erro ao pesquisar produtos:', erro);
    }
} 

/* Categorias do Academy */

// Função para buscar categorias do banco de dados
async function carregarCategorias() {
    try {
        // Faz a requisição ao script PHP
        const response = await fetch(URL_LISTAR_CATEGORIAS);
        
        // Verifica se a resposta é bem-sucedida
        if (!response.ok) {
            throw new Error("Erro ao carregar categorias");
        }

        // Converte a resposta para JSON
        const categorias = await response.json();

        // Chama a função para exibir as categorias na interface
        exibirCategorias(categorias);
    } catch (error) {
        console.error("Erro:", error);
    }
}

/* Categorias do Store */

// Função para buscar categorias do banco de dados
async function carregarCategoriasStore() {
    try {
        // Faz a requisição ao script PHP
        const response = await fetch(URL_LISTAR_CATEGORIAS_STORE);
        
        // Verifica se a resposta é bem-sucedida
        if (!response.ok) {
            throw new Error("Erro ao carregar categorias");
        }

        // Converte a resposta para JSON
        const categorias = await response.json();

        // Chama a função para exibir as categorias na interface
        exibirCategoriasStore(categorias);
    } catch (error) {
        console.error("Erro:", error);
    }
}

// Função para exibir categorias na interface
function exibirCategorias(categorias) {
    // Seleciona o contêiner onde as categorias serão exibidas
    const categoriasContainer = document.getElementById("categorias");

    // Limpa o contêiner antes de adicionar novos itens
    categoriasContainer.innerHTML = "";

    // Cria os elementos HTML para cada categoria
    categorias.forEach(categoria => {
        const categoriaItem = document.createElement("button");
        categoriaItem.textContent = categoria.nome;
        categoriaItem.className = "categoria-botao";
        categoriaItem.dataset.id = categoria.id;

        // Adiciona evento de clique para filtrar produtos pela categoria
        categoriaItem.addEventListener("click", () => {
            filtrarProdutosPorCategoria(categoria.id);
        });

        categoriasContainer.appendChild(categoriaItem);
    });
}

// Função para exibir categorias na interface
function exibirCategoriasStore(categorias) {
    // Seleciona o contêiner onde as categorias serão exibidas
    const categoriasContainer = document.getElementById("categorias");

    // Limpa o contêiner antes de adicionar novos itens
    categoriasContainer.innerHTML = "";

    // Cria os elementos HTML para cada categoria
    categorias.forEach(categoria => {
        const categoriaItem = document.createElement("button");
        categoriaItem.textContent = categoria.nome;
        categoriaItem.className = "categoria-botao";
        categoriaItem.dataset.id = categoria.id;

        // Adiciona evento de clique para filtrar produtos pela categoria
        categoriaItem.addEventListener("click", () => {
            filtrarProdutosPorCategoriaStore(categoria.id);
        });

        categoriasContainer.appendChild(categoriaItem);
    });
}

// Função para carregar os produtos filtrados pela categoria
async function filtrarProdutosPorCategoria(categoriaId) {
    try {
        const response = await fetch(`https://fenixreborn.com.br/listar_produtos.php?categoria_id=${categoriaId}`);
        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }
        const produtos = await response.json();
        console.log("Produtos filtrados:", produtos);
        exibirProdutos(produtos); // Função que exibe os produtos na tela
    } catch (error) {
        console.error("Erro ao filtrar produtos:", error.message);
    }
}

// Função para carregar os produtos filtrados pela categoria
async function filtrarProdutosPorCategoriaStore(categoriaId) {
    try {
        const response = await fetch(`https://fenixreborn.com.br/listar_produtos_store.php?categoria_id=${categoriaId}`);
        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }
        const produtos = await response.json();
        console.log("Produtos filtrados:", produtos);
        exibirProdutosStore(produtos); // Função que exibe os produtos na tela
    } catch (error) {
        console.error("Erro ao filtrar produtos:", error.message);
    }
}

// Função para exibir produtos na tela
function exibirProdutos(produtos) {
    const container = document.getElementById("produtos");
    if (!container) {
        console.error("Elemento de produtos não encontrado!");
        return;
    }

    // Limpar conteúdo existente
    container.innerHTML = "";

    // Adicionar produtos
    produtos.forEach((produto) => {
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
                    <a href="${produto.link_compra}" target="_blank" class="btn btn-success mt-2">Matrícula</a>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Função para exibir produtos na tela do Store
function exibirProdutosStore(produtos) {
    const container = document.getElementById("produtos");
    if (!container) {
        console.error("Elemento de produtos não encontrado!");
        return;
    }

    // Limpar conteúdo existente
    container.innerHTML = "";

    // Adicionar produtos
    produtos.forEach((produto) => {
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'mb-4');
        card.innerHTML = `
            <div class="card">
                <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}" style="height: 200px; object-fit: cover;">
                <div class="card-body">
                    <h5 class="card-title">${produto.nome}</h5>
                    <p class="card-text">Preço: R$ ${produto.preco}</p>
                    <button onclick="mostrarDetalhesStore(${produto.id})" class="detalhes-btn">
                        Ver detalhes
                    </button>
                    <a href="${produto.link_compra}" target="_blank" class="btn btn-success mt-2">Comprar</a>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

/* Conexão do Back-End com a página Academy */

async function carregarProdutos(pagina = 1) {
    try {
        const limite = 20; // Quantidade de produtos por página
        const response = await fetch(`https://fenixreborn.com.br/listar_produtos.php?pagina=${pagina}&limite=${limite}`);
        const { produtos, totalPaginas } = await response.json();

        const container = document.getElementById('produtos');
        container.innerHTML = ''; // Limpar os produtos antes de carregar novos

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

        // Atualizar paginação
        atualizarPaginacao(pagina, totalPaginas);
    } catch (erro) {
        console.error('Erro ao carregar produtos:', erro);
    }
}

function atualizarPaginacao(paginaAtual, totalPaginas) {
    const paginacaoContainer = document.getElementById('paginacao');
    paginacaoContainer.innerHTML = '';

    // Botão "Anterior"
    const btnAnterior = document.createElement('button');
    btnAnterior.textContent = 'Anterior';
    btnAnterior.classList.add('btn', 'btn-primary');
    btnAnterior.disabled = paginaAtual === 1; // Desabilita se for a primeira página
    btnAnterior.onclick = () => carregarProdutos(paginaAtual - 1);
    paginacaoContainer.appendChild(btnAnterior);

    // Campo de entrada para digitar o número da página
    const inputPagina = document.createElement('input');
    inputPagina.type = 'number';
    inputPagina.min = 1;
    inputPagina.max = totalPaginas; // Limite para o total de páginas
    inputPagina.value = paginaAtual;
    inputPagina.onchange = () => {
        const numeroPagina = parseInt(inputPagina.value);
        if (!isNaN(numeroPagina) && numeroPagina >= 1 && numeroPagina <= totalPaginas) {
            carregarProdutos(numeroPagina);
        } else {
            inputPagina.value = paginaAtual; // Resetar para a página atual se inválido
        }
    };
    paginacaoContainer.appendChild(inputPagina);

    // Botão "Próximo"
    const btnProximo = document.createElement('button');
    btnProximo.textContent = 'Próximo';
    btnProximo.classList.add('btn', 'btn-primary');
    btnProximo.disabled = paginaAtual === totalPaginas; // Desabilita se for a última página
    btnProximo.onclick = () => carregarProdutos(paginaAtual + 1);
    paginacaoContainer.appendChild(btnProximo);
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

/* Conexão do Back-End com a página Store */

async function carregarProdutosStore(pagina = 1) {
    try {
        const limite = 20; // Quantidade de produtos por página
        const response = await fetch(`https://fenixreborn.com.br/listar_produtos_store.php?pagina=${pagina}&limite=${limite}`);
        const { produtos, totalPaginas } = await response.json();

        const container = document.getElementById('produtos');
        container.innerHTML = ''; // Limpar os produtos antes de carregar novos

        produtos.forEach(produto => {
            const card = document.createElement('div');
            card.classList.add('col-md-4', 'mb-4');
            card.innerHTML = `
                <div class="card">
                    <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}" style="height: 200px; object-fit: cover;">
                    <div class="card-body">
                        <h5 class="card-title">${produto.nome}</h5>
                        <p class="card-text">Preço: R$ ${produto.preco}</p>
                        <button onclick="mostrarDetalhesStore(${produto.id})" class="detalhes-btn">
                            Ver detalhes
                        </button>
                        <a href="${produto.link_compra}" target="_blank" class="btn btn-success mt-2">Comprar</a>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });

        // Atualizar paginação
        atualizarPaginacao(pagina, totalPaginas);
    } catch (erro) {
        console.error('Erro ao carregar produtos:', erro);
    }
}

function atualizarPaginacaoStore(paginaAtual, totalPaginas) {
    const paginacaoContainer = document.getElementById('paginacao');
    paginacaoContainer.innerHTML = '';

    // Botão "Anterior"
    const btnAnterior = document.createElement('button');
    btnAnterior.textContent = 'Anterior';
    btnAnterior.classList.add('btn', 'btn-primary');
    btnAnterior.disabled = paginaAtual === 1; // Desabilita se for a primeira página
    btnAnterior.onclick = () => carregarProdutos(paginaAtual - 1);
    paginacaoContainer.appendChild(btnAnterior);

    // Campo de entrada para digitar o número da página
    const inputPagina = document.createElement('input');
    inputPagina.type = 'number';
    inputPagina.min = 1;
    inputPagina.max = totalPaginas; // Limite para o total de páginas
    inputPagina.value = paginaAtual;
    inputPagina.onchange = () => {
        const numeroPagina = parseInt(inputPagina.value);
        if (!isNaN(numeroPagina) && numeroPagina >= 1 && numeroPagina <= totalPaginas) {
            carregarProdutos(numeroPagina);
        } else {
            inputPagina.value = paginaAtual; // Resetar para a página atual se inválido
        }
    };
    paginacaoContainer.appendChild(inputPagina);

    // Botão "Próximo"
    const btnProximo = document.createElement('button');
    btnProximo.textContent = 'Próximo';
    btnProximo.classList.add('btn', 'btn-primary');
    btnProximo.disabled = paginaAtual === totalPaginas; // Desabilita se for a última página
    btnProximo.onclick = () => carregarProdutos(paginaAtual + 1);
    paginacaoContainer.appendChild(btnProximo);
}

async function mostrarDetalhesStore(id) {
    try {
        // Faz a requisição ao backend para obter os detalhes do produto
        const response = await fetch(`https://fenixreborn.com.br/listar_produto_store.php?id=${id}`);
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

document.addEventListener("DOMContentLoaded", () => {
    const imagens = document.querySelectorAll("img");

    imagens.forEach((img) => {
        const urlOriginal = img.src;
        img.src = `${urlOriginal}?v=${new Date().getTime()}`;
    });
});