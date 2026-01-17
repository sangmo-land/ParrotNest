<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ParrotFactory extends Factory
{
    public function definition(): array
    {
        return [
            "species_id" => \App\Models\Species::factory(),
            "name" => fake()->firstName(),
            "age" => fake()->numberBetween(1, 50),
            "gender" => fake()->randomElement(["male", "female", "unknown"]),
            "description" => fake()->paragraph(),
            "personality" => fake()->sentence(),
            "health_status" => fake()->sentence(),
            "is_special_needs" => fake()->boolean(10),
            "special_needs_description" => fake()->optional()->sentence(),
            "status" => "available",
            "adoption_fee" => fake()->randomFloat(2, 50, 500),
            "images" => json_encode([]),
            "location" => fake()->city(),
            "intake_date" => fake()->date(),
            "good_with_children" => fake()->boolean(),
            "good_with_other_birds" => fake()->boolean(),
            "diet_requirements" => fake()->sentence(),
        ];
    }
}
