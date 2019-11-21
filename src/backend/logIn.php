<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    // Extract the data.
    $request = json_decode($postdata);
    // Sanitize.
    $name = mysqli_real_escape_string($con, trim($request->name));
    $pass = mysqli_real_escape_string($con, trim($request->password));

    $conected = verifyPseudoAndPass($name, $pass);
    
    echo json_encode($conected);
}


function verifyPseudoAndPass($pseudo, $pass) {
    $returnedValue = false;
    $count = findPseudo($pseudo);
    if ($count != 0) {
        $donnees = getUser($pseudo);
        if (password_verify($pass, $donnees['pass'])) {
            return $returnedValue = true;
        }
    }
    return $returnedValue;
}

function findPseudo($pseudo) {
    $bdd = dbConnect();
    $count = $bdd->prepare("SELECT count(pseudo) FROM user WHERE pseudo = '$pseudo'");
    $count->execute(array($pseudo));
    $result = $count->fetchColumn();
    return $result;
}


function getUser($pseudo) {
    $bdd = dbConnect();
    $req = $bdd->prepare('SELECT pseudo, pass FROM user WHERE pseudo = ?');
    $req->execute(array($pseudo));
    $result = $req->fetch();
    return $result;
}