<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactFormMail extends Mailable
{
    use Queueable, SerializesModels;

    public $formData;
    public $forOwner;

    public function __construct($formData, $forOwner = false)
    {
        $this->formData = $formData;
        $this->forOwner = $forOwner;
    }

    public function build()
    {
        $subject = $this->forOwner
            ? 'New Inquiry from ' . $this->formData['name']
            : 'We received your message — Stitches by Ella';

        return $this->subject($subject)
            ->view('emails.contact')
            ->with([
                'formData' => $this->formData,
                'forOwner' => $this->forOwner,
            ]);
    }
}
