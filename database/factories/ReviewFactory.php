<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Review>
 */
class ReviewFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'reviewer_name' => fake()->name(),
            'location' => fake()->city() . ', ' . fake()->stateAbbr(),
            'image_path' => null, // Default to no image for factory
            'rating' => fake()->numberBetween(4, 5), // Mostly positive reviews
            'comment' => fake()->paragraph(),
            'is_approved' => true,
            'parrot_species' => fake()->randomElement(['African Grey', 'Macaw', 'Cockatoo', 'Parakeet', 'Budgie', 'Amazon Parrot']),
            'created_at' => fake()->dateTimeBetween('-1 year', 'now'),
        ];
    }
}
