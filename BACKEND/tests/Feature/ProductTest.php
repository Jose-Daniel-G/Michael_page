<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ProductTest extends TestCase
{
    use RefreshDatabase;

    public function test_editar_un_producto()
    { 
        $category = Category::factory()->create();
 
        $product = Product::factory()->create([
            'name'        => 'Leche Descremada',
            'price'       => 2000,
            'stock'       => 20,
            'description' => 'Leche baja en grasa',
            'category_id' => $category->id,
        ]);

        // Datos de actualización
        $updateData = [
            'name'        => 'Leche Entera',
            'price'       => 2500,
            'stock'       => 30,
            'description' => 'Leche completa y natural',
            'category_id' => $category->id,
        ]; 
        $response = $this->putJson("/api/products/{$product->id}", $updateData);
 
        $response->assertStatus(200)
                 ->assertJson([
                     'success' => true,
                     'message' => 'Producto actualizado correctamente',
                 ]);

 
        $this->assertDatabaseHas('products', [
            'id'          => $product->id,
            'name'        => 'Leche Entera',
            'price'       => 2500,
            'stock'       => 30,
            'description' => 'Leche completa y natural',
        ]);
    }
}
