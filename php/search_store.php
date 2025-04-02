<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Conexão com o banco de dados
$conn = new mysqli("193.203.175.154:3306", "u196497167_admin", "OculosEscuro@132", "u196497167_fenixreborn");


if ($conn->connect_error) {
    echo json_encode(["erro" => "Erro de conexão"]);
    exit;
}

// Obtenha o termo de pesquisa
$termo = "%" . $_GET['termo'] . "%"; // Use '%' para busca parcial

$sql = "SELECT * FROM store WHERE nome LIKE ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $termo);
$stmt->execute();
$result = $stmt->get_result();

$cursos = [];
while ($row = $result->fetch_assoc()) {
    $cursos[] = $row;
}

echo json_encode($cursos);
$stmt->close();
$conn->close();
?>