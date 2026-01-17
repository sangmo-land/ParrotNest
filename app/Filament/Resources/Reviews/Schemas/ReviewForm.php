<?php

namespace App\Filament\Resources\Reviews\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Components\Select;

class ReviewForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('reviewer_name')
                    ->required()
                    ->maxLength(255),
                TextInput::make('location')
                    ->maxLength(255),
                Select::make('rating')
                    ->options([
                        1 => '1 Star',
                        2 => '2 Stars',
                        3 => '3 Stars',
                        4 => '4 Stars',
                        5 => '5 Stars',
                    ])
                    ->required()
                    ->native(false),
                Textarea::make('comment')
                    ->required()
                    ->columnSpanFull(),
                FileUpload::make('image_path')
                    ->image()
                    ->disk('public')
                    ->directory('reviews')
                    ->visibility('public')
                    ->columnSpanFull(),
                Toggle::make('is_approved')
                    ->default(true)
                    ->required(),
                TextInput::make('parrot_species')
                    ->maxLength(255),
            ]);
    }
}
