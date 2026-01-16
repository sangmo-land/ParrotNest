<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserTrialSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Admin User
        User::firstOrCreate(
            ['email' => 'admin@parrot.com'],
            [
                'name' => 'Admin User',
                'password' => Hash::make('password'),
                'email_verified_at' => now(),
            ]
        );

        // Normal User
        User::firstOrCreate(
            ['email' => 'user@parrot.com'],
            [
                'name' => 'Normal User',
                'password' => Hash::make('password'),
                'email_verified_at' => now(),
            ]
        );
    }
}
