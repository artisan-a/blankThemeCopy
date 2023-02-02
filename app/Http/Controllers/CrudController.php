<?php

namespace App\Http\Controllers;

use App\Models\Crud;
use Illuminate\Http\Request;
use App\Http\Datatables\DTCrud;
use Symfony\Component\HttpFoundation\Response;

class CrudController extends Controller
{
    protected $mod = "crud";

    public function index(){
        if (request()->ajax()) {
            return DTCrud::dt(request(), $this->mod);
        }
        clearChecked($this->mod);
        $data = [];
        return view('crud.index', $data);
    }

    public function store(Request $request)
    {
        $crud = new Crud();
        $this->saveData($crud, $request);
        return response()->json([
            "success" => true,
            "msg"     => \Lang::get("crud.added")
        ]);
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        $qry = Crud::query();
        $data = $qry->find($id);
        return response()->json($data);
    }

    public function update(Request $request, Crud $crud)
    {
        $this->saveData($crud, $request);
        return response()->json([
            "success" => true,
            "msg"     => \Lang::get("crud.updated")
        ]);
    }

    public function destroy($id){
        if (Crud::destroy($id)) {
           return response()->json(["status"=> true, "msg"=> \Lang::get("crud.deleted")]);
        }else{
           return response()->json(["status"=> false, "msg"=> \Lang::get("common.pls_try_again")]);
        }
    }

    public function saveData($crud, $request){
        $crud->name = $request->name;
        $crud->save();
    }
}
