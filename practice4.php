<?php
	echo "<table border =\"1\" style='border-collapse: collapse; border-style: dotted'>";
	
	$size = $_POST["size"];
	
	echo "<tr style='font-weight: bolder; '>";
		echo "<td > </td> \n";
		for ($column=1; $column <= $size; $column++) {
			echo "<td>$column</td> \n";
		}
	echo "</tr>";
	
	for($row=1; $row <= $size; $row++) {
		echo "<tr> \n";
		echo "<td style='font-weight: bolder;'>$row</td>";
		
		for($column=1; $column <= $size; $column++) {
			$val = $column * $row;
			echo "<td>$val</td> \n";
		}
	
		echo "</tr>";
	}

echo "</table>";

?>