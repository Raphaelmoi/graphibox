<?php
require 'database.php';

$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {

    $request = json_decode($postdata);
    // Sanitize.
    $name = mysqli_real_escape_string($con, trim($request->name));
    $email = mysqli_real_escape_string($con, trim($request->email));
    $tel = mysqli_real_escape_string($con, trim($request->tel));
    $subject = mysqli_real_escape_string($con, trim($request->subject));
    $message = mysqli_real_escape_string($con, trim($request->message));

    $bdd = dbConnect();

    $req = $bdd->prepare('INSERT INTO mail(nameContact, mailContact, telContact, subjectContact, messageContact, dateContact)
     VALUES( :nameContact , :emailContact , :telContact, :subjectContact, :messageContact, NOW()) ');
    $req->execute(array(
        'nameContact' => $name,
        'emailContact' => $email,
        'telContact' => $tel,
        'subjectContact' => $subject,
        'messageContact' => $message
    ));

    echo json_encode($req);
}
