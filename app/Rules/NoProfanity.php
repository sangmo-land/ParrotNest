<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class NoProfanity implements ValidationRule
{
    /**
     * List of prohibited words.
     *
     * @var array
     */
    protected $profanities = [
        'fuck',
        'shit',
        'bitch',
        'bastard',
        'asshole',
        'dick',
        'pussy',
        'cunt',
        'whore',
        'fag',
        'faggot',
        'nigger',
        'nigga',
        'spic',
        'kike',
        'chink',
        'slut',
        'twat',
        'cock',
        'porn',
        'xxx',
        'retard',
        'idiot', // included for testing ease
        'penis',
        'vagina',
        'clitoris',
        'testicles',
        'scrotum',
        'vulva',
        'anus',
        'rectum',
        'breast',
        'boobs',
        'tits',
    ];

    /**
     * Run the validation rule.
     *
     * @param  \Closure(string, ?string=): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        // Normalize the input (lowercase)
        $text = strtolower($value);

        foreach ($this->profanities as $word) {
            // Check for the word with word boundaries to avoid partial matches
            // (e.g., prevent flagging "associates" because of "ass")
            if (preg_match('/\b' . preg_quote($word, '/') . '\b/i', $text)) {
                $fail('Your comment contains inappropriate language (' . $word . '). Please be respectful.');
                return;
            }
        }
    }
}
