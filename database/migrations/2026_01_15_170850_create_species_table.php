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
        Schema::create('species', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // e.g., African Grey, Macaw, Cockatoo
            $table->string('scientific_name')->nullable();
            $table->text('description')->nullable();
            $table->string('size'); // small, medium, large
            $table->integer('average_lifespan')->nullable(); // in years
            $table->string('noise_level')->nullable(); // quiet, moderate, loud
            $table->text('care_requirements')->nullable();
            $table->string('image')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('species');
    }
};
