<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $query = Product::query()->where('is_active', true);

        if ($request->has('category') && $request->category !== 'all') {
            $query->where('category', $request->category);
        }

if ($request->has('search') && $request->search) {
        $searchTerm = $request->search;
        $query->where(function($q) use ($searchTerm) {
        $q->where('name', 'like', '%' . $searchTerm . '%')
        ->orWhere('description', 'like', '%' . $searchTerm . '%');
        });
        }
        $products = $query->orderBy('created_at', 'desc')->get();

        $categories = Product::select('category')->distinct()->pluck('category');

        return Inertia::render('Shop', [
            'products' => $products,
            'categories' => $categories,
'filters' => $request->only(['category', 'search']),
        ]);
    }
}
