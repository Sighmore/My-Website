<?php
    $to = "simonkuriah7@gmail.com";
    $from = $_POST['email'];
    $name = $_POST['name'];
    $message = $_POST['message'];
    $subject = "Contact Form Submission from Portfolio";
    
    $headers = "From: " . $from . "\r\n";
    $headers .= "Reply-To: ". $from . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    
    $body = "<!DOCTYPE html>
    <html>
    <head>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
            }
            .container {
                max-width: 600px;
                margin: 20px auto;
                padding: 20px;
                border: 1px solid #ddd;
                border-radius: 5px;
            }
            .header {
                background: #3DDC84;
                color: #000;
                padding: 10px 20px;
                border-radius: 5px 5px 0 0;
            }
            .content {
                padding: 20px;
            }
            .footer {
                background: #f5f5f5;
                padding: 10px 20px;
                border-radius: 0 0 5px 5px;
                font-size: 12px;
            }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>New Contact Form Submission</h2>
            </div>
            <div class='content'>
                <p><strong>Name:</strong> {$name}</p>
                <p><strong>Email:</strong> {$from}</p>
                <p><strong>Message:</strong></p>
                <p>" . nl2br($message) . "</p>
            </div>
            <div class='footer'>
                <p>This email was sent from your portfolio contact form.</p>
            </div>
        </div>
    </body>
    </html>";
    
    $success = mail($to, $subject, $body, $headers);
    
    if ($success) {
        $response = array(
            "status" => "success",
            "message" => "Message sent successfully!"
        );
    } else {
        $response = array(
            "status" => "error",
            "message" => "Failed to send message. Please try again."
        );
    }
    
    // Return JSON response
    header('Content-Type: application/json');
    echo json_encode($response);
?>