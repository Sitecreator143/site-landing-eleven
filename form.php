<?php
use PHPMailer\PHPMailer\PHPMailer;

$firstName = $_POST['firstName']; //Name из index.html form
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$message = $_POST['message'];

require_once "Mailer/Exception.php"; //Поменять названия папок на те, в которых лежать файлы PHP с гитхаба
require_once "Mailer/SMTP.php";
require_once "Mailer/PHPMailer.php";

$mail = new PHPMailer();

//серверные настройки
$mail->CharSet = "utf-8";
$mail->isSMTP();
$mail->Host         = 'smtp.yandex.ru';   //Установка smtp сервера. С него отправляем. Можно узнать по запросу smtp yandexa.
$mail->SMTPAuth     = true;
$mail->Username     = 'GhostGhost1234567899@yandex.ru';   //Логин от почты, с которой будут отправляться сообщения
$mail->Password     = '7759143';
$mail->SMTPSecure   = "ssl";    //Шифрование
$mail->Port         = 465;      //Не изменяем, порт

//Recipients
$mail->setFrom('GhostGhost1234567899@yandex.ru', 'Mailer');   //Отправитель, тот же логин, с которого будем отправлять сообщение. 'Mailer' - то, что придет в шапке от кого.
$mail->addAddress('Nikolaevsailing@mail.ru', 'Joe User');    //Получатель

//Добавление документов если захотим добавить.
//$mail->addAttachment('/var/tmp/file.tar.gz');
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');

//Контент письма, что увидит получатель
$mail->isHTML(true);
$mail->Subject  = 'Тема';       //Тема письма
$mail->Body     = 'Имя: ' . $firstName .'<br>Фамилия: ' . $lastName .'<br>Маил: ' . $email .'<br>Телефон: ' . $tel .'<br>Сообщение:' . $message; 
$mail->AltBody  = 'This is the body in plain text for non-HTML mail clients'; //Тело письма для клиентов, не обрабатывающих хтмл.

$mail->send();

?>