<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // First, convert existing single image values to JSON arrays
        $products = DB::table('products')->whereNotNull('image')->get();
        foreach ($products as $product) {
            DB::table('products')
                ->where('id', $product->id)
                ->update(['image' => json_encode([$product->image])]);
        }

        // Rename column from image to images
        Schema::table('products', function (Blueprint $table) {
            $table->renameColumn('image', 'images');
        });

        // Change column type to JSON
        Schema::table('products', function (Blueprint $table) {
            $table->json('images')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Change column type back to string
        Schema::table('products', function (Blueprint $table) {
            $table->string('images')->nullable()->change();
        });

        // Rename column back from images to image
        Schema::table('products', function (Blueprint $table) {
            $table->renameColumn('images', 'image');
        });

        // Convert JSON arrays back to single image strings
        $products = DB::table('products')->whereNotNull('image')->get();
        foreach ($products as $product) {
            $images = json_decode($product->image, true);
            $singleImage = is_array($images) && count($images) > 0 ? $images[0] : null;
            DB::table('products')
                ->where('id', $product->id)
                ->update(['image' => $singleImage]);
        }
    }
};
