<?php

namespace App\Http\Controllers;

use App\Models\Faq;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ChatBotController extends Controller
{
    public function handle(Request $request)
    {
        $message = trim($request->input('message'));
        
        if (empty($message)) {
            return response()->json(['response' => "Squawk! I didn't catch that. Say again?"]);
        }

        // Fetch all active FAQs to perform better matching in memory (dataset is expected to be small)
        $faqs = Faq::where('is_published', true)->get();
        
        $bestMatch = null;
        $highestScore = 0;
        
        // Normalize user message
        $userMsgLower = strtolower($message);
        // Extract significant words (longer than 2 chars)
        $userWords = array_filter(explode(' ', preg_replace('/[^a-z0-9 ]/', '', $userMsgLower)), fn($w) => strlen($w) > 2);

        foreach ($faqs as $faq) {
            $score = 0;
            $questionLower = strtolower($faq->question);
            
            // Exact match (ignoring case)
            if ($questionLower === $userMsgLower) {
                $score += 100;
            }
            
            // Contains phrase
            if (str_contains($questionLower, $userMsgLower)) {
                $score += 50;
            }
            if (str_contains($userMsgLower, $questionLower)) {
                 $score += 50; 
            }

            // Keyword overlap
            foreach ($userWords as $word) {
                if (str_contains($questionLower, $word)) {
                    $score += 10;
                }
            }

            if ($score > $highestScore) {
                $highestScore = $score;
                $bestMatch = $faq;
            }
        }

        // Threshold logic. 
        // Single keyword match = 10 points. 
        // So we need at least 1 keyword match.
        if ($bestMatch && $highestScore >= 10 && $bestMatch->answer) {
             return response()->json(['response' => $bestMatch->answer]);
        }

        // No match found. Save to DB for admin review.
        // Check if we already have a similar unanswered question to avoid duplicates
        $existing = Faq::where('question', $message)->first();
        
        if (!$existing) {
            Faq::create([
                'question' => $message,
                'is_published' => false,
            ]);
        }

        return response()->json([
            'response' => "Squawk! That's a new one for me. I've noted it down for my human friends to answer perfectly. Can I help with something else like Adoption or Care?"
        ]);
    }
}