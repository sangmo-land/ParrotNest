<?php

use App\Http\Controllers\ParrotController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SpeciesController;
use App\Http\Controllers\AdoptionApplicationController;
use App\Http\Controllers\ReviewController;
use App\Models\Parrot;
use App\Models\Species;
use App\Models\Review;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Homepage
Route::get('/', function () {
    $featuredParrots = Parrot::with('species')
        ->where('is_featured', true)
        ->where('status', 'available')
        ->limit(6)
        ->get();

    $stats = [
        'total_parrots' => Parrot::where('status', 'available')->count(),
        'species_count' => Species::where('is_active', true)->count(),
        'total_adopted' => Parrot::where('status', 'adopted')->count(),
    ];

    $successStories = Review::where('is_approved', true)
        ->inRandomOrder()
        ->limit(3)
        ->get();

    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'featuredParrots' => $featuredParrots,
        'stats' => $stats,
        'successStories' => $successStories,
    ]);
})->name('home');

// Public Parrot Routes
Route::get('/parrots', [ParrotController::class, 'index'])->name('parrots.index');
Route::get('/parrots/{parrot}', [ParrotController::class, 'show'])->name('parrots.show');

// Species Routes (Mapped to /about-breeds as requested, keeping /species alias for backward compat if needed)
Route::get('/about-breeds', [SpeciesController::class, 'index'])->name('species.index');
Route::get('/species', [SpeciesController::class, 'index']); // Alias
Route::get('/about-breeds/{species}', [SpeciesController::class, 'show'])->name('species.show');

Route::get('/reviews', [ReviewController::class, 'index'])->name('reviews.index');
Route::get('/contact', function() { return Inertia::render('ContactUs'); })->name('contact');
Route::get('/health-guarantee', function() { return Inertia::render('HealthGuarantee'); })->name('health');
Route::get('/delivery-shipping', function() { return Inertia::render('DeliveryShipping'); })->name('delivery');
Route::get('/care-guide', function() { return Inertia::render('CareGuide'); })->name('care');
Route::get('/feeding-tips', function() { return Inertia::render('FeedingTips'); })->name('feeding');
Route::get('/about-us', function() { return Inertia::render('AboutUs'); })->name('about');
// End of Static Routes

// Authenticated Routes
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    // Profile Routes
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Adoption Application Routes
    Route::get('/apply/{parrot}', [AdoptionApplicationController::class, 'create'])->name('applications.create');
    Route::post('/apply', [AdoptionApplicationController::class, 'store'])->name('applications.store');
    Route::get('/my-applications', [AdoptionApplicationController::class, 'index'])->name('applications.index');
    Route::get('/my-applications/{application}', [AdoptionApplicationController::class, 'show'])->name('applications.show');
});

require __DIR__.'/auth.php';
