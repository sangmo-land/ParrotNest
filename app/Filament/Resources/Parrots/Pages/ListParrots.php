<?php

namespace App\Filament\Resources\Parrots\Pages;

use App\Filament\Resources\Parrots\ParrotResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListParrots extends ListRecords
{
    protected static string $resource = ParrotResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
