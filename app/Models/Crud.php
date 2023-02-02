<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Crud extends Model
{
    use HasFactory;

    protected $fillable = [
        'name'
    ];

    public static function parseFilter($request){
        $crud = Crud::query();
        return $crud;
    }
}
