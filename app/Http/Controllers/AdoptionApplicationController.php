<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Parrot;
use App\Models\AdoptionApplication;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class AdoptionApplicationController extends Controller
{
public function create(Parrot $parrot)
    {
        return Inertia::render('Applications/Create', [
            'parrot' => $parrot->load('species'),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'parrot_id' => 'required|exists:parrots,id',
            'applicant_name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'address' => 'required|string|max:255',
            'city' => 'required|string|max:100',
            'state' => 'required|string|max:100',
            'zip_code' => 'required|string|max:20',
            'country' => 'required|string|max:100',
            'experience' => 'required|string',
            'housing_type' => 'required|string|in:house,apartment,condo,other',
            'has_other_pets' => 'boolean',
            'other_pets_details' => 'nullable|string',
            'reason_for_adoption' => 'required|string',
        ]);

        $validated['user_id'] = auth()->id();
        $validated['status'] = 'pending';
        
        // Map frontend fields to database columns
        $validated['bird_experience_description'] = $validated['experience'];
        $validated['other_pets_description'] = $validated['other_pets_details'];
        $validated['why_adopt'] = $validated['reason_for_adoption'];
        
        unset($validated['experience'], $validated['other_pets_details'], $validated['reason_for_adoption']);

        AdoptionApplication::create($validated);

        return redirect()->route('parrots.index')
            ->with('message', 'Application submitted successfully! We will review it shortly.');
    }
}
