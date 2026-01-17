<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Species;

class NewSpeciesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $species = [
            [
                'name' => 'Red and green macaw',
                'size' => 'Large',
            ],
            [
                'name' => 'Hyacinth macaw',
                'size' => 'Large',
            ],
            [
                'name' => 'White-eyed conure',
                'size' => 'Medium',
            ],
            [
                'name' => 'White-bellied Caique',
                'size' => 'Medium',
            ],
            [
                'name' => 'Yellow-headed amazon',
                'size' => 'Large',
            ],
            [
                'name' => 'Lutino cockatiel',
                'size' => 'Small',
            ],
            [
                'name' => 'Indian Ringneck',
                'size' => 'Medium',
            ],
            [
                'name' => 'Major Mitchell',
                'size' => 'Medium',
            ],
            [
                'name' => 'Blue-fronted Amazon parrot',
                'size' => 'Large',
            ],
        ];

        foreach ($species as $s) {
            Species::firstOrCreate(
                ['name' => $s['name']], // Check by name to avoid duplicates
                [
                    'size' => $s['size'],
                    'is_active' => true,
                ]
            );
        }
    }
}
