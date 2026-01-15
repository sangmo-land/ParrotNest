<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('parrots', function (Blueprint $table) {
            $table->id();
            $table->foreignId('species_id')->constrained()->onDelete('cascade');
            $table->string('name');
            $table->integer('age')->nullable();
            $table->enum('gender', ['male', 'female', 'unknown'])->default('unknown');
            $table->text('description');
            $table->text('personality')->nullable();
            $table->text('health_status')->nullable();
            $table->boolean('is_special_needs')->default(false);
            $table->text('special_needs_description')->nullable();
            $table->enum('status', ['available', 'pending', 'adopted', 'not_available'])->default('available');
            $table->decimal('adoption_fee', 10, 2)->default(0);
            $table->json('images')->nullable(); // Array of image paths
            $table->string('location')->nullable();
            $table->date('intake_date')->nullable();
            $table->boolean('good_with_children')->nullable();
            $table->boolean('good_with_other_birds')->nullable();
            $table->text('diet_requirements')->nullable();
            $table->integer('views')->default(0);
            $table->boolean('is_featured')->default(false);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('parrots');
    }
};
