<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$conn = new mysqli("193.203.175.154:3306", "u196497167_admin", "OculosEscuro@132", "u196497167_fenixreborn");

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

// Montar a consulta SQL
$sql = "SELECT id, nome, descricao, preco, imagem, link_compra FROM academy";
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

// Retornar os produtos no formato JSON
echo json_encode($produtos);

$conn->close();
?>