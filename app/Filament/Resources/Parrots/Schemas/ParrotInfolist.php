<?php

namespace App\Filament\Resources\Parrots\Schemas;

use App\Models\Parrot;
use Filament\Infolists\Components\IconEntry;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Schema;

class ParrotInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextEntry::make('species.name')
                    ->label('Species'),
                TextEntry::make('name'),
                TextEntry::make('age')
                    ->numeric()
                    ->placeholder('-'),
                TextEntry::make('gender')
                    ->badge(),
                TextEntry::make('description')
                    ->columnSpanFull(),
                TextEntry::make('personality')
                    ->placeholder('-')
                    ->columnSpanFull(),
                TextEntry::make('health_status')
                    ->placeholder('-')
                    ->columnSpanFull(),
                IconEntry::make('is_special_needs')
                    ->boolean(),
                TextEntry::make('special_needs_description')
                    ->placeholder('-')
                    ->columnSpanFull(),
                TextEntry::make('status')
                    ->badge(),
                TextEntry::make('adoption_fee')
                    ->numeric(),
                TextEntry::make('images')
                    ->placeholder('-')
                    ->columnSpanFull(),
                TextEntry::make('location')
                    ->placeholder('-'),
                TextEntry::make('intake_date')
                    ->date()
                    ->placeholder('-'),
                IconEntry::make('good_with_children')
                    ->boolean()
                    ->placeholder('-'),
                IconEntry::make('good_with_other_birds')
                    ->boolean()
                    ->placeholder('-'),
                TextEntry::make('diet_requirements')
                    ->placeholder('-')
                    ->columnSpanFull(),
                TextEntry::make('views')
                    ->numeric(),
                IconEntry::make('is_featured')
                    ->boolean(),
                TextEntry::make('created_at')
                    ->dateTime()
                    ->placeholder('-'),
                TextEntry::make('updated_at')
                    ->dateTime()
                    ->placeholder('-'),
                TextEntry::make('deleted_at')
                    ->dateTime()
                    ->visible(fn (Parrot $record): bool => $record->trashed()),
            ]);
    }
}
