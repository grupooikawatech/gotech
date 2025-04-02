<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$conn = new mysqli("193.203.175.154:3306", "u196497167_admin", "OculosEscuro@132", "u196497167_fenixreborn");

if ($conn->connect_error) {
    echo json_encode(["erro" => "Erro de conexão"]);
    exit;
}

$id = intval($_GET['id']);
$sql = "SELECT * FROM academy WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $id);
$stmt->execute();
$result = $stmt->get_result();

if ($produto = $result->fetch_assoc()) {
    echo json_encode($produto);
} else {
    echo json_encode(["erro" => "Produto não encontrado"]);
}
$stmt->close();
$conn->close();
?>