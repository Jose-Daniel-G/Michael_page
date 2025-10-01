<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();
        $categories = Category::all();
        return response()->json(['success' => true, 'products' => $products, 'categories' => $categories], 200);
    }

    public function create() {}

    public function store(Request $request)
    {
        $validate = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|integer|min:0',
            'stock' => 'required|integer|min:0',
            'category_id' => 'nullable|exists:categories,id',
        ]);
        try {
            $product = Product::create($validate);

            return response()->json(['success' => true, 'message' => 'Producto creado correctamente', 'product' => $product], 201);
        } catch (\Throwable $th) {
            return response()->json(['success' => false, 'message' => 'Error al crear el producto', 'error'   => $th->getMessage()], 500);
        }
    }

    public function show(Product $product)
    {
        //
    }

    public function edit(Product $product)
    {
        // $product = Product::find($product->id);
        // return response()->json(['success' => true, 'product' => $product], 200);
    }

    public function update(Request $request, Product $product)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|integer|min:0',
            'stock' => 'required|integer|min:0',
            'category_id' => 'nullable|exists:categories,id',
        ]);

        try {
            $product->update([
                'name' => $request->name,
                'description' => $request->description,
                'price' => $request->price,
                'stock' => $request->stock,
                'category_id' => $request->category_id,
            ]);

            return response()->json(['success' => true, 'message' => 'Producto actualizado correctamente', 'product' => $product], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'success' => false,
                'message' => 'Error al actualizar el producto',
                'error'   => $th->getMessage()
            ], 500);
        }
    }

    public function destroy(Product $product)
    {
        try {


            $product->delete(); 

            return response()->json(['success' => true,'message' => 'Producto eliminado correctamente'
            ], 200);
        } catch (\Exception $e) {
            return response()->json(['success' => false,'message' => 'Error al eliminar el producto','error'   => $e->getMessage()
            ], 500);
        }
    }
}
