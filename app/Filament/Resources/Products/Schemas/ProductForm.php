<?php

namespace App\Filament\Resources\Products\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;
use Filament\Schemas\Components\Utilities\Set;
use Illuminate\Support\Str;
use App\Models\Product;

class ProductForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->required()
                    ->live(onBlur: true)
                    ->afterStateUpdated(fn (Set $set, ?string $state) => $set('slug', Str::slug($state))),
                TextInput::make('slug')
                    ->required()
                    ->unique(Product::class, 'slug', ignoreRecord: true),
                Textarea::make('description')
                    ->default(null)
                    ->columnSpanFull(),
                TextInput::make('price')
                    ->required()
                    ->numeric()
                    ->prefix('$'),
FileUpload::make('images')
                    ->image()
->multiple()
                    ->reorderable()
                    ->disk('public')
                    ->directory('products'),
                Select::make('category')
                    ->options([
                        'accessories' => 'Accessories',
                        'cages' => 'Cages',
                        'perches' => 'Perches',
                        'pallets' => 'Pallets',
                        'toys' => 'Toys',
                        'food' => 'Food',
                    ])
                    ->required()
                    ->default('accessories'),
                TextInput::make('stock')
                    ->required()
                    ->numeric()
                    ->default(0),
                Toggle::make('is_active')
                    ->required(),
Toggle::make('free_delivery')
->label('Free Delivery')
->helperText('Show "Free Delivery" tag on the shop page')
->default(false),
Toggle::make('is_best')
->label('Best Seller')
->helperText('Show "Best" tag on the shop page')
->default(false),
Toggle::make('is_popular')
->label('Popular')
->helperText('Show "Popular" tag on the shop page')
->default(false),
Toggle::make('free_next_day_delivery')
->label('Free Next Day Delivery')
->helperText('Show "Free Next Day Delivery" text on the card')
->default(false),
            ]);
    }
}
