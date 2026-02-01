<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;


class Collection extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'image1',
        'image2',
        'image3',
    ];

    protected static function booted()
    {
        static::creating(function ($collection) {
            $collection->slug = Str::slug($collection->name);
        });
    }
}


