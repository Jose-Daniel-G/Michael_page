<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Category;
use App\Models\Product;
use App\Models\Tag;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class DatabaseSeeder extends Seeder
{ 
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();
        $this->call([
            RoleSeeder::class,
            AdminSeeder::class, 
            CategorySeeder::class,
            ProductSeeder::class
        ]);
    }
}
