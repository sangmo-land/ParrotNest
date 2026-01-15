<?php

namespace App\Http\Controllers;

use App\Models\Parrot;
use App\Models\Species;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ParrotController extends Controller
{
    public function index(Request $request)
    {
        $query = Parrot::with('species')
            ->where('status', 'available');

        // Filtering
        if ($request->has('species_id')) {
            $query->where('species_id', $request->species_id);
        }

        if ($request->has('gender')) {
            $query->where('gender', $request->gender);
        }

        if ($request->has('good_with_children') && $request->good_with_children) {
            $query->where('good_with_children', true);
        }

        if ($request->has('size')) {
            $query->whereHas('species', function ($q) use ($request) {
                $q->where('size', $request->size);
            });
        }

        // Search
        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                    ->orWhere('description', 'like', "%{$search}%")
                    ->orWhere('personality', 'like', "%{$search}%");
            });
        }

        // Sorting
        $sortBy = $request->get('sort_by', 'created_at');
        $sortOrder = $request->get('sort_order', 'desc');
        $query->orderBy($sortBy, $sortOrder);

        $parrots = $query->paginate(12)->withQueryString();
        $species = Species::where('is_active', true)->get();

        return Inertia::render('Parrots/Index', [
            'parrots' => $parrots,
            'species' => $species,
            'filters' => $request->only(['species_id', 'gender', 'size', 'good_with_children', 'search']),
        ]);
    }

    public function show(Parrot $parrot)
    {
        $parrot->load('species');
        $parrot->increment('views');

        $similarParrots = Parrot::where('species_id', $parrot->species_id)
            ->where('id', '!=', $parrot->id)
            ->where('status', 'available')
            ->limit(4)
            ->get();

        return Inertia::render('Parrots/Show', [
            'parrot' => $parrot,
            'similarParrots' => $similarParrots,
        ]);
    }
}
