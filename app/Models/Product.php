<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'description',
        'price',
'previous_price',
        'images',
        'category',
        'stock',
        'is_active',
'free_delivery',
        'is_best',
        'is_popular',
        'free_next_day_delivery',
'rating',
        'rating_count',
    ];

    protected $casts = [
        'price' => 'decimal:2',
'previous_price' => 'decimal:2',
        'stock' => 'integer',
        'is_active' => 'boolean',
'images' => 'array',
        'free_delivery' => 'boolean',
        'is_best' => 'boolean',
        'is_popular' => 'boolean',
        'free_next_day_delivery' => 'boolean',
'rating' => 'decimal:1',
        'rating_count' => 'integer',
    ];
protected static function boot()
{
parent::boot();

static::updating(function ($product) {
// Auto-set previous_price when price changes, but only if previous_price wasn't manually set
if ($product->isDirty('price') && !$product->isDirty('previous_price')) {
$originalPrice = $product->getOriginal('price');
if ($originalPrice !== null && $originalPrice != $product->price) {
$product->previous_price = $originalPrice;
}
}
});
}
}
