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
        Schema::table('parrots', function (Blueprint $table) {
            $table->boolean('comes_with_cage')->default(false)->after('adoption_fee');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('parrots', function (Blueprint $table) {
            $table->dropColumn('comes_with_cage');
        });
    }
};
