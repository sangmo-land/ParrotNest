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
}
