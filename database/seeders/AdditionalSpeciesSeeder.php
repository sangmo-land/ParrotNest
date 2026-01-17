<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Species;

class AdditionalSpeciesSeeder extends Seeder
{
    public function run(): void
    {
        Species::firstOrCreate(
            ['name' => 'Alexandrine parakeet'],
            [
                'size' => 'Medium',
                'is_active' => true,
            ]
        );
    }
}
