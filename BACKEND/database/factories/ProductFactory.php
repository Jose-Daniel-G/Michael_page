<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ProductFactory extends Factory
{

    public function definition(): array
    {
        $name = $this->faker->unique()->sentence();
        return [
            'name' => $name,
            // 'slug' => Str::slug($name),
            'description' => $this->faker->paragraph(),
            'price' => $this->faker->randomFloat(2, 5, 500), // Precio entre 5 y 500
            'stock' => $this->faker->numberBetween(0, 100), // Stock entre 0 y 100
            'category_id' => Category::inRandomOrder()->first()->id,
            // 'user_id' => User::inRandomOrder()->first()->id,
        ];
    }
}
