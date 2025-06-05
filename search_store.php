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