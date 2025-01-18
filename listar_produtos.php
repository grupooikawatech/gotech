<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$conn = new mysqli("193.203.175.154:3306", "u196497167_admin", "OculosEscuro@132", "u196497167_fenixreborn");

if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["erro" => "Erro de conexão com o banco de dados"]);
    exit;
}

// Verificar o valor de categoria_id
$categoria_id = isset($_GET['categoria_id']) ? intval($_GET['categoria_id']) : null;

// Montar a consulta SQL
$sql = "SELECT id, nome, descricao, preco, imagem, link_compra FROM academy";

// Se categoria_id for diferente de 3, filtra os produtos pela categoria
if ($categoria_id && $categoria_id !== 3) {
    $sql .= " WHERE categoria_id = $categoria_id";
}

$result = $conn->query($sql);
if (!$result) {
    die("Erro na consulta: " . $conn->error);
}

$produtos = [];
while ($row = $result->fetch_assoc()) {
    $produtos[] = $row;
}

// Retornar os produtos no formato JSON
echo json_encode($produtos);

$conn->close();
?>