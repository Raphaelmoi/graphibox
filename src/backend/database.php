<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'graphDB');

$firstOpenning = true;

function connect()
{
    global $firstOpenning;
    if ($firstOpenning) {
        createDatabase();
        createTables();
        createDefaultUser();
        createDefaultMsg();
    }
    $connectTable = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    mysqli_set_charset($connectTable, "utf8");
    return $connectTable;
}
$con = connect();

function dbConnect()
{
    $bdd = new PDO(
        'mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=utf8',
        DB_USER,
        DB_PASS,
        array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION)
    );
    return $bdd;
}

function createDatabase()
{
    $connect = mysqli_connect(DB_HOST, DB_USER, DB_PASS);
    if (mysqli_connect_errno($connect)) {
        die("Failed to connect:" . mysqli_connect_error());
    }
    // Create database if not exist
    $sql = "CREATE DATABASE " . DB_NAME;
    if ($connect->query($sql) === TRUE) {
        echo "Database created successfully";
    }
    $connect->close();
}

function createTables()
{
    $connectTable = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    //create table if not exist USER
    $sqlTable = "CREATE TABLE IF NOT EXISTS user (
     id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
     pseudo VARCHAR(30) NOT NULL,
     pass VARCHAR(255) NOT NULL
     )";
    if ($connectTable->query($sqlTable) === TRUE) {
        // echo "Table tableUser created successfully";
    } else {
        echo "Error creating table: " . $connectTable->error;
    }
    //create table if not exist TABLE
    $sqlTableMail = "CREATE TABLE IF NOT EXISTS mail (
     id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
     nameContact VARCHAR(30) NOT NULL,
     mailContact VARCHAR(255) NOT NULL,
     telContact VARCHAR(255) NOT NULL,
     subjectContact VARCHAR(255) NOT NULL,
     messageContact TEXT NOT NULL, 
     dateContact DATETIME
     )";
    if ($connectTable->query($sqlTableMail) === TRUE) {
        // echo "Table Mail created successfully";
    } else {
        echo "Error creating table: " . $connectTable->error;
    }
    $connectTable->close();
}

function createDefaultUser()
{
    $pseudo = 'guest';
    $pass = 'guest';
    $hashed_password = password_hash($pass, PASSWORD_DEFAULT);

    $bdd = dbConnect();
    $req = $bdd->prepare('SELECT  pseudo FROM user WHERE pseudo = ?');
    $req->execute(array($pseudo));
    $result = $req->fetch();
    if (!$result[0]) {
        $req = $bdd->prepare('INSERT INTO user( pseudo, pass) VALUES( :pseudo, :motdepasse )');
        $req->execute(array(
            'pseudo' => $pseudo,
            'motdepasse' => $hashed_password,
        ));
    }
}

function createDefaultMsg()
{
    $pseudo = 'visitor';
    $email = 'elVisitator@mail.com';
    $tel = '01 23 45 67 89';
    $subject = 'Sujet';
    $message = 'Message par défault, ici sont stockés les emails envoyés par les visiteurs via la page contact.
     Ce message est immédiatement recréé si supprimé';

    $bdd = dbConnect();
    $req = $bdd->prepare('SELECT  mailContact FROM mail WHERE mailContact = ?');
    $req->execute(array($email));
    $result = $req->fetch();
    if (!$result[0]) {
        $req = $bdd->prepare('INSERT INTO mail(nameContact, mailContact, telContact, subjectContact, messageContact, dateContact)
     VALUES( :nameContact , :emailContact , :telContact, :subjectContact, :messageContact, NOW()) ');
        $req->execute(array(
            'nameContact' => $pseudo,
            'emailContact' => $email,
            'telContact' => $tel,
            'subjectContact' => $subject,
            'messageContact' => $message
        ));
    }
}
