<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$conn = new mysqli("193.203.175.154:3306", "u196497167_admin", "OculosEscuro@132", "u196497167_fenixreborn");

if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["erro" => "Erro de conexão com o banco de dados"]);
    exit;
}

$categoria_id = isset($_GET['categoria_id']) ? intval($_GET['categoria_id']) : null;

$sql = "SELECT id, nome, descricao, preco, imagem, link_compra FROM academy";
if ($categoria_id) {
    $sql .= " WHERE categoria_id = $categoria_id"; // Filtrar pela categoria
}

$result = $conn->query($sql);
if (!$result) {
    die("Erro na consulta: " . $conn->error);
}

$produtos = [];
while ($row = $result->fetch_assoc()) {
    $produtos[] = $row;
}

echo json_encode($produtos);

$conn->close();
?>