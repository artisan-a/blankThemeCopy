<div class="btn-group">
    {!! getResourceEditLink("crud",route("crud.edit", $row->id), route("crud.update", $row->id)) !!}
    
    {!! getResourceDeleteLink("crud",Lang::get("crud.delete_title"), Lang::get("crud.delete_description") ,route("crud.destroy", $row->id)) !!}
</div>