<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Collection;
use Illuminate\Support\Facades\Storage;

class CollectionController extends Controller
{
    /**
     * Display a paginated list of collections
     */
    public function index()
    {
        $collections = Collection::latest()->paginate(8);

        $collections->getCollection()->transform(function ($item) {
            foreach (['image1', 'image2', 'image3'] as $f) {
                $item->$f = $item->$f
                    ? asset(Storage::url($item->$f))
                    : null;
            }
            return $item;
        });

        return response()->json([
            'data' => $collections->items(),
            'current_page' => $collections->currentPage(),
            'last_page' => $collections->lastPage(),
            'total' => $collections->total(),
        ]);
    }



    /**
     * Display a single collection
     */
    public function show($slug)
    {
        $collection = Collection::where('slug', $slug)->firstOrFail();

        foreach (['image1', 'image2', 'image3'] as $field) {
            if ($collection->$field) {
                // Storage::url returns "/storage/collections/xxx.jpg"
                // asset(...) converts that to "http://your-host/storage/collections/xxx.jpg"
                $collection->$field = asset(Storage::url($collection->$field));
            } else {
                $collection->$field = null;
            }
        }

        return response()->json($collection);
    }


    /**
     * Store a new collection with optional images
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image1' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'image2' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'image3' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
        ]);

        $paths = [];

        foreach (['image1', 'image2', 'image3'] as $field) {
            if ($request->hasFile($field)) {
                $paths[$field] = $request->file($field)->store('collections', 'public');
            } else {
                $paths[$field] = null;
            }
        }

        $collection = Collection::create([
            'name' => $validated['name'],
            'description' => $validated['description'] ?? null,
            'image1' => $paths['image1'],
            'image2' => $paths['image2'],
            'image3' => $paths['image3'],
        ]);

        return response()->json([
            'message' => 'Collection added successfully!',
            'collection' => $collection,
        ], 201);
    }

    public function destroy($id)
    {
        $collection = Collection::findOrFail($id);

        foreach (['image1', 'image2', 'image3'] as $field) {
            if ($collection->$field) {
                Storage::disk('public')->delete($collection->$field);
            }
        }

        $collection->delete();

        return response()->json([
            'message' => 'Collection deleted successfully'
        ]);
    }
}
