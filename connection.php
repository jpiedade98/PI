<?php

	// COMEÇAR SESSÃO
	session_start();

	// DEFINIR BANCO DE DADOS
	$servername = "localhost";
	$username = "root";
	$password = "";
	$db = "pi2";

	// CRIAR CONEXÃO
	$connection = new mysqli($servername, $username, $password, $db);

	// AVERIGUAR CONEXÃO
	/*
	if ($connection->connect_error) {
	  die("Connection failed: " . $conn->connect_error);
	}
	echo "Connected successfully";
	*/
	
	// JQUERY
	echo '<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>'

?>