<?php

    function getResourceAddLink($resource_name, $add_url, $add_text, $id=null){
        return '<button type="button"
        class="btn btn-primary btn-add-new btn-block-optional"
        data-toggle="click-ripple"
        data-resource-name="'.$resource_name.'"
        '.((isset($id) ? "id='".$id."'" : "")).'
        data-action="'.$add_url.'" >
        <i class="fa fa-fw fa-plus"></i>'.$add_text.'
        </button>';
    }

    function getResourceMultiDeleteLink($resource_name, $table_id){
        $del = \Lang::get('common.delete');
        return '<div class="btn-group" role="group">
                <button type="button" class="btn btn-outline-danger dropdown-toggle"
                id="multi_delete_btn_grp" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false"><i class="fa fa-fw fa-trash"></i>'.$del.'</button>
                <div class="dropdown-menu" aria-labelledby="multi_delete_btn_grp" x-placement="bottom-start" style="position: absolute;
                will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 34px, 0px);">
                    <a class="dropdown-item multi_delete_all" data-mod="'.$resource_name.'" data-tid="'.$table_id.'" href="javascript:void(0)">
                        <i class="fa fa-fw fa-list"></i>All
                    </a>
                    <a class="dropdown-item multi_delete_selected" data-mod="'.$resource_name.'" data-tid="'.$table_id.'" href="javascript:void(0)">
                        <i class="fa fa-fw fa-check-square"></i>Selected
                    </a>
                </div>
            </div>';
    }

    function getResourceMultiStatusChangeLink($resource_name, $table_id, $values){
        $st = \Lang::get('common.change_status');
        return '<button type="button" class="btn btn-outline-secondary btn-change-status"
                data-rname="'.$resource_name.'"
                data-tid="'.$table_id.'" data-values=\''.urlencode(json_encode($values)).'\'
                aria-haspopup="true" ><i class="fa fa-fw fa-refresh mr-5"></i>'.$st.'</button>';
    }

    function getResourceMultiStatusChangeLinkOld($resource_name, $table_id){
        $st = \Lang::get('common.change_status');
        return '<div class="btn-group" role="group">
                <button type="button" class="btn btn-outline-secondary dropdown-toggle"
                id="multi_delete_btn_grp" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false"><i class="fa fa-fw fa-refresh mr-5"></i>'.$st.'</button>
                <div class="dropdown-menu" aria-labelledby="multi_delete_btn_grp" x-placement="bottom-start" style="position: absolute;
                will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 34px, 0px);">
                    <a href="javascript:void(0)">To Active For</a>
                    <a class="dropdown-item multi_status_all" data-status="1" data-mod="'.$resource_name.'" data-tid="'.$table_id.'" href="javascript:void(0)">
                        <i class="fa fa-fw fa-list mr-5"></i>All
                    </a>
                    <a class="dropdown-item multi_status_selected" data-status="1" data-mod="'.$resource_name.'" data-tid="'.$table_id.'" href="javascript:void(0)">
                        <i class="fa fa-fw fa-check-square mr-5"></i>Selected
                    </a>
                    <div class="dropdown-divider"></div>
                    <a href="javascript:void(0)">To In-Active For</a>
                    <a class="dropdown-item multi_status_all" data-status="0" data-mod="'.$resource_name.'" data-tid="'.$table_id.'" href="javascript:void(0)">
                        <i class="fa fa-fw fa-list mr-5"></i>All
                    </a>
                    <a class="dropdown-item multi_status_selected" data-status="0" data-mod="'.$resource_name.'" data-tid="'.$table_id.'" href="javascript:void(0)">
                        <i class="fa fa-fw fa-check-square mr-5"></i>Selected
                    </a>
                </div>
            </div>';
    }

    function getFilterDownLink($div_id = 'filter-div'){
        $f_t = \Lang::get('common.expand_filter');
        return '<span data-toggle="tooltip" title="'.$f_t.'">
            <span data-toggle="collapse"
                data-target="#'.$div_id.'"
                aria-expanded="false"
                aria-controls="collapseOne"
                >
                <button
                    type="button"
                    class="btn btn-outline-primary filter-btn"
                    id="'.$div_id.'-btn"
                    data-toggle="click-ripple"><i class="fa fa-angle-down"></i>
                </button>
            </span>
        </span>';
    }

    function getReportFilterDownLink($div_id = 'filter-div'){
        $f_t = \Lang::get('common.search_report');
        return '<span data-toggle="tooltip" title="'.$f_t.'">
            <span data-toggle="collapse"
                data-target="#'.$div_id.'"
                aria-expanded="false"
                aria-controls="collapseOne"
                >
                <button
                    type="button"
                    class="btn btn-outline-primary filter-btn"
                    id="'.$div_id.'-btn"
                    data-toggle="click-ripple"><i class="fa fa-angle-down"></i>
                </button>
            </span>
        </span>';
    }

    function getResourceShowLink($resource_name, $show_url){
        $e_t = \Lang::get('common.edit');
        return '<button
            type="button"
            class="btn btn-sm btn-outline-warning btn-show"
            data-toggle="click-ripple"
            data-tooltip="tooltip"
            title="'.$e_t.'"
            data-resource-name="'.$resource_name.'"
            data-show-url="'.$show_url.'"
            ><i class="fa fa-eye"></i>
        </button>';
    }

    function getResourceEditLink($resource_name, $edit_url, $update_url){
        $e_t = \Lang::get('common.edit');
        return '<button
            type="button"
            class="btn btn-sm btn-outline-secondary btn-edit"
            data-toggle="click-ripple"
            data-tooltip="tooltip"
            title="'.$e_t.'"
            data-resource-name="'.$resource_name.'"
            data-edit-url="'.$edit_url.'"
            data-update-url="'.$update_url.'"
            ><i class="ni ni-scissors text-warning"></i>
        </button>';
    }

    function getResourceDetailLink($resource_name, $edit_url, $update_url){
        $e_t = \Lang::get('common.edit');
        return '<button
            type="button"
            class="btn btn-sm btn-outline-warning btn-detail"
            data-toggle="click-ripple"
            data-tooltip="tooltip"
            title="'.$e_t.'"
            data-resource-name="'.$resource_name.'"
            data-edit-url="'.$edit_url.'"
            data-update-url="'.$update_url.'"
            ><i class="fa fa-eye"></i>
        </button>';
    }

    function getResourceDeleteLink($resource_name, $delete_title, $delete_description, $delete_url){
        $d_t = \Lang::get('common.delete');
        return '<button
            type="button"
            class="btn btn-sm btn-outline-danger btn-delete"
            data-toggle="click-ripple"
            data-tooltip="tooltip"
            title="'.$d_t.'"
            data-resource-name="'.$resource_name.'"
            data-delete-title="'.$delete_title.'"
            data-delete-description="'.$delete_description.'"
            data-delete-url="'.$delete_url.'"
            ><i class="fa fa-times"></i>
        </button>';
    }

    function getDTCheckbox($mod, $id){
        $arr = request()->session()->get('checked_'.$mod,[]);
        $all = request()->session()->get('checked_'.$mod.'_all','');
        $ch = '';
        if(isset($all) && strtolower(trim($all)) == "true"){
            $ch = 'checked';
        }else if(is_array($arr) && in_array($id, $arr)){
            $ch = 'checked';
        }
        return "<div class='checkbox checkbox-custom checkbox-single'>
                <input type='checkbox' ".$ch." class='multi_checkbox' data-mod='".$mod."' data-id='".$id."' /><label></label>
            </div>";
    }

    function validationErrorsToString($errArray) {
        $valArr = array();
        foreach ($errArray->toArray() as $key => $value) {
            $errStr = $value[0];
            array_push($valArr, $errStr);
        }
        $errStrFinal = '';
        if(!empty($valArr)){
            $errStrFinal = implode(',', $valArr);
        }
        return $errStrFinal;
    }

    function clearChecked($mod){
        request()->session()->forget('checked_'.$mod);
        request()->session()->forget('checked_'.$mod.'_all');
    }

    function getImportClass($mod='', $onlyClassName=false){
        $c_name = $mod;
        switch ($mod){
            case '': $c_name = ''; break;
        }
        if($onlyClassName)
            return ucfirst($c_name).'Import';
        return 'App\Imports\\'.ucfirst($c_name).'Import';
    }

    function getExportClass($mod='', $onlyClassName=false){
        $c_name = $mod;
        switch ($mod){
            case '': $c_name = ''; break;
        }
        if($onlyClassName)
            return ucfirst($c_name).'Import';
        return 'App\Exports\\'.ucfirst($c_name).'Export';
    }

    function getFileContent($path){
        try {
            return \Illuminate\Support\Facades\Storage::disk('s3')->get($path);
        }catch (\Exception $e){
            \Illuminate\Support\Facades\Log::error($e->getMessage());
        }
        return null;
        /*$path = storage_path('app/content/'.$name);
        if(file_exists($path)){
            try{
                return file_get_contents($path);
            }catch (\Exception $e){
                return null;
            }
        }
        return null;*/
    }

    function putFileContent($path, $content){
        try {
            return \Illuminate\Support\Facades\Storage::disk('s3')->put($path, $content);
        }catch (\Exception $e){
            \Illuminate\Support\Facades\Log::error($e->getMessage());
        }
        return false;
    }

    function deleteFile($path){
        try{
            return \Illuminate\Support\Facades\Storage::disk('s3')->delete($path);
        }catch (\Exception $e){
            \Illuminate\Support\Facades\Log::error($e->getMessage());
        }
        return false;
    }

    function getModalClass($mod, $onlyName=false){
        $c_name = $mod;
        switch ($mod){
            case ''      : $c_name = ''; break;
        }
        if($onlyName)
            return ucfirst($c_name);
        else
            return 'App\Models\\'.ucfirst($c_name);
    }

    function userBasicProfileSave($user, $request){
        $user->first_name = $request->first_name;
        $user->middle_name = $request->middle_name;
        $user->last_name = $request->last_name;
        $user->email = $request->email;
        if($user->hasRole('student') && $request->password != ''){
            $user->password = $request->password;
        }else {
            if (isset($request->password) && $request->password != '')
                $user->password = bcrypt($request->password);
        }
        $user->contact_number = $request->contact_number;
        $user->alternate_number = $request->alternate_number;
        if(isset($request->date_of_birth) && $request->date_of_birth != '')
            $user->date_of_birth = date("Y-m-d", strtotime($request->date_of_birth));
        $user->status = intval($request->status);
        $user->gender = intval($request->gender);
        $user->save();
    }

    function modelExists($mod=''){
        $className = getModalClass($mod);
        if(class_exists($className)){
            return true;
        }
        return false;
    }

    function getAllSchoolTerms(){
        return \App\Models\SchoolTerm::orderBy('start_date', 'DESC')->get();
    }

    function getLatestSchoolTerm(){
        return \App\Models\SchoolTerm::orderBy('start_date', 'DESC')->first();
    }

    function getCurrentSchoolTermId(){
        return \Session::get('current_school_term');
    }

    function getCurrentSchoolTerm(){
        $id = getCurrentSchoolTermId();
        return \App\Models\SchoolTerm::find($id);
    }

    function restrictData($query){
        $dp = new \App\Traits\DataPolice();
        return $dp->restrictUser($query);
    }

    function getTopicUrl($item){
        $sid = 0;
        if($item instanceof \App\Models\Subject){
            $sid = $item->id ?? 0;
        }else if($item instanceof \App\Models\Topic){
            $sid = $item->subject_id;
        }
        return route('topic.index').'?sid='.$sid;
    }

    function getSubTopicUrl($item){
        $tid = 0;
        if($item instanceof \App\Models\Topic){
            $tid = $item->id ?? 0;
        }else if($item instanceof \App\Models\SubTopic){
            $tid = $item->topic_id;
        }
        return route('subtopic.index').'?tid='.$tid;
    }

    function formatBytes($bytes, $precision = 2) {
        $units = array('B', 'KB', 'MB', 'GB', 'TB');

        $bytes = max($bytes, 0);
        $pow = floor(($bytes ? log($bytes) : 0) / log(1024));
        $pow = min($pow, count($units) - 1);

        // Uncomment one of the following alternatives
        // $bytes /= pow(1024, $pow);
        $bytes /= (1 << (10 * $pow));

        return round($bytes, $precision) . ' ' . $units[$pow];
    }

?>