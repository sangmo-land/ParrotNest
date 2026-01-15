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
        Schema::create('adoptions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('parrot_id')->constrained()->onDelete('cascade');
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('application_id')->constrained('adoption_applications')->onDelete('cascade');
            $table->date('adoption_date');
            $table->decimal('adoption_fee_paid', 10, 2);
            $table->string('payment_method')->nullable();
            $table->string('payment_reference')->nullable();
            $table->text('adoption_contract')->nullable();
            $table->boolean('microchip_transferred')->default(false);
            $table->text('follow_up_notes')->nullable();
            $table->date('follow_up_date_1')->nullable();
            $table->date('follow_up_date_2')->nullable();
            $table->date('follow_up_date_3')->nullable();
            $table->enum('status', ['active', 'returned', 'completed'])->default('active');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('adoptions');
    }
};
