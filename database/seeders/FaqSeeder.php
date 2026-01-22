<?php

namespace Database\Seeders;

use App\Models\Faq;
use Illuminate\Database\Seeder;

class FaqSeeder extends Seeder
{
    public function run(): void
    {
        $faqs = [
            [
                'question' => 'How does the adoption process work?',
                'answer' => 'Our adoption process is simple: 1. Browse our available parrots. 2. Submit an application for your chosen friend. 3. We review your application (usually within 24-48 hours). 4. Try to schedule a meet-and-greet (virtual or in-person). 5. Finalize the adoption and bring your new friend home!',
                'is_published' => true,
            ],
            [
                'question' => 'Do you ship parrots?',
                'answer' => 'Yes, we offer safe and comfortable shipping for our birds across the country using specialized pet transport services. The cost varies by location but typically ranges from $150 to $300. We prioritize the safety and well-being of the parrot above all else.',
                'is_published' => true,
            ],
            [
                'question' => 'What should I feed my parrot?',
                'answer' => 'A healthy parrot diet consists of high-quality pellets (60-70%), fresh vegetables (20-30%), and small amounts of fruits and nuts. Toxic foods to avoid include avocado, chocolate, caffeine, and onions. Always provide fresh water.',
                'is_published' => true,
            ],
            [
                'question' => 'Are the parrots health checked?',
                'answer' => 'Absolutely. All our parrots undergo a comprehensive vet check-up before becoming available for adoption. They are screened for common diseases like Psittacosis and PBFD. We provide a full health certificate with every adoption.',
                'is_published' => true,
            ],
            [
                'question' => 'What is your return policy?',
                'answer' => 'We understand that sometimes things don\'t work out. We have a "bird-back" guarantee. If you can no longer care for the parrot for any reason, we will take them back to ensure they always have a safe home. Note that adoption fees are generally non-refundable after a certain period.',
                'is_published' => true,
            ],
            [
                'question' => 'Can I visit the parrots?',
                'answer' => 'Yes! We encourage visits. Please schedule an appointment through our Contact page. Visits help you bond with the bird and ensure it\'s a good match for your family.',
                'is_published' => true,
            ],
            [
                'question' => 'Do you have baby parrots?',
                'answer' => 'We occasionally have hand-fed babies, but our primary focus is on rehoming and rescuing parrots in need of new homes. Check our "Available Parrots" section for ages.',
                'is_published' => true,
            ],
            [
                'question' => 'How much are the adoption fees?',
                'answer' => 'Adoption fees vary by species and age, ranging from $50 for small parakeets to $800+ for large macaws or cockatoos. This fee helps cover their vet care, food, and housing while they are with us.',
                'is_published' => true,
            ],
             [
                'question' => 'Do you sell cages?',
                'answer' => 'We have a small selection of cages and supplies available in our shop. We highly recommend having a cage set up ready before bringing your parrot home.',
                'is_published' => true,
            ],
        ];

        foreach ($faqs as $faq) {
            Faq::create($faq);
        }
    }
}
