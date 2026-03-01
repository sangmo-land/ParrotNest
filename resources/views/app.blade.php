<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="theme-color" content="#059669">
        <meta name="author" content="ParrotNest">
        <meta name="application-name" content="ParrotNest">

        {{-- Google Search Console Verification --}}
        {{-- Replace YOUR_VERIFICATION_CODE with the code from Google Search Console --}}
        {{-- <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" /> --}}

        <title inertia>{{ config('app.name', 'ParrotNest') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
<link href="https://fonts.bunny.net/css?family=montserrat:300,400,500,600,700,800&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
