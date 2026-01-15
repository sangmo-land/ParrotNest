<?php

namespace Database\Seeders;

use App\Models\Species;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SpeciesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $species = [
            [
                'name' => 'African Grey',
                'scientific_name' => 'Psittacus erithacus',
                'description' => 'Known for exceptional intelligence and talking ability. African Greys are sensitive, require mental stimulation, and form deep bonds with their owners.',
                'size' => 'medium',
                'average_lifespan' => 50,
                'noise_level' => 'moderate',
                'care_requirements' => 'Requires large cage, varied diet, daily interaction, and mental enrichment through toys and training.',
                'is_active' => true,
            ],
            [
                'name' => 'Cockatiel',
                'scientific_name' => 'Nymphicus hollandicus',
                'description' => 'Friendly, social, and easy to care for. Cockatiels are great for first-time bird owners and can learn to whistle tunes.',
                'size' => 'small',
                'average_lifespan' => 20,
                'noise_level' => 'quiet',
                'care_requirements' => 'Medium-sized cage, seed/pellet diet, daily social interaction, and occasional baths.',
                'is_active' => true,
            ],
            [
                'name' => 'Blue and Gold Macaw',
                'scientific_name' => 'Ara ararauna',
                'description' => 'Beautiful, intelligent, and playful large parrot. They are social, can be loud, and need experienced owners.',
                'size' => 'large',
                'average_lifespan' => 60,
                'noise_level' => 'loud',
                'care_requirements' => 'Very large cage/aviary, high-quality pellets, fruits, vegetables, 3-4 hours daily out-of-cage time.',
                'is_active' => true,
            ],
            [
                'name' => 'Budgerigar (Budgie)',
                'scientific_name' => 'Melopsittacus undulatus',
                'description' => 'Small, colorful, and playful. Budgies are social, easy to care for, and can learn to talk with patience.',
                'size' => 'small',
                'average_lifespan' => 10,
                'noise_level' => 'quiet',
                'care_requirements' => 'Small to medium cage, seed/pellet mix, toys, and daily interaction.',
                'is_active' => true,
            ],
            [
                'name' => 'Sun Conure',
                'scientific_name' => 'Aratinga solstitialis',
                'description' => 'Vibrant, affectionate, and energetic. Sun Conures are known for their stunning colors and loud vocalizations.',
                'size' => 'medium',
                'average_lifespan' => 25,
                'noise_level' => 'loud',
                'care_requirements' => 'Large cage, varied diet, lots of toys, and daily supervised playtime.',
                'is_active' => true,
            ],
            [
                'name' => 'Cockatoo',
                'scientific_name' => 'Cacatuidae',
                'description' => 'Highly affectionate and demanding. Cockatoos need extensive attention and can be very loud when seeking interaction.',
                'size' => 'large',
                'average_lifespan' => 70,
                'noise_level' => 'loud',
                'care_requirements' => 'Very large cage, 4-6 hours daily interaction, enrichment activities, and consistent routine.',
                'is_active' => true,
            ],
            [
                'name' => 'Amazon Parrot',
                'scientific_name' => 'Amazona',
                'description' => 'Intelligent, outgoing, and often excellent talkers. Amazons are confident birds that need experienced handlers.',
                'size' => 'medium',
                'average_lifespan' => 50,
                'noise_level' => 'loud',
                'care_requirements' => 'Large cage, pellet-based diet with fresh foods, daily exercise, and mental stimulation.',
                'is_active' => true,
            ],
            [
                'name' => 'Lovebird',
                'scientific_name' => 'Agapornis',
                'description' => 'Small, feisty, and affectionate. Lovebirds are energetic and can be territorial but make devoted companions.',
                'size' => 'small',
                'average_lifespan' => 15,
                'noise_level' => 'moderate',
                'care_requirements' => 'Medium cage, pelleted diet with vegetables, toys for chewing, and regular interaction.',
                'is_active' => true,
            ],
        ];

        foreach ($species as $speciesData) {
            Species::create($speciesData);
        }
    }
}
