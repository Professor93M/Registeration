<?php

use App\Http\Controllers\StudentsController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [StudentsController::class, 'home'])->name('dashboard');

Route::get('stages', [StudentsController::class, 'stages'])->name('stages');
Route::get('stage2', [StudentsController::class, 'stage2'])->name('stage2');
Route::get('stage3', function () {
    return Inertia::render('Stage3');
})->name('stage3');

require __DIR__.'/auth.php';
