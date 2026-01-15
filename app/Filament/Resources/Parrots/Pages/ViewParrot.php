<?php

namespace App\Filament\Resources\Parrots\Pages;

use App\Filament\Resources\Parrots\ParrotResource;
use Filament\Actions\EditAction;
use Filament\Resources\Pages\ViewRecord;

class ViewParrot extends ViewRecord
{
    protected static string $resource = ParrotResource::class;

    protected function getHeaderActions(): array
    {
        return [
            EditAction::make(),
        ];
    }
}
