<!-- ADD MODAL -->
<div class="modal fade crudForm" role="dialog" id="crud_form_modal" aria-labelledby="custom-width-modalLabel" aria-hidden="true" style="display: none;">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
        <div class="modal-header">
                <h4 class="modal-title" class="form-title">Crud</h4>
                <button type="button" class="close" style="color: white" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
                <form role="form" id="crud_form"  enctype="multipart/form-data">
                    <input type="hidden" id="crud_primary_id" />
                    <input type="hidden" name="_method" value="POST" id="crud_method" />
                    <div class="row">
                    <!--Field Start Here-->
                        <div class="col-md-12">
                            <label for="crud_name" class="control-label">Crud Name: <span class="required">*</span></label>
                            <input class="form-control" type="text" placeholder="Name" name="name" id="crud_name" />
                            <p class="error_crud_name error_p text-danger hidden"></p>
                        </div>
                    <!--Field End Here-->
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-dark waves-effect" data-dismiss="modal">Close</button>
                <button type="button"
                        data-resource-name="crud"
                        class="btn btn-primary waves-effect waves-light btn-submit crud_form_submit_button"
                        id="crud_form_submit_button">
                        <i class="glyphicon glyphicon-save"></i>&nbsp;Save
                </button>
            </div>
    </div>
  </div>
</div>

@push("js")
<script type="text/javascript" charset="utf-8" async defer>
    function crud_request_done(d){
        if(d == undefined || d == null)
            return;
        let data = JSON.parse(d);
    }

    function crud_btn_add_new(){

    }

    function crud_btn_edit(d){
         if(d == undefined || d == null)
            return;
        let data = JSON.parse(d);
        setFormData(data);
    }

    function setFormData(data) {

    }
</script>
@endpush
