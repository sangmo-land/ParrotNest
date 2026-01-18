<?php

namespace App\Http\Controllers;

use App\Mail\SubscriptionConfirmation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\ValidationException;

class NewsletterController extends Controller
{
    public function subscribe(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
        ]);

        $email = $request->input('email');

        try {
            Mail::to($email)->send(new SubscriptionConfirmation());
        } catch (\Exception $e) {
            // Log the error or handle it gracefully
            // For now, we allow the flow to continue as if successful to the user,
            // or we could throw a validation error if email sending is critical.
            // In a real app, we might use a Queue.
        }

        return back()->with('success', 'Thank you for subscribing!');
    }
}
