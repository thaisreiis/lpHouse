<?php
$to = 'thais.reiisv@gmail.com';
// $cc = 'contato@moveistophouse.com.br'; // Endereço de e-mail para cópia (CC)
$subject = 'Enviado pelo site: ';

$headers = 'From: thais.reiisv@gmail.com' . "\r\n";
$headers .= 'Cc: ' . $cc . "\r\n";
$headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";

// Dados do formulário
$nome = $_POST['nome'];
$telefone = $_POST['telefone'];
$orcamento = $_POST['orcamento'];
$urgencia = $_POST['urgencia'];

// Template HTML do e-mail
$message = '
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Detalhes do Formulário</title>
    <style>
        /* Estilos básicos */
        body {
            font-family: Arial, sans-serif;
            color: #333;
        }
        
        table {
            width: 100%;
        }
        
        th, td {
            padding: 10px;
            text-align: left;
        }
        
        th {
            background-color: #f2f2f2;
        }
        
        /* Estilos específicos para dispositivos móveis */
        @media only screen and (max-width: 600px) {
            table {
                font-size: 14px;
            }
        }
    </style>
</head>
<body>
    <h2>Formulário Casa Pinheirinho</h2>
    <table>
        <tr>
            <th>Nome:</th>
            <td>'.$nome.'</td>
        </tr>
        <tr>
            <th>Telefone:</th>
            <td>'.$telefone.'</td>
        </tr>
        <tr>
            <th>Ambientes para Orçamento:</th>
            <td>'.$orcamento.'</td>
        </tr>
        <tr>
            <th>Urgência do Projeto:</th>
            <td>'.$urgencia.'</td>
        </tr>
    </table>
</body>
</html>
';

mail($to, $subject, $message, $headers);
?>
