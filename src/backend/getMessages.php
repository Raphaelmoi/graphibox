<?php
require 'database.php';

function getMessages() {
    $bdd = dbConnect();
    $comment = $bdd->query("SELECT id, nameContact, mailContact, telContact, subjectContact, messageContact, 
    DATE_FORMAT(dateContact, '%d/%m/%Y à %Hh%i') AS date_contact 
    FROM mail ORDER BY date_contact DESC");
    $result = $comment->fetchAll();
    return $result;
}

$call =  getMessages();
echo json_encode($call);

