<?php

namespace App\Filament\Resources\Reviews\Schemas;

use App\Models\Species;
use App\Models\User;
use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Components\Select;
use Filament\Schemas\Components\Utilities\Set;

class ReviewForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('reviewer_name')
                    ->required()
                    ->maxLength(255),
Select::make('user_id')
                ->label('Select User (Optional)')
                ->options(User::pluck('name', 'id'))
                ->searchable()
                ->placeholder('Select a user to auto-fill email')
                ->live()
                ->afterStateUpdated(function (Set $set, ?string $state) {
                if ($state) {
                $user = User::find($state);
                if ($user) {
                $set('email', $user->email);
                }
                }
                }),
                TextInput::make('email')
                ->email()
->required()
                ->maxLength(255)
                ->placeholder('Enter email or select a user above'),
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
Select::make('parrot_species')
                ->label('Parrot Species')
                ->options(Species::where('is_active', true)->pluck('name', 'name'))
                ->searchable()
                ->placeholder('Select a species'),
            ]);
    }
}
