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
        Schema::table('products', function (Blueprint $table) {
            $table->boolean('free_delivery')->default(false)->after('is_active');
            $table->boolean('is_best')->default(false)->after('free_delivery');
            $table->boolean('is_popular')->default(false)->after('is_best');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->dropColumn(['free_delivery', 'is_best', 'is_popular']);
        });
    }
};
