<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Parrot extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'species_id',
        'name',
        'age',
        'gender',
        'description',
        'personality',
        'health_status',
        'is_special_needs',
        'special_needs_description',
        'status',
        'adoption_fee',
        'images',
        'location',
        'intake_date',
        'good_with_children',
        'good_with_other_birds',
        'diet_requirements',
        'views',
        'is_featured',
    ];

    protected $casts = [
        'images' => 'array',
        'is_special_needs' => 'boolean',
        'good_with_children' => 'boolean',
        'good_with_other_birds' => 'boolean',
        'is_featured' => 'boolean',
        'intake_date' => 'date',
        'adoption_fee' => 'decimal:2',
    ];

    public function species(): BelongsTo
    {
        return $this->belongsTo(Species::class);
    }

    public function adoptionApplications(): HasMany
    {
        return $this->hasMany(AdoptionApplication::class);
    }

    public function adoption(): HasMany
    {
        return $this->hasMany(Adoption::class);
    }

    public function scopeAvailable($query)
    {
        return $query->where('status', 'available');
    }

    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }
}
