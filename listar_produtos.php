<?php
// Conexão com o banco de dados

$host = "193.203.175.154:3306";
$usuario = "u196497167_admin";
$senha = "OculosEscuro@132";
$banco = "u196497167_fenixreborn";

$conexao = new mysqli($host, $usuario, $senha, $banco);

if ($conexao->connect_error) {
    die("Erro de conexão: " . $conexao->connect_error);
}

// Buscar dados da tabela de produtos

$sql = "SELECT id, nome, descricao, preco, imagem, link_compra FROM academy";
$resultado = $conexao->query($sql);

$cursos= [];

if ($resultado->num_rows > 0) {
    while ($linha = $resultado->fetch_assoc()) {
        $cursos[] = $linha;
    }
}

// Retornar os dados em formato JSON

header('Content-Type: application/json');
echo json_encode($cursos);

$conexao->close();

?>