<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ClienteController;
use App\Http\Controllers\CursoController;
use App\Http\Controllers\News\PostController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfesorController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\SecretariaController;
use PgSql\Lob;

// Rutas públicas
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

// Ruta protegida individual para obtener usuario autenticado
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    $user = $request->user();
    return response()->json([
        'id' => $user->id, // Añadido para consistencia con AuthUser
        'name' => $user->name,
        'email' => $user->email,
        'profile_photo_url' => $request->user()->profile_photo_url,
        'roles' => $request->user()->getRoleNames(),
        'roles' => $user->getRoleNames(), // Nombres de los roles asignados
        'permissions' => $user->getAllPermissions()->pluck('name')->toArray(),
    ]);
});

//RUTAS PRODUCTS 
// Route::apiResource('/products', ProductController::class)->names('admin.products');
Route::middleware('auth:sanctum')->prefix('products')->group(function () {
    Route::get('/', [ProductController::class, 'index']);   // Listar productos
    Route::post('/', [ProductController::class, 'store']);  // Crear producto
    Route::put('/{product}', [ProductController::class, 'update']); // Actualizar producto
    Route::delete('/{product}', [ProductController::class, 'destroy']); // Eliminar producto
});