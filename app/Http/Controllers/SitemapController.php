<?php

namespace App\Http\Controllers;

use App\Models\Parrot;
use App\Models\Species;
use Illuminate\Http\Response;

class SitemapController extends Controller
{
    public function index()
    {
        $parrots = Parrot::where('status', 'available')
            ->select('id', 'updated_at')
            ->orderBy('updated_at', 'desc')
            ->get();

        $species = Species::where('is_active', true)
            ->select('id', 'updated_at')
            ->orderBy('updated_at', 'desc')
            ->get();

        $content = view('sitemap', [
            'parrots' => $parrots,
            'species' => $species,
        ])->render();

        return response($content, 200)
            ->header('Content-Type', 'text/xml');
    }
}
