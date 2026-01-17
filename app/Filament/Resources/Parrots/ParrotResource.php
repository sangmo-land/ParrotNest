<?php

namespace App\Filament\Resources\Parrots;

use App\Filament\Resources\Parrots\Pages\CreateParrot;
use App\Filament\Resources\Parrots\Pages\EditParrot;
use App\Filament\Resources\Parrots\Pages\ListParrots;
use App\Filament\Resources\Parrots\Pages\ViewParrot;
use App\Filament\Resources\Parrots\Schemas\ParrotForm;
use App\Filament\Resources\Parrots\Schemas\ParrotInfolist;
use App\Filament\Resources\Parrots\Tables\ParrotsTable;
use App\Models\Parrot;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ParrotResource extends Resource
{
    protected static ?string $model = Parrot::class;

protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-heart';

    protected static ?string $recordTitleAttribute = '´╗┐name';

    public static function form(Schema $schema): Schema
    {
        return ParrotForm::configure($schema);
    }

    public static function infolist(Schema $schema): Schema
    {
        return ParrotInfolist::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return ParrotsTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListParrots::route('/'),
            'create' => CreateParrot::route('/create'),
            'view' => ViewParrot::route('/{record}'),
            'edit' => EditParrot::route('/{record}/edit'),
        ];
    }

    public static function getRecordRouteBindingEloquentQuery(): Builder
    {
        return parent::getRecordRouteBindingEloquentQuery()
            ->withoutGlobalScopes([
                SoftDeletingScope::class,
            ]);
    }
}
