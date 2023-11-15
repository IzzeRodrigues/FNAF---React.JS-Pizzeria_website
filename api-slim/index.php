<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require './vendor/autoload.php';
$app = new \Slim\App;

$app -> get('/', function (Request $request, Response $response, array $args){
    $response->getBody()->write("API");
    return $response;
});

$app -> get('/pizzas','getPizzas');
$app -> post('/users','getUser');


function getConn(){
    return new PDO('mysql:host=localhost:3306;dbname=db_freddys', 'root', '',array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
}; 

function getPizzas(Request $request, Response $response, array $args){
    $sql = "SELECT * FROM tb_pizzas";
    $stmt = getConn()->query($sql);
    $pizza = $stmt -> fetchAll(PDO::FETCH_OBJ);
    $response->getBody()->write(json_encode($pizza));
    return $response;
};

function getUser(Request $request, Response $response, array $args){
    
    $usuario = $request->getParsedBody();
    $nome = $usuario["body"]["name"];
    $email =  $usuario["body"]["email"];
    $senha =  $usuario["body"]["senha"];
    $login =  $usuario["body"]["login"];
    $sql = "INSERT INTO tb_cadastros(nm_usuario, nm_email, cd_senha, priv_cadastro) VALUES('$nome', '$email', '$senha', '$login')";
    $stmt = getConn()->query($sql);

};
function seeUser(Request $request, Response $response, array $args){
    $sql = "SELECT * FROM tb_users";
 
};

$app->run(); 
