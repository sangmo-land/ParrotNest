<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Contact::create([
            'email' => 'info@parrotnest.com',
            'phone' => '(555) 123-4567',
            'address' => "123 Aviary Lane\nTropical Heights, FL 33101",
            'available_hours' => 'Mon-Sat: 9am - 6pm EST',
        ]);
    }
}
