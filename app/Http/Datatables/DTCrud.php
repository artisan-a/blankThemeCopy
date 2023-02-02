<?php
namespace App\Http\Datatables;

use App\Models\Crud as Model;
use Illuminate\Http\Request;
use Yajra\DataTables\DataTables;

class DTCrud{

    public static function dt(Request $request, $mod, $_other_data = []){
        $crud = Model::parseFilter($request);
        $crud->select(sprintf("%s.*", (new Model)->getTable()));
        $_other_data["mod"] = $mod;
        
        return Datatables::of($crud)
            ->addColumn("action",function($row) use($_other_data){
                $_other_data["row"] = $row;
                return view("crud.action", $_other_data)->render();
            })
            ->rawColumns(["action"])
            ->make(true);
    }
}
        