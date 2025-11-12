<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('collections', function (Blueprint $table) {
            // Add ID column if it doesn’t exist
            if (!Schema::hasColumn('collections', 'id')) {
                $table->id()->first();
            }
        });
    }


    public function down(): void
    {
        Schema::table('collections', function (Blueprint $table) {
            if (Schema::hasColumn('collections', 'id')) {
                $table->dropColumn('id');
            }
        });
    }
};
