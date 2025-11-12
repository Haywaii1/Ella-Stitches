<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>{{ $forOwner ? 'New Inquiry Received' : 'Thank You for Contacting Us' }}</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            color: #333;
        }

        h2 {
            color: #6b3e00;
        }
    </style>
</head>

<body>
    @if ($forOwner)
        <h2>📩 New Inquiry from {{ $formData['name'] }}</h2>
        <p><strong>Email:</strong> {{ $formData['email'] }}</p>
        <p><strong>Subject:</strong> {{ $formData['subject'] }}</p>
        <p><strong>Message:</strong></p>
        <p>{{ $formData['message'] }}</p>

        <hr>
        <p>Sent via the <strong>Stitches by Ella</strong> website contact form.</p>

    @else
        <h2>Thank You for Reaching Out 💛</h2>
        <p>Hi {{ $formData['name'] }},</p>
        <p>We’ve received your message regarding <strong>{{ $formData['subject'] }}</strong>.</p>
        <p>Our team will review your request and get back to you shortly.</p>

        <br>
        <p>Warm regards,</p>
        <p><strong>Stitches by Ella Team</strong></p>
        <p><em>studio@stitchesbyella.com</em></p>
    @endif
</body>

</html>