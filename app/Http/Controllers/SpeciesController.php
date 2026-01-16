<?php

namespace App\Http\Controllers;

use App\Models\Species;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SpeciesController extends Controller
{
public function index()
    {
        $species = Species::where('is_active', true)->get();
        return Inertia::render('AboutBreeds', [
            'species' => $species
        ]);
    }

    public function show(Species $species)
    {
        return Inertia::render('Species/Show', [
            'species' => $species->load('parrots'),
        ]);
    }
}
