<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Review;
use Inertia\Inertia;

class ReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $reviews = Review::where('is_approved', true)
            ->orderBy('created_at', 'desc')
            ->paginate(12);

        return Inertia::render('Reviews/Index', [
            'reviews' => $reviews,
        ]);
    }
public function store(Request $request)
{
$validated = $request->validate([
'reviewer_name' => 'required|string|max:255',
'email' => 'required|email|max:255',
'image' => 'nullable|image|max:2048', // 2MB Max
'comment' => 'required|string',
'rating' => 'required|integer|min:1|max:5',
]);

$imagePath = null;
if ($request->hasFile('image')) {
// Store in the 'reviews' directory on the 'public' disk
$imagePath = $request->file('image')->store('reviews', 'public');
}

Review::create([
'reviewer_name' => $validated['reviewer_name'],
'email' => $validated['email'],
'image_path' => $imagePath,
'comment' => $validated['comment'],
'rating' => $validated['rating'],
'is_approved' => false, // Default to unapproved
]);

return redirect()->back()->with('success', 'Thank you for your review! It will be visible after approval.');
}
}
