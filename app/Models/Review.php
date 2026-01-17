<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    /** @use HasFactory<\Database\Factories\ReviewFactory> */
    use HasFactory;

    protected $fillable = [
        'reviewer_name',
        'location',
        'image_path',
        'rating',
        'comment',
        'is_approved',
        'parrot_species',
    ];
}
