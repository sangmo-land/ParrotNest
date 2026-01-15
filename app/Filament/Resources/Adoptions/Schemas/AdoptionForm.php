<?php

namespace App\Filament\Resources\Adoptions\Schemas;

use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class AdoptionForm
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
                Select::make('application_id')
                    ->relationship('application', 'id')
                    ->required(),
                DatePicker::make('adoption_date')
                    ->required(),
                TextInput::make('adoption_fee_paid')
                    ->required()
                    ->numeric(),
                TextInput::make('payment_method')
                    ->default(null),
                TextInput::make('payment_reference')
                    ->default(null),
                Textarea::make('adoption_contract')
                    ->default(null)
                    ->columnSpanFull(),
                Toggle::make('microchip_transferred')
                    ->required(),
                Textarea::make('follow_up_notes')
                    ->default(null)
                    ->columnSpanFull(),
                DatePicker::make('follow_up_date_1'),
                DatePicker::make('follow_up_date_2'),
                DatePicker::make('follow_up_date_3'),
                Select::make('status')
                    ->options(['active' => 'Active', 'returned' => 'Returned', 'completed' => 'Completed'])
                    ->default('active')
                    ->required(),
            ]);
    }
}
