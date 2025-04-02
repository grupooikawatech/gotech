<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Conexão com o banco de dados
$conn = new mysqli("193.203.175.154:3306", "u196497167_admin", "OculosEscuro@132", "u196497167_fenixreborn");

if ($conn->connect_error) {
    echo json_encode(["erro" => "Erro de conexão"]);
    exit;
}

// Busca todas as categorias
$sql = "SELECT id, nome FROM categorias_store";
$result = $conn->query($sql);

$categorias = [];
while ($row = $result->fetch_assoc()) {
    $categorias[] = $row;
}

echo json_encode($categorias);
$conn->close();
?>
