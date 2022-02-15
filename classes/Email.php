<?php

namespace Classes;

use PHPMailer\PHPMailer\PHPMAiler;
use PHPMailer\PHPMailer\Exception;


class Email
{
    public $email;
    public $nombre;
    public $token;

    public function __construct($email, $nombre, $token)
    {
        $this->email = $email;
        $this->nombre = $nombre;
        $this->token = $token;
    }

    public function enviarConfirmacion()
    {
        // Crear el objeto de Email
        $mail = new PHPMailer();
        $mail->isSMTP();
        $mail->Host = 'smtp.mailtrap.io';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->SMTPAuth = true;
        $mail->Port = 465;
        $mail->Username = 'e8f93059c33c8b';
        $mail->Password = '340e2e67a23d41';

        $mail->setFrom('cuentas@LashesBar.com');
        $mail->addAddress('cuentas@LashesBar.com', 'LashesBar.com');
        $mail->Subject = 'Confirma tu Cuenta';

        // Set HTML
        $mail->isHTML(TRUE);
        $mail->CharSet = 'UTF-8';
        $contenido = "<!DOCTYPE html>";
        $contenido .= "<html>";
        $contenido .= "<p><strong>Hola ". $this->email . "</strong> Has creado tu cuenta en Lashes Bar, solo debes confirmarla presionando el siguiente enlace</p>";
        $contenido .= "<p>Presiona aquí: <a href='http://". $_SERVER["HTTP_HOST"] . "/confirmar-cuenta?token=".$this->token."'>Confirmar Cuenta</a> </p>";
        $contenido .= "<p>Si tu no solicitaste esta cuenta, puedes ignorar este correo</p>";
        $contenido .= "</html>";
        $mail->Body = $contenido;
        

        // Enviar el mail
        $mail->send();
    }

    public function enviarInstrucciones(){
                // Crear el objeto de Email
                $mail = new PHPMailer();
                $mail->isSMTP();
                $mail->Host = 'smtp.mailtrap.io';
                $mail->SMTPAuth = true;
                $mail->Port = 2525;
                $mail->Username = 'e8f93059c33c8b';
                $mail->Password = '340e2e67a23d41';
        
                $mail->setFrom('cuentas@LashesBar.com');
                $mail->addAddress('cuentas@LashesBar.com', 'LashesBar.com');
                $mail->Subject = 'Reestablece Tu Password';
        
                // Set HTML
                $mail->isHTML(TRUE);
                $mail->CharSet = 'UTF-8';
        
                $contenido = "<html>";
                $contenido .= "<p><strong>Hola ". $this->nombre . "</strong> Has Solicitado reestablecer tu password, sigue el siguiente enlace para hacerlo</p>";
                $contenido .= "<p>Presiona Aquí:<a href='http://". $_SERVER["HTTP_HOST"] . "/recuperar?token=" . $this->token . "'>Reestablece Tu Password</a></p>";
                $contenido .= "<p>Si tu no solicitaste esta cuenta, puedes ignorar este correo</p>";
                $contenido .= "</html>";
                $mail->Body = $contenido;
                
                // Enviar el mail
                $mail->send();
    }
}
