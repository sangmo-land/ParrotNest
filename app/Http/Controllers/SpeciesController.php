<?php

namespace App\Http\Controllers;

use App\Models\Species;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SpeciesController extends Controller
{
public function index()
    {
$speciesInfo = [
            'scarlet_macaw' => [
                'name' => "Scarlet Macaw",
                'scientific_name' => "Ara macao",
                'description' => "Known for their vibrant colors and larger-than-life personalities, Macaws are the giants of the parrot world. They require significant space and social interaction.",
                'size' => "Large (32-36 inches)",
                'average_lifespan' => "50-80 years",
                'noise_level' => "High",
                'care_level' => "Expert",
                'icon' => "🦜",
                'color_class' => "from-red-500 to-yellow-500",
            ],
            'african_grey' => [
                'name' => "African Grey",
                'scientific_name' => "Psittacus erithacus",
                'description' => "Widely considered the smartest bird species, African Greys are famous for their vocabulary. They are sensitive, emotional, and require high mental stimulation.",
                'size' => "Medium (13 inches)",
                'average_lifespan' => "40-60 years",
                'noise_level' => "Medium",
                'care_level' => "Advanced",
                'icon' => "🦅",
                'color_class' => "from-gray-400 to-gray-600",
            ],
            'cockatoo' => [
                'name' => "Cockatoo",
                'scientific_name' => "Cacatuidae",
                'description' => "The 'velcro birds' of the avian world. Cockatoos are incredibly affectionate and demanding. They are known for their loud calls and need for constant companionship.",
                'size' => "Medium-Large (12-26 inches)",
                'average_lifespan' => "40-70 years",
                'noise_level' => "Very High",
                'care_level' => "Expert",
                'icon' => "🕊️",
                'color_class' => "from-rose-200 to-pink-300",
            ],
            'sun_conure' => [
                'name' => "Sun Conure",
                'scientific_name' => "Aratinga solstitialis",
                'description' => "Small body, big personality. Sun Conures are stunningly beautiful and very playful, but they possess a scream that rivals much larger birds.",
                'size' => "Small (12 inches)",
                'average_lifespan' => "20-30 years",
                'noise_level' => "High",
                'care_level' => "Intermediate",
                'icon' => "🐦",
                'color_class' => "from-orange-400 to-yellow-400",
            ],
            'budgerigar' => [
                'name' => "Budgerigar",
                'scientific_name' => "Melopsittacus undulatus",
                'description' => "The common parakeet is an excellent first bird. They are chatty, active, and can be quite affectionate if hand-raised.",
                'size' => "Small (7 inches)",
                'average_lifespan' => "5-10 years",
                'noise_level' => "Low-Medium",
                'care_level' => "Beginner",
                'icon' => "🐤",
                'color_class' => "from-green-300 to-lime-400",
            ],
            'eclectus' => [
                'name' => "Eclectus",
                'scientific_name' => "Eclectus roratus",
                'description' => "Sexually dimorphic (males are green, females are red/blue). They are generally calmer than other large parrots but have specialized dietary needs.",
                'size' => "Medium (14 inches)",
                'average_lifespan' => "30-50 years",
                'noise_level' => "Medium",
                'care_level' => "Advanced",
                'icon' => "🦜",
                'color_class' => "from-emerald-500 to-green-700",
            ],
        ];

        $files = \Illuminate\Support\Facades\Storage::disk('public')->files('breeds');

        $species = collect($files)->map(function ($path, $index) use ($speciesInfo) {
            $filename = pathinfo($path, PATHINFO_FILENAME);

            if (isset($speciesInfo[$filename])) {
                $data = $speciesInfo[$filename];
                $data['id'] = $index + 1;
                $data['image'] = '/storage/' . $path;
                return $data;
            }

            return null;
        })->filter()->values();
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
