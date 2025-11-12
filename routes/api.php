<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CollectionController;
use App\Http\Controllers\ContactController;


Route::get('/collections', [CollectionController::class, 'index']);
Route::get('/collections/{id}', [CollectionController::class, 'show']);
Route::post('/collections', [CollectionController::class, 'store']);
Route::post('/contact', [ContactController::class, 'send']);

