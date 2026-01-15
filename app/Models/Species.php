<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Species extends Model
{
    protected $fillable = [
        'name',
        'scientific_name',
        'description',
        'size',
        'average_lifespan',
        'noise_level',
        'care_requirements',
        'image',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    public function parrots(): HasMany
    {
        return $this->hasMany(Parrot::class);
    }
}
