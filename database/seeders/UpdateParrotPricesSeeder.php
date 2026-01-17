<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Parrot;

class UpdateParrotPricesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $parrots = Parrot::all();

        foreach ($parrots as $parrot) {
            // Range 700 to 1100.
            // Step 50.
            // (1100 - 700) / 50 = 8 steps.
            // rand(0, 8) * 50 + 700 results in 700, 750, 800, ... 1100.
            
            $randomStep = rand(0, 8);
            $price = 700 + ($randomStep * 50);

            $parrot->adoption_fee = $price;
            $parrot->save();
        }
    }
}
