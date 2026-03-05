<?php

namespace App\Filament\Resources\Orders\Pages;

use App\Filament\Resources\Orders\OrderResource;
use Filament\Resources\Pages\ViewRecord;
use Filament\Infolists\Components\RepeatableEntry;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Schema;

class ViewOrder extends ViewRecord
{
    protected static string $resource = OrderResource::class;

    public function infolist(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextEntry::make('order_number'),
                TextEntry::make('status')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'pending' => 'warning',
                        'confirmed' => 'info',
                        'shipped' => 'primary',
                        'delivered' => 'success',
                        'cancelled' => 'danger',
                        default => 'gray',
                    }),
                TextEntry::make('customer_name'),
                TextEntry::make('customer_email'),
                TextEntry::make('customer_phone'),
                TextEntry::make('address'),
                TextEntry::make('city'),
                TextEntry::make('notes')
                    ->placeholder('—')
                    ->columnSpanFull(),
                TextEntry::make('subtotal')
                    ->money(),
                TextEntry::make('shipping')
                    ->money(),
                TextEntry::make('total')
                    ->money(),
                TextEntry::make('created_at')
                    ->label('Ordered At')
                    ->dateTime(),
                RepeatableEntry::make('items')
                    ->columnSpanFull()
                    ->schema([
                        TextEntry::make('product_name')
                            ->label('Product'),
                        TextEntry::make('quantity'),
                        TextEntry::make('price')
                            ->money(),
                        TextEntry::make('line_total')
                            ->label('Total')
                            ->money(),
                    ])
                    ->columns(4),
            ]);
    }
}
