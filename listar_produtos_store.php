<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Conexão com o banco de dados local SQLite
try {
    $conn = new PDO("sqlite:webapp.db");
    // Configurar o modo de erro do PDO para exceções
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Conexão bem-sucedida!";
} catch (PDOException $e) {
    echo "Erro na conexão: " . $e->getMessage();
}

if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["erro" => "Erro de conexão com o banco de dados"]);
    exit;
}

// Verificar os parâmetros de categoria e paginação
$categoria_id = isset($_GET['categoria_id']) ? intval($_GET['categoria_id']) : null;
$pagina = isset($_GET['pagina']) ? intval($_GET['pagina']) : 1;
$limite = 20; // Número de itens por página
$offset = ($pagina - 1) * $limite; // Cálculo do offset

// Obter o número total de produtos
$sqlTotal = "SELECT COUNT(*) as total FROM store";
if ($categoria_id && $categoria_id !== 1) {
    $sqlTotal .= " WHERE categoria_id = $categoria_id";
}
$resultTotal = $conn->query($sqlTotal);

if (!$resultTotal) {
    http_response_code(500);
    echo json_encode(["erro" => "Erro ao obter o número total de produtos: " . $conn->error]);
    exit;
}

$totalProdutos = $resultTotal->fetch_assoc()['total'];
$totalPaginas = ceil($totalProdutos / $limite); // Cálculo do total de páginas

// Montar a consulta SQL para buscar os produtos
$sql = "SELECT id, nome, descricao, preco, imagem, link_compra FROM store";
if ($categoria_id && $categoria_id !== 1) {
    $sql .= " WHERE categoria_id = $categoria_id";
}
$sql .= " LIMIT $limite OFFSET $offset"; // Adiciona limite e offset para paginação

$result = $conn->query($sql);
if (!$result) {
    http_response_code(500);
    echo json_encode(["erro" => "Erro na consulta: " . $conn->error]);
    exit;
}

$produtos = [];
while ($row = $result->fetch_assoc()) {
    $produtos[] = $row;
}

// Retornar os produtos e o total de páginas no formato JSON
echo json_encode([
    "produtos" => $produtos,
    "totalPaginas" => $totalPaginas
]);

$conn->close();
?>
