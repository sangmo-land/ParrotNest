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
    ];
protected static function boot()
{
parent::boot();

static::updating(function ($product) {
// If price is changing and is different from current price
if ($product->isDirty('price')) {
$originalPrice = $product->getOriginal('price');
// Only set previous_price if the price actually changed to a different value
if ($originalPrice !== null && $originalPrice != $product->price) {
$product->previous_price = $originalPrice;
}
}
});
}
}
