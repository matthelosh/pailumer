<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Atp extends Model
{
    use HasFactory;

    protected $fillable = [
        'guru_id',
        'kode',
        'elemen_id',
        'tingkat',
        'fase',
        'semester',
        'aw',
        'materi',
        'tps',
        'konten',
        'asesmen',
    ];

    private function elemen() {
        return $this->belongsTo(Elemen::class, 'elemen_id', 'kode');
    }
}