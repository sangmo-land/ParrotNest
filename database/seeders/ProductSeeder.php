<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = [
            [
                'name' => 'Large Iron Bird Cage',
                'slug' => 'large-iron-bird-cage',
                'description' => 'Spacious and durable iron cage, perfect for Macaws and Cockatoos. Includes 3 feeding bowls and 2 perches.',
                'price' => 299.99,
                'category' => 'cages',
                'image' => 'products/cage-1.jpg',
                'stock' => 5,
            ],
            [
                'name' => 'Medium Stainless Steel Cage',
                'slug' => 'medium-stainless-steel-cage',
                'description' => 'Rust-resistant stainless steel cage suited for African Greys and Amazons. Easy to clean.',
                'price' => 189.50,
                'category' => 'cages',
                'image' => 'products/cage-2.jpg',
                'stock' => 10,
            ],
            [
                'name' => 'Natural Wood Perch (Large)',
                'slug' => 'natural-wood-perch-large',
                'description' => 'Authentic natural wood perch to promote healthy foot muscles. Suitable for large parrots.',
                'price' => 24.99,
                'category' => 'perches',
                'image' => 'products/perch-1.jpg',
                'stock' => 50,
            ],
            [
                'name' => 'Rope Bungee Perch',
                'slug' => 'rope-bungee-perch',
                'description' => 'Colorful cotton rope perch that can be bent into various shapes. Great for exercise.',
                'price' => 15.99,
                'category' => 'perches',
                'image' => 'products/perch-2.jpg',
                'stock' => 30,
            ],
            [
                'name' => 'Wooden Delivery Pallet',
                'slug' => 'wooden-delivery-pallet',
                'description' => 'Standard wooden pallet for shipping or DIY cage stands.',
                'price' => 45.00,
                'category' => 'pallets',
                'image' => 'products/pallet-1.jpg',
                'stock' => 20,
            ],
             [
                'name' => 'Travel Carrier',
                'slug' => 'travel-carrier',
                'description' => 'Lightweight and secure travel carrier for vet visits or trips.',
                'price' => 59.99,
                'category' => 'cages',
                'image' => 'products/carrier-1.jpg',
                'stock' => 15,
            ],
        ];

        foreach ($products as $product) {
            Product::updateOrCreate(['slug' => $product['slug']], $product);
        }
    }
}
