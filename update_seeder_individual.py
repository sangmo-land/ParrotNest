import os

file_path = r"c:\xampp\htdocs\ParrotNest\database\seeders\ParrotSeeder.php"
new_content = r"""<?php

namespace Database\Seeders;

use App\Models\Parrot;
use App\Models\Species;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ParrotSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $africanGrey = Species::where('name', 'African Grey')->first();
        $cockatiel = Species::where('name', 'Cockatiel')->first();
        $macaw = Species::where('name', 'Blue and Gold Macaw')->first();
        $budgie = Species::where('name', 'Budgerigar (Budgie)')->first();
        $sunConure = Species::where('name', 'Sun Conure')->first();
        
        // Fallback if species haven't been seeded yet/correctly
        $africanGrey ??= Species::create(['name' => 'African Grey', 'scientific_name' => 'Psittacus erithacus', 'description' => 'Smart', 'lifespan' => '40-60 years', 'size' => 'Medium', 'noise_level' => 'Moderate', 'care_level' => 'Advanced', 'is_active' => true]);
        $cockatiel ??= Species::create(['name' => 'Cockatiel', 'scientific_name' => 'Nymphicus hollandicus', 'description' => 'Friendly', 'lifespan' => '15-20 years', 'size' => 'Small', 'noise_level' => 'Low', 'care_level' => 'Beginner', 'is_active' => true]);
        $macaw ??= Species::create(['name' => 'Blue and Gold Macaw', 'scientific_name' => 'Ara ararauna', 'description' => 'Large', 'lifespan' => '50+ years', 'size' => 'Large', 'noise_level' => 'High', 'care_level' => 'Expert', 'is_active' => true]);
        $budgie ??= Species::create(['name' => 'Budgerigar (Budgie)', 'scientific_name' => 'Melopsittacus undulatus', 'description' => 'Small', 'lifespan' => '5-10 years', 'size' => 'Small', 'noise_level' => 'Low', 'care_level' => 'Beginner', 'is_active' => true]);
        $sunConure ??= Species::create(['name' => 'Sun Conure', 'scientific_name' => 'Aratinga solstitialis', 'description' => 'Colorful', 'lifespan' => '20-30 years', 'size' => 'Medium', 'noise_level' => 'High', 'care_level' => 'Tntermediate', 'is_active' => true]);


        $images = [
            'parrots/IMG_5465.jpeg',
            'parrots/WhatsApp Image 2026-01-16 at 22.31.50.jpeg',
            'parrots/WhatsApp Image 2026-01-16 at 22.31.52.jpeg',
            'parrots/WhatsApp Image 2026-01-16 at 22.31.53 (1).jpeg',
            'parrots/WhatsApp Image 2026-01-16 at 22.31.53.jpeg',
            'parrots/WhatsApp Image 2026-01-16 at 22.31.54 (1).jpeg',
            'parrots/WhatsApp Image 2026-01-16 at 22.31.54.jpeg',
            'parrots/WhatsApp Image 2026-01-16 at 22.31.55 (1).jpeg',
            'parrots/WhatsApp Image 2026-01-16 at 22.31.55 (2).jpeg',
            'parrots/WhatsApp Image 2026-01-16 at 22.31.55 (3).jpeg',
            'parrots/WhatsApp Image 2026-01-16 at 22.31.55.jpeg',
            'parrots/WhatsApp Image 2026-01-16 at 22.31.56 (1).jpeg',
            'parrots/WhatsApp Image 2026-01-16 at 22.31.56.jpeg',
            'parrots/WhatsApp Image 2026-01-16 at 22.31.57 (1).jpeg',
            'parrots/WhatsApp Image 2026-01-16 at 22.31.57.jpeg',
            'parrots/WhatsApp Image 2026-01-16 at 22.31.58 (1).jpeg',
            'parrots/WhatsApp Image 2026-01-16 at 22.31.58 (2).jpeg',
            'parrots/WhatsApp Image 2026-01-16 at 22.31.58.jpeg',
            'parrots/WhatsApp Image 2026-01-16 at 22.31.59 (1).jpeg',
            'parrots/WhatsApp Image 2026-01-16 at 22.31.59 (2).jpeg',
            'parrots/WhatsApp Image 2026-01-16 at 22.31.59.jpeg',
            'parrots/WhatsApp Image 2026-01-16 at 22.32.00.jpeg',
        ];
        
        $names = ['Charlie', 'Peaches', 'Rio', 'Kiwi', 'Sunny', 'Mango', 'Bella', 'Max', 'Luna', 'Coco', 'Buddy', 'Ruby', 'Lola', 'Pepper', 'Oliver', 'Oscar', 'Cleo', 'Ziggy', 'Blue', 'Skye', 'Echo', 'Tiki'];
        $speciesList = [$africanGrey, $cockatiel, $macaw, $budgie, $sunConure];
        $genders = ['Male', 'Female'];

        foreach ($images as $index => $image) {
            $name = $names[$index] ?? 'Parrot ' . ($index + 1);
            $species = $speciesList[$index % count($speciesList)];
            $gender = $genders[$index % 2];
            
            Parrot::create([
                'species_id' => $species->id,
                'name' => $name,
                'age' => rand(1, 15),
                'gender' => $gender,
                'description' => "A wonderful {$species->name} named {$name}. " . ($gender == 'Male' ? 'He' : 'She') . " is full of character and ready for a loving home.",
                'personality' => 'Friendly, social, curious',
                'health_status' => 'Excellent health',
                'is_special_needs' => false,
                'status' => 'available',
                'adoption_fee' => rand(100, 2000),
                'comes_with_cage' => (bool)rand(0, 1),
                'location' => 'Main Sanctuary',
                'intake_date' => now()->subDays(rand(1, 365)),
                'good_with_children' => (bool)rand(0, 1),
                'good_with_other_birds' => true,
                'diet_requirements' => 'Pellets, fresh vegetables, fruits.',
                'is_featured' => rand(0, 5) == 0, // Approx 1 in 5 featured
                'images' => [$image], // Single image per parrot
            ]);
        }
    }
}
"""

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)
