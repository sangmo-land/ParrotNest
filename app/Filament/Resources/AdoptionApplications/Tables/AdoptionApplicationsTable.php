<?php

namespace App\Filament\Resources\AdoptionApplications\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ForceDeleteBulkAction;
use Filament\Actions\RestoreBulkAction;
use Filament\Actions\ViewAction;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\TrashedFilter;
use Filament\Tables\Table;

class AdoptionApplicationsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('parrot.name')
                    ->searchable(),
                TextColumn::make('user.name')
                    ->searchable(),
                TextColumn::make('applicant_name')
                    ->searchable(),
                TextColumn::make('email')
                    ->label('Email address')
                    ->searchable(),
                TextColumn::make('phone')
                    ->searchable(),
                TextColumn::make('city')
                    ->searchable(),
                TextColumn::make('state')
                    ->searchable(),
                TextColumn::make('zip_code')
                    ->searchable(),
                TextColumn::make('housing_type')
                    ->badge(),
                IconColumn::make('owns_home')
                    ->boolean(),
                IconColumn::make('has_outdoor_space')
                    ->boolean(),
                TextColumn::make('household_members')
                    ->numeric()
                    ->sortable(),
                IconColumn::make('has_children')
                    ->boolean(),
                TextColumn::make('children_ages')
                    ->searchable(),
                IconColumn::make('has_other_pets')
                    ->boolean(),
                IconColumn::make('has_bird_experience')
                    ->boolean(),
                TextColumn::make('income_range')
                    ->numeric()
                    ->sortable(),
                IconColumn::make('can_afford_care')
                    ->boolean(),
                TextColumn::make('veterinarian_name')
                    ->searchable(),
                TextColumn::make('veterinarian_phone')
                    ->searchable(),
                TextColumn::make('status')
                    ->badge(),
                TextColumn::make('reviewed_at')
                    ->dateTime()
                    ->sortable(),
                TextColumn::make('reviewed_by')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('deleted_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                TrashedFilter::make(),
            ])
            ->recordActions([
                ViewAction::make(),
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                    ForceDeleteBulkAction::make(),
                    RestoreBulkAction::make(),
                ]),
            ]);
    }
}
