<?php

namespace App\Filament\Resources\AdoptionApplications\Schemas;

use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class AdoptionApplicationForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('parrot_id')
                    ->relationship('parrot', 'name')
                    ->required(),
                Select::make('user_id')
                    ->relationship('user', 'name')
                    ->required(),
                TextInput::make('applicant_name')
                    ->required(),
                TextInput::make('email')
                    ->label('Email address')
                    ->email()
                    ->required(),
                TextInput::make('phone')
                    ->tel()
                    ->required(),
                Textarea::make('address')
                    ->required()
                    ->columnSpanFull(),
                TextInput::make('city')
                    ->required(),
                TextInput::make('state')
                    ->required(),
                TextInput::make('zip_code')
                    ->required(),
                Select::make('housing_type')
                    ->options(['house' => 'House', 'apartment' => 'Apartment', 'condo' => 'Condo', 'other' => 'Other'])
                    ->required(),
                Toggle::make('owns_home')
                    ->required(),
                Toggle::make('has_outdoor_space')
                    ->required(),
                TextInput::make('household_members')
                    ->required()
                    ->numeric()
                    ->default(1),
                Toggle::make('has_children')
                    ->required(),
                TextInput::make('children_ages')
                    ->default(null),
                Toggle::make('has_other_pets')
                    ->required(),
                Textarea::make('other_pets_description')
                    ->default(null)
                    ->columnSpanFull(),
                Toggle::make('has_bird_experience')
                    ->required(),
                Textarea::make('bird_experience_description')
                    ->default(null)
                    ->columnSpanFull(),
                Textarea::make('why_adopt')
                    ->default(null)
                    ->columnSpanFull(),
                TextInput::make('income_range')
                    ->numeric()
                    ->default(null),
                Toggle::make('can_afford_care')
                    ->required(),
                TextInput::make('veterinarian_name')
                    ->default(null),
                TextInput::make('veterinarian_phone')
                    ->tel()
                    ->default(null),
                Textarea::make('references')
                    ->default(null)
                    ->columnSpanFull(),
                Select::make('status')
                    ->options([
            'pending' => 'Pending',
            'under_review' => 'Under review',
            'approved' => 'Approved',
            'rejected' => 'Rejected',
            'withdrawn' => 'Withdrawn',
        ])
                    ->default('pending')
                    ->required(),
                Textarea::make('admin_notes')
                    ->default(null)
                    ->columnSpanFull(),
                DateTimePicker::make('reviewed_at'),
                TextInput::make('reviewed_by')
                    ->numeric()
                    ->default(null),
            ]);
    }
}
