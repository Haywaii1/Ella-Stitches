<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;
use App\Mail\ContactFormMail;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'subject' => 'required|string',
            'message' => 'required|string',
        ]);

        // Save to DB
        $contact = Contact::create($validated);

        try {
            // Send email to owner (with full user message)
            Mail::to('haywaiibaba@gmail.com')->send(new ContactFormMail($validated, true));

            // Send confirmation email to the sender
            $confirmationData = [
                'name' => $validated['name'],
                'email' => $validated['email'],
                'subject' => 'We received your message!',
                'message' => 'Thank you for reaching out to Stitches by Ella. Our team will get back to you shortly.',
            ];

            Mail::to($validated['email'])->send(new ContactFormMail($confirmationData, false));

            return response()->json(['success' => true, 'message' => 'Message sent successfully!']);

        } catch (\Exception $e) {
            \Log::error('Mail Error: ' . $e->getMessage());
            return response()->json(['success' => false, 'message' => 'Mail not sent']);
        }
    }
}
