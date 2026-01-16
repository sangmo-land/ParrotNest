<?php

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

        $parrots = [
            [
                'species_id' => $africanGrey->id,
                'name' => 'Charlie',
                'age' => 5,
                'gender' => 'male',
                'description' => 'Charlie is a remarkable African Grey with an extensive vocabulary of over 100 words. He loves engaging in conversations and mimicking household sounds.',
                'personality' => 'Intelligent, talkative, curious. Enjoys puzzle toys and learning new words.',
                'health_status' => 'Excellent health, up-to-date on all vet checks.',
                'is_special_needs' => false,
                'status' => 'available',
                'adoption_fee' => 1200.00,
'comes_with_cage' => true,
                'location' => 'Main Sanctuary',
                'intake_date' => now()->subMonths(3),
                'good_with_children' => true,
                'good_with_other_birds' => true,
                'diet_requirements' => 'Pellets, fresh vegetables, fruits in moderation, occasional nuts.',
                'is_featured' => true,
            ],
            [
                'species_id' => $cockatiel->id,
                'name' => 'Peaches',
                'age' => 2,
                'gender' => 'female',
                'description' => 'Sweet and gentle Peaches loves head scratches and whistling. Perfect for first-time bird owners.',
                'personality' => 'Affectionate, calm, enjoys music and whistling tunes.',
                'health_status' => 'Healthy, recently examined.',
                'is_special_needs' => false,
                'status' => 'available',
                'adoption_fee' => 150.00,
'comes_with_cage' => true,
                'location' => 'Foster Home - North',
                'intake_date' => now()->subMonths(1),
                'good_with_children' => true,
                'good_with_other_birds' => true,
                'diet_requirements' => 'Cockatiel pellets, millet spray, fresh greens.',
                'is_featured' => true,
            ],
            [
                'species_id' => $macaw->id,
                'name' => 'Rio',
                'age' => 10,
                'gender' => 'male',
                'description' => 'Rio is a stunning Blue and Gold Macaw seeking an experienced owner. He is playful, intelligent, and requires significant daily interaction.',
                'personality' => 'Energetic, playful, loves to show off tricks. Can be vocal.',
                'health_status' => 'Good health, requires annual vet visits.',
                'is_special_needs' => false,
                'status' => 'available',
                'adoption_fee' => 2500.00,
'comes_with_cage' => false,
                'location' => 'Main Sanctuary',
                'intake_date' => now()->subMonths(6),
                'good_with_children' => false,
                'good_with_other_birds' => false,
                'diet_requirements' => 'High-quality pellets, nuts, fruits, vegetables. Needs variety.',
                'is_featured' => true,
            ],
            [
                'species_id' => $budgie->id,
                'name' => 'Kiwi',
                'age' => 1,
                'gender' => 'male',
                'description' => 'Kiwi is an energetic young budgie with beautiful green plumage. Very social and playful.',
                'personality' => 'Playful, social, loves flying and exploring.',
                'health_status' => 'Excellent, young and healthy.',
                'is_special_needs' => false,
                'status' => 'available',
                'adoption_fee' => 40.00,
'comes_with_cage' => true,
                'location' => 'Foster Home - South',
                'intake_date' => now()->subWeeks(2),
                'good_with_children' => true,
                'good_with_other_birds' => true,
                'diet_requirements' => 'Budgie seed mix, pellets, occasional vegetables.',
                'is_featured' => false,
            ],
            [
                'species_id' => $sunConure->id,
                'name' => 'Sunny',
                'age' => 4,
                'gender' => 'female',
                'description' => 'Sunny is a vibrant Sun Conure with stunning yellow and orange feathers. She is affectionate but can be loud.',
                'personality' => 'Affectionate, energetic, can be vocal especially in morning.',
                'health_status' => 'Healthy, minor feather plucking history (resolved).',
                'is_special_needs' => true,
                'special_needs_description' => 'History of feather plucking due to stress. Needs stable, quiet environment with consistent routine.',
                'status' => 'available',
                'adoption_fee' => 500.00,
'comes_with_cage' => true,
                'location' => 'Main Sanctuary',
                'intake_date' => now()->subMonths(8),
                'good_with_children' => true,
                'good_with_other_birds' => true,
                'diet_requirements' => 'Pellets, fresh fruits, vegetables. Loves berries.',
                'is_featured' => false,
            ],
            [
                'species_id' => $cockatiel->id,
                'name' => 'Mango',
                'age' => 3,
                'gender' => 'male',
                'description' => 'Mango is a friendly cockatiel who loves to sit on shoulders and whistle.',
                'personality' => 'Friendly, social, enjoys human company.',
                'health_status' => 'Healthy and active.',
                'is_special_needs' => false,
                'status' => 'pending',
                'adoption_fee' => 150.00,
'comes_with_cage' => false,
                'location' => 'Main Sanctuary',
                'intake_date' => now()->subMonths(4),
                'good_with_children' => true,
                'good_with_other_birds' => true,
                'diet_requirements' => 'Cockatiel pellets, vegetables, occasional seeds.',
                'is_featured' => false,
            ],
            [
                'species_id' => $africanGrey->id,
                'name' => 'Bella',
                'age' => 8,
                'gender' => 'female',
                'description' => 'Bella is a quiet African Grey who prefers observing to talking. She needs a patient owner.',
                'personality' => 'Shy, observant, warming up slowly to people.',
                'health_status' => 'Healthy, regular vet checkups.',
                'is_special_needs' => false,
                'status' => 'available',
                'adoption_fee' => 1000.00,
'comes_with_cage' => true,
                'location' => 'Foster Home - East',
                'intake_date' => now()->subMonths(5),
                'good_with_children' => false,
                'good_with_other_birds' => true,
                'diet_requirements' => 'Pellets, vegetables, limited fruit.',
                'is_featured' => false,
            ],
        ];

        foreach ($parrots as $parrotData) {
            Parrot::create($parrotData);
        }
    }
}
