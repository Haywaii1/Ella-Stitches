<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Thank You for Contacting Us</title>
</head>

<body>
    <h2>Hi {{ $formData['name'] }},</h2>
    <p>Thank you for reaching out to <strong>Stitches by Ella</strong>!</p>
    <p>We’ve received your message and will get back to you shortly.</p>

    <p><em>Your Message:</em></p>
    <blockquote>{{ $formData['message'] }}</blockquote>

    <p>Warm regards,<br><strong>Stitches by Ella Team</strong></p>
</body>

</html>