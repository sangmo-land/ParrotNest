<?php

namespace App\Filament\Resources\Orders\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class OrderForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('order_number')
                    ->disabled(),
                TextInput::make('customer_name')
                    ->disabled(),
                TextInput::make('customer_email')
                    ->disabled(),
                TextInput::make('customer_phone')
                    ->disabled(),
                TextInput::make('address')
                    ->disabled(),
                TextInput::make('city')
                    ->disabled(),
                Textarea::make('notes')
                    ->disabled()
                    ->columnSpanFull(),
                TextInput::make('subtotal')
                    ->disabled()
                    ->prefix('$'),
                TextInput::make('shipping')
                    ->disabled()
                    ->prefix('$'),
                TextInput::make('total')
                    ->disabled()
                    ->prefix('$'),
                Select::make('status')
                    ->options([
                        'pending' => 'Pending',
                        'confirmed' => 'Confirmed',
                        'shipped' => 'Shipped',
                        'delivered' => 'Delivered',
                        'cancelled' => 'Cancelled',
                    ])
                    ->required(),
            ]);
    }
}
