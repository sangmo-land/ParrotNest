<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class AdoptionApplication extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'parrot_id',
        'user_id',
        'applicant_name',
        'email',
        'phone',
        'address',
        'city',
        'state',
        'zip_code',
        'housing_type',
        'owns_home',
        'has_outdoor_space',
        'household_members',
        'has_children',
        'children_ages',
        'has_other_pets',
        'other_pets_description',
        'has_bird_experience',
        'bird_experience_description',
        'why_adopt',
        'income_range',
        'can_afford_care',
        'veterinarian_name',
        'veterinarian_phone',
        'references',
        'status',
        'admin_notes',
        'reviewed_at',
        'reviewed_by',
    ];

    protected $casts = [
        'owns_home' => 'boolean',
        'has_outdoor_space' => 'boolean',
        'has_children' => 'boolean',
        'has_other_pets' => 'boolean',
        'has_bird_experience' => 'boolean',
        'can_afford_care' => 'boolean',
        'reviewed_at' => 'datetime',
        'income_range' => 'decimal:2',
    ];

    public function parrot(): BelongsTo
    {
        return $this->belongsTo(Parrot::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function reviewer(): BelongsTo
    {
        return $this->belongsTo(User::class, 'reviewed_by');
    }

    public function adoption(): HasOne
    {
        return $this->hasOne(Adoption::class, 'application_id');
    }

    public function scopePending($query)
    {
        return $query->where('status', 'pending');
    }

    public function scopeApproved($query)
    {
        return $query->where('status', 'approved');
    }
}
