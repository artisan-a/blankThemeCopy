@extends('layouts.page')

@section('content')
  <!-- Header -->
<div class="header bg-primary pb-6">
  <div class="container-fluid">
    <div class="header-body">
      <div class="row align-items-center py-4">
        <div class="col-lg-6 col-7">
          <h6 class="h2 text-white d-inline-block mb-0">Crud</h6>
          <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
            <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
              <li class="breadcrumb-item"><a href="#"><i class="fas fa-home"></i></a></li>
              <!-- <li class="breadcrumb-item"><a href="#">Tables</a></li> -->
              <li class="breadcrumb-item active" aria-current="page">Crud</li>
            </ol>
          </nav>
        </div>
        <div class="col-lg-6 col-5 text-right">
          @include('crud.action_button')
          <!-- <a href="#" class="btn btn-sm btn-neutral">Filters</a> -->
        </div>
      </div>
    </div>
  </div>
</div>

    <!-- Content -->
  <div class="container-fluid mt--7">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <!-- Card header -->
          <div class="card-header border-0">
            <h3 class="card-title">Crud table</h3>
          </div>
          <!-- Light table -->
          <div class="card-content">
            <div class="card-body card-dashboard">
              <div class="table-responsive">
                <table class="table nowrap scroll-horizontal" id="crud_table_data">
                  <thead class="thead-light">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
@include("crud.form")
@endsection

@push('js')
  <script type="text/javascript">
      $(function() {
          let table;
          let tbl_conf = Object.assign({}, DT_TBL_GLOBAL_CONFIG);
          tbl_conf.ajax = {
            url : "{{route("crud.index")}}",
            method: "get",
            data:function(data){
            }
          };
          tbl_conf.columns = [
              { data: "name", name: "name" },
              { data: "action", name: "action", sortable: false, searchable: false }
          ];
          setTimeout( function(){
          table = $("#crud_table_data").DataTable(tbl_conf);
            table.on("draw", function () {
              let body = $( table.table().body() );
              _after_datatable_loaded(table);
            });
          }  , DT_TIMEOUT );
          $(".filter").change(function(){
            table.ajax.reload(null,false);
          });
      });
  </script>
@endpush