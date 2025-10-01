<?php

namespace Database\Seeders;

use App\Models\Image;
use App\Models\Product;

use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{

    public function run()
    {
        $product = [
            // Lácteos
            ['name' => 'Leche Entera', 'description' => 'Leche fresca y nutritiva de alta calidad.', 'price' => 1500, 'stock' => 100, 'category_id' => 1],
            ['name' => 'Yogur Natural', 'description' => 'Yogur cremoso y saludable, perfecto para el desayuno.', 'price' => 1200, 'stock' => 80, 'category_id' => 1],
            ['name' => 'Queso Cheddar', 'description' => 'Queso cheddar maduro con un sabor intenso.', 'price' => 2500, 'stock' => 50, 'category_id' => 1],

            // Carnes
            ['name' => 'Carne de Res', 'description' => 'Carne de res fresca y tierna, ideal para asados.', 'price' => 8000, 'stock' => 40, 'category_id' => 2],
            ['name' => 'Pechuga de Pollo', 'description' => 'Pechuga de pollo magra y versátil para diversas recetas.', 'price' => 6000, 'stock' => 70, 'category_id' => 2],
            // Ropa y Calzado
            ['name' => 'Camisa Polo', 'description' => 'Camisa tipo polo de alta calidad', 'price' => 25, 'stock' => 100, 'category_id' => 8],
            ['name' => 'Pantalones Jeans', 'description' => 'Pantalones jeans ajustados y modernos', 'price' => 40, 'stock' => 150, 'category_id' => 8],
            ['name' => 'Zapatillas Deportivas', 'description' => 'Zapatillas cómodas para actividades deportivas', 'price' => 60, 'stock' => 200, 'category_id' => 8],
            ['name' => 'Chaqueta de Cuero', 'description' => 'Chaqueta de cuero elegante y resistente', 'price' => 120, 'stock' => 50, 'category_id' => 8],
            ['name' => 'Vestido de Verano', 'description' => 'Vestido ligero y fresco para el verano', 'price' => 35, 'stock' => 80, 'category_id' => 8],
            // Accesorios
            ['name' => 'Reloj de Pulsera', 'description' => 'Reloj de pulsera con diseño clásico', 'price' => 150, 'stock' => 30, 'category_id' => 7],
            ['name' => 'Bolso de Mano', 'description' => 'Bolso de mano espacioso y estilizado', 'price' => 70, 'stock' => 60, 'category_id' => 7],
            ['name' => 'Gafas de Sol', 'description' => 'Gafas de sol con protección UV', 'price' => 45, 'stock' => 90, 'category_id' => 7],
        ];
        foreach ($product as $product) {
            Product::create($product);
        }
        $createdProducts = Product::all();
        // $images = [
        //     '/images/uploads/1757514049_team-0.jpg',
        //     '/images/uploads/1757597419_Austin.jpg',
        //     '/images/uploads/1757598403_boom.jpg',
        //     '/images/uploads/1757598817_scenes.png',
        //     '/images/uploads/1757599019_op.jpg',
        //     '/images/uploads/1757600444_op (1).png',
        //     '/images/uploads/1757600616_BOOM.png',
        //     '/images/uploads/1757600672_2background-new.png',
        //     '/images/uploads/1757600745_new-1.jpg',
        //     '/images/uploads/1757600815_team.png',
        //     '/images/uploads/1757600891_40.JUAN.jpg',
        //     '/images/uploads/1757600973_bomm.png',
        // ];

        // foreach ($createdProducts as $index => $Product) {
        //     if (isset($images[$index])) {
        //         $Product->image()->create([
        //             'url' => $images[$index],
        //         ]);
        //     }
        // }
        // $Products = Product::factory(8)->create();
        // foreach($Products as $Product){
        //     Image::factory(1)->create([
        //         'imageable_id' => $Product->id,
        //         'imageable_type' => Product::class]);
        //     $Product->tags()->attach([
        //         rand(1,4),//1 etiqueta al azar
        //         rand(5,8) //2 etiqueta al azar
        //     ]);

        // }
    }
}
