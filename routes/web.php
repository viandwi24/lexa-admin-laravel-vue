<?php

use Illuminate\Support\Facades\Route;

// vue router
Route::get('/{any}', function () { return view('layouts.vue'); })->where('any', '.*');