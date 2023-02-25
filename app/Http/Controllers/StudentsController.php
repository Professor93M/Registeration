<?php

namespace App\Http\Controllers;

use App\Models\Students;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class StudentsController extends Controller
{
    public function home(){
        return Inertia::render('Dashboard');
    }

    public function stages(){
        return Inertia::render('Stages');
    }

    public function stage2(){
        return Inertia::render('Stage2');
    }
}
