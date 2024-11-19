<?php
	include "../connection.php";

	// QUERY
	$search = "SELECT * FROM `alunos`";
	
	// FUNCTION
	$toprint = $connection->query($search);
	if ($toprint->num_rows > 0) {
		while ($row = $toprint->fetch_assoc()) {
			?>
			<script>
				$('#corpoTabela').append("<tr><th><?php echo $row['ID'] ?></th><th><?php echo $row['NOME'] ?></th><th><?php echo $row['SEXO'] ?></th><th><?php echo $row['IDADE'] ?></th></tr>");
			</script>
			<?php
		}
	}
?>