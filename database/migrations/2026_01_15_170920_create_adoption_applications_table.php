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
        Schema::create('adoption_applications', function (Blueprint $table) {
            $table->id();
            $table->foreignId('parrot_id')->constrained()->onDelete('cascade');
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('applicant_name');
            $table->string('email');
            $table->string('phone');
            $table->text('address');
            $table->string('city');
            $table->string('state');
            $table->string('zip_code');
            $table->enum('housing_type', ['house', 'apartment', 'condo', 'other']);
            $table->boolean('owns_home')->default(false);
            $table->boolean('has_outdoor_space')->default(false);
            $table->integer('household_members')->default(1);
            $table->boolean('has_children')->default(false);
            $table->string('children_ages')->nullable();
            $table->boolean('has_other_pets')->default(false);
            $table->text('other_pets_description')->nullable();
            $table->boolean('has_bird_experience')->default(false);
            $table->text('bird_experience_description')->nullable();
            $table->text('why_adopt')->nullable();
            $table->decimal('income_range', 10, 2)->nullable();
            $table->boolean('can_afford_care')->default(true);
            $table->string('veterinarian_name')->nullable();
            $table->string('veterinarian_phone')->nullable();
            $table->text('references')->nullable(); // JSON
            $table->enum('status', ['pending', 'under_review', 'approved', 'rejected', 'withdrawn'])->default('pending');
            $table->text('admin_notes')->nullable();
            $table->timestamp('reviewed_at')->nullable();
            $table->foreignId('reviewed_by')->nullable()->constrained('users');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('adoption_applications');
    }
};
