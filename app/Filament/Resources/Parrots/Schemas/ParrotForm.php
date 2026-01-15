<?php

namespace App\Filament\Resources\Parrots\Schemas;

use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class ParrotForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('species_id')
                    ->relationship('species', 'name')
                    ->required(),
                TextInput::make('name')
                    ->required(),
                TextInput::make('age')
                    ->numeric()
                    ->default(null),
                Select::make('gender')
                    ->options(['male' => 'Male', 'female' => 'Female', 'unknown' => 'Unknown'])
                    ->default('unknown')
                    ->required(),
                Textarea::make('description')
                    ->required()
                    ->columnSpanFull(),
                Textarea::make('personality')
                    ->default(null)
                    ->columnSpanFull(),
                Textarea::make('health_status')
                    ->default(null)
                    ->columnSpanFull(),
                Toggle::make('is_special_needs')
                    ->required(),
                Textarea::make('special_needs_description')
                    ->default(null)
                    ->columnSpanFull(),
                Select::make('status')
                    ->options([
            'available' => 'Available',
            'pending' => 'Pending',
            'adopted' => 'Adopted',
            'not_available' => 'Not available',
        ])
                    ->default('available')
                    ->required(),
                TextInput::make('adoption_fee')
                    ->required()
                    ->numeric()
                    ->default(0.0),
                Textarea::make('images')
                    ->default(null)
                    ->columnSpanFull(),
                TextInput::make('location')
                    ->default(null),
                DatePicker::make('intake_date'),
                Toggle::make('good_with_children'),
                Toggle::make('good_with_other_birds'),
                Textarea::make('diet_requirements')
                    ->default(null)
                    ->columnSpanFull(),
                TextInput::make('views')
                    ->required()
                    ->numeric()
                    ->default(0),
                Toggle::make('is_featured')
                    ->required(),
            ]);
    }
}
