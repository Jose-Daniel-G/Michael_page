<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
        public function run()
    {

        // ----------------------------------------------------------------------------------------------
        // Crear roles y asignar permisos
        $superAdmin = Role::create(['name' => 'superAdmin']);
        $admin = Role::create(['name' => 'admin']);
        $secretaria = Role::create(['name' => 'secretaria']);
        $profesor = Role::create(['name' => 'profesor']);
        $cliente = Role::create(['name' => 'cliente']);
        // ----------------------------------------------------------------------------------------------
        $espectador = Role::create(['name' => 'espectador']);
        //------------------------[ ALEJANDRO PROJECT  ]---------------------------------
        // Permission::create(['name'=>'admin.home'])->assignRole($admin);
        Permission::create(['name' => 'admin.home'])->syncRoles([$superAdmin, $admin, $secretaria, $profesor, $cliente]);
        Permission::create(['name' => 'admin.index']);

        //rutas - configuraciones
        Permission::create(['name' => 'admin.config.index'])->syncRoles([$superAdmin]);
        Permission::create(['name' => 'admin.config.create'])->syncRoles([$superAdmin]);
        Permission::create(['name' => 'admin.config.store'])->syncRoles([$superAdmin]);
        Permission::create(['name' => 'admin.config.show'])->syncRoles([$superAdmin]);
        Permission::create(['name' => 'admin.config.edit'])->syncRoles([$superAdmin]);
        Permission::create(['name' => 'admin.config.destroy'])->syncRoles([$superAdmin]);

        //----------------------------------------------------------------------------------------
        //PERMISSIONS ROUTES
        Permission::create(['name' => 'permissions.index'])->syncRoles([$superAdmin]);
        Permission::create(['name' => 'permissions.create'])->syncRoles([$superAdmin]);
        Permission::create(['name' => 'permissions.edit'])->syncRoles([$superAdmin]);
        Permission::create(['name' => 'permissions.delete'])->syncRoles([$superAdmin]);
        //ROLES ROUTES
        Permission::create(['name' => 'roles.index'])->syncRoles([$superAdmin]);
        Permission::create(['name' => 'roles.create'])->syncRoles([$superAdmin]);
        Permission::create(['name' => 'roles.edit'])->syncRoles([$superAdmin]);
        Permission::create(['name' => 'roles.destroy'])->syncRoles([$superAdmin]);

    } 
}
