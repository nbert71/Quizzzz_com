<!DOCTYPE html>
<?php
$compteur = file_get_contents('compteur.txt');
?>

<html lang="fr">
<head>
    <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Quizz</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
        <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <div class="container-fluid">
        <h1>Statistiques</h1>
        <h3>Nombre de visites depuis le 01/06/21 : <?php echo $compteur ?></h3>
    </div>
</body>

</html>

