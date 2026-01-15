<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Adoption extends Model
{
    protected $fillable = [
        'parrot_id',
        'user_id',
        'application_id',
        'adoption_date',
        'adoption_fee_paid',
        'payment_method',
        'payment_reference',
        'adoption_contract',
        'microchip_transferred',
        'follow_up_notes',
        'follow_up_date_1',
        'follow_up_date_2',
        'follow_up_date_3',
        'status',
    ];

    protected $casts = [
        'adoption_date' => 'date',
        'follow_up_date_1' => 'date',
        'follow_up_date_2' => 'date',
        'follow_up_date_3' => 'date',
        'microchip_transferred' => 'boolean',
        'adoption_fee_paid' => 'decimal:2',
    ];

    public function parrot(): BelongsTo
    {
        return $this->belongsTo(Parrot::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function application(): BelongsTo
    {
        return $this->belongsTo(AdoptionApplication::class, 'application_id');
    }

    public function scopeActive($query)
    {
        return $query->where('status', 'active');
    }
}
