<?php

namespace App\Filament\Resources\AdoptionApplications\Schemas;

use App\Models\AdoptionApplication;
use Filament\Infolists\Components\IconEntry;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Schema;

class AdoptionApplicationInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextEntry::make('parrot.name')
                    ->label('Parrot'),
                TextEntry::make('user.name')
                    ->label('User'),
                TextEntry::make('applicant_name'),
                TextEntry::make('email')
                    ->label('Email address'),
                TextEntry::make('phone'),
                TextEntry::make('address')
                    ->columnSpanFull(),
                TextEntry::make('city'),
                TextEntry::make('state'),
                TextEntry::make('zip_code'),
                TextEntry::make('housing_type')
                    ->badge(),
                IconEntry::make('owns_home')
                    ->boolean(),
                IconEntry::make('has_outdoor_space')
                    ->boolean(),
                TextEntry::make('household_members')
                    ->numeric(),
                IconEntry::make('has_children')
                    ->boolean(),
                TextEntry::make('children_ages')
                    ->placeholder('-'),
                IconEntry::make('has_other_pets')
                    ->boolean(),
                TextEntry::make('other_pets_description')
                    ->placeholder('-')
                    ->columnSpanFull(),
                IconEntry::make('has_bird_experience')
                    ->boolean(),
                TextEntry::make('bird_experience_description')
                    ->placeholder('-')
                    ->columnSpanFull(),
                TextEntry::make('why_adopt')
                    ->placeholder('-')
                    ->columnSpanFull(),
                TextEntry::make('income_range')
                    ->numeric()
                    ->placeholder('-'),
                IconEntry::make('can_afford_care')
                    ->boolean(),
                TextEntry::make('veterinarian_name')
                    ->placeholder('-'),
                TextEntry::make('veterinarian_phone')
                    ->placeholder('-'),
                TextEntry::make('references')
                    ->placeholder('-')
                    ->columnSpanFull(),
                TextEntry::make('status')
                    ->badge(),
                TextEntry::make('admin_notes')
                    ->placeholder('-')
                    ->columnSpanFull(),
                TextEntry::make('reviewed_at')
                    ->dateTime()
                    ->placeholder('-'),
                TextEntry::make('reviewed_by')
                    ->numeric()
                    ->placeholder('-'),
                TextEntry::make('created_at')
                    ->dateTime()
                    ->placeholder('-'),
                TextEntry::make('updated_at')
                    ->dateTime()
                    ->placeholder('-'),
                TextEntry::make('deleted_at')
                    ->dateTime()
                    ->visible(fn (AdoptionApplication $record): bool => $record->trashed()),
            ]);
    }
}
