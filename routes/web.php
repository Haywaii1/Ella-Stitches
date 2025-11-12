<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CollectionController;

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');




