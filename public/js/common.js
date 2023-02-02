/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/scripts/common.js":
/*!****************************************!*\
  !*** ./resources/js/scripts/common.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(function () {
  $.ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  });
  $(".select2").select2();
  toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": true,
    "progressBar": false,
    "positionClass": "toast-bottom-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  };
  $(document).on('click', '.del_notification', function () {
    var _id = $(this).data('key');

    Swal.fire({
      title: 'Remove notification',
      text: "Are you sure to confirm remove notification",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn btn-danger ml-1',
      buttonsStyling: false
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          url: '{{ route("notification.delete") }}',
          type: "POST",
          dataType: "json",
          data: {
            key: _id
          },
          success: function success(data) {}
        });
      }
    });
  });
  $(document).on('click', '.read-more', function () {
    var d = $(this).data('content');
    var wrapper = document.createElement('div');
    wrapper.innerHTML = '<div style="overflow-wrap:break-word;text-align:justify">' + d + '</div>';
    swal({
      title: "Remark",
      content: wrapper,
      buttons: false
    });
  });
  $(".month-picker").datepicker({
    changeMonth: true,
    changeYear: true,
    showButtonPanel: true,
    dateFormat: 'mm-yy',
    onClose: function onClose(dateText, inst) {
      function isDonePressed() {
        return $('#ui-datepicker-div').html().indexOf('ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all ui-state-hover') > -1;
      }

      if (isDonePressed()) {
        var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
        var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
        $(this).datepicker('setDate', new Date(year, month, 1)).trigger('change');
        $('.date-picker').focusout(); //Added to remove focus from datepicker input box on selecting date
      }
    },
    beforeShow: function beforeShow(input, inst) {
      inst.dpDiv.addClass('month_year_datepicker');

      if ((datestr = $(this).val()).length > 0) {
        year = datestr.substring(datestr.length - 4, datestr.length);
        month = datestr.substring(0, 2);
        $(this).datepicker('option', 'defaultDate', new Date(year, month - 1, 1));
        $(this).datepicker('setDate', new Date(year, month - 1, 1));
        $(".ui-datepicker-calendar").hide();
      }
    }
  });
  $(".date-picker").datepicker({
    todayHighlight: true,
    format: 'dd-mm-yyyy'
  });
  $('.date-range-picker').attr('autocomplete', 'off');
  $(".date-range-picker").daterangepicker({
    locale: {
      format: 'DD-MM-YYYY',
      cancelLabel: 'Clear'
    },
    showDropdowns: true,
    autoUpdateInput: false
  });
  $('.daterange').daterangepicker({
    locale: {
      format: 'DD-MM-YYYY'
    }
  });
  $('.date-range-picker').on('apply.daterangepicker', function (ev, picker) {
    $(this).val(picker.startDate.format('DD-MM-YYYY') + ' - ' + picker.endDate.format('DD-MM-YYYY')).trigger('change');
  });
  $('.date-range-picker').on('cancel.daterangepicker', function (ev, picker) {
    $(this).val('').trigger('change');
  });
  $(".date-time-picker").datetimepicker({
    format: 'DD-MM-YYYY hh:mm A'
  }); //Filter Collapse Button Start

  $('.panel-collapse').on('show.bs.collapse', function () {
    $("#" + $(this).data('btn-id')).addClass('active');
  });
  $('.panel-collapse').on('hide.bs.collapse', function () {
    $("#" + $(this).data('btn-id')).removeClass('active');
  }); //Filter Collapse Button End

  /*Common JS Start*/

  $(document).on('click', '.btn-add-new', function () {
    var resource_name = $(this).data('resource-name');
    var id = "#" + resource_name;
    $(id + "_form_add_title").show();
    $(id + "_form_edit_title").hide();
    $(id + "_form").attr('action', $(this).data('action'));
    $(id + "_method").val("POST");
    $(id + "_form_modal").modal('show');

    _reset_form(resource_name); //Trigger Callback


    eval(resource_name + "_btn_add_new()");
  });
  $(document).on('click', '.btn-edit', function () {
    var resource_name = $(this).data('resource-name');
    var id = "#" + resource_name;
    var url = $(this).data("edit-url");
    var updateUrl = $(this).data("update-url");
    $(id + "_form_add_title").hide();
    $(id + "_form_edit_title").show();
    $(id + "_form").attr('action', updateUrl);
    $(id + "_method").val("PUT");

    _reset_form(resource_name);

    $.ajax({
      url: url,
      type: "GET",
      datatype: "json",
      success: function success(data) {
        $(id + "_form").inputValues(data);
        $(id + "_form_modal").modal('show');
        eval(resource_name + "_btn_edit('" + JSON.stringify(data) + "')");
      },
      error: function error(xhr, status, e) {
        handleCommonError(xhr); //toastr.error("Unable to get data");
      }
    });
  });
  $(document).on('click', '.btn-submit', function (e) {
    e.preventDefault();
    var btn = $(this);
    var resource_name = $(this).data('resource-name');
    var id = "#" + resource_name;
    /*if(!$(id+"_form").validationEngine("validate"))
        return;*/

    $(".error_p").addClass("hidden");
    var l = Ladda.create(document.querySelector(id + "_form_submit_button"));
    if (l != undefined) l.start();
    var form = $(id + "_form");
    $.ajax({
      url: $(form).attr("action"),
      type: "POST",
      dataType: "json",
      processData: false,
      contentType: false,
      cache: false,
      data: new FormData(form[0]),
      success: function success(data) {
        if (l != undefined) l.stop();

        if (data.success === true || data.status === true) {
          _form_success_message(btn, data.msg);
        }

        eval(resource_name + "_request_done('" + JSON.stringify(data) + "')");
      },
      error: function error(xhr, status, e) {
        l.stop();

        if (xhr.responseJSON !== undefined && xhr.responseJSON.errors) {
          _show_form_errors(resource_name, xhr.responseJSON);
        } else {
          handleCommonError(xhr);
        }
      }
    });
  });
  var swalToast = swal.mixin({
    buttonsStyling: false,
    confirmButtonClass: 'btn btn-lg btn-alt-success m-5',
    cancelButtonClass: 'btn btn-lg btn-alt-danger m-5',
    inputClass: 'form-control'
  });
  $(document).on('click', '.btn-delete', function (e) {
    var resource_name = $(this).data('resource-name');
    var dt = $(this).data('delete-title');
    var ds = $(this).data('delete-description');
    var url = $(this).data("delete-url");
    var tbl = $("#" + resource_name + "_table_data");
    console.log(tbl);
    Swal.fire({
      title: dt,
      text: ds,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn btn-danger ml-1',
      buttonsStyling: false
    }).then(function (result) {
      if (result.value) {
        _make_delete_rescource_call(url, tbl);
      }
    });
  });
  $(document).on('click', '.btn-change-status', function (e) {
    var table_id = $(this).data('tid');
    var resource_name = $(this).data('rname');
    var values = $.parseJSON(decodeURIComponent($(this).data('values')));
    $("#common_status_table_id").val(table_id);
    $("#common_status_resource_name").val(resource_name);
    $("#common_status_select").html('<option value="">Select status</option>');
    $.each(values, function (index, item) {
      $("#common_status_select").append('<option value="' + index + '">' + item + '</option>');
    });
    $("#common_status_select").trigger('change');
    $("#common_change_status_modal").modal('show');
  });
  $(document).on('click', '.show-content', function (e) {
    var url = $(this).data('url');
    var title = $(this).data('heading');
    var btn = Ladda.create(this);
    btn.start();
    $.ajax({
      url: url,
      type: 'GET',
      success: function success(data) {
        btn.stop();

        if (data.status) {
          $("#common_show_content_title").html(title);
          $("#common_show_content_body").html(data.html);
          $("#common_show_content_modal").modal('show');
        } else {
          toastr.error(data.msg);
        }
      },
      error: function error(xhr, status, e) {
        btn.stop();
        handleCommonError(xhr);
      }
    });
  });

  function _make_delete_rescource_call(url, tbl) {
    $.ajax({
      url: url,
      type: "DELETE",
      dataType: "json",
      data: {
        method: "_DELETE",
        submit: true
      },
      success: function success(data) {
        if (data.status) {
          toastr.success(data.msg);
          $(tbl).DataTable().ajax.reload(null, false);
        } else {
          toastr.error('Unable to delete, please try again...');
        }
      },
      error: function error(xhr, status, e) {
        handleCommonError(xhr);
      }
    });
  }

  function _reset_form(resource_name) {
    $(".error_p").addClass("hidden");
    $("#" + resource_name + "_form").trigger("reset");
  }

  function _form_success_message(btn, msg) {
    var resource_name = $(btn).data('resource-name');
    $("#" + resource_name + "_form_modal").modal("hide");
    var tbl = $("#" + resource_name + "_table_data");
    if ($.fn.DataTable.isDataTable(tbl)) $(tbl).DataTable().ajax.reload(null, false);
    if ($(btn).data('reset') != 'no') _reset_form(resource_name);
    toastr.success(msg);
  }

  function _show_form_errors(resource_name, data) {
    $.each(data.errors, function (key, value) {
      $(".error_" + resource_name + "_" + key).removeClass("hidden").text(value);
    });
  } //Notes


  $(document).on('keypress', '.add-note', function (e) {
    var note = $(this).val();
    var noteInput = $(this);

    if (e.which === 13) {
      var id = $(this).data('notable_id');
      var nt = $(this).data('notable_type');
      var t = $(this).data('type');
      var url = $(this).data('url');
      var did = $(this).data('did');
      $.ajax({
        url: url,
        type: "POST",
        dataType: "json",
        data: {
          id: id,
          note: note,
          'notable_type': nt,
          'notable_id': id,
          'type': t
        },
        success: function success(data) {
          if (data.status) {
            $(noteInput).val('');
            toastr.success(data.msg);
            $("#" + did).html(data.html);
            $("#" + t + "_note_table").dataTable({
              'pageLength': 5,
              "bLengthChange": false,
              "bFilter": false,
              "bInfo": false,
              'order': [[0, 'desc']],
              'drawCallback': function drawCallback(set) {
                if (t == 0) {
                  $("#0_note_table_wrapper").children().eq(1).children().eq(0).removeClass('col-sm-12').addClass('w-100');
                }
              }
            });
          } else {
            toastr.error('Unable to add note, please try again...');
          }
        },
        error: function error(xhr, status, e) {
          handleCommonError(xhr);
        }
      });
    }
  }); //End Notes
  //Lead states

  $(document).on('click', '.lead_stage', function () {
    var id = $(this).data('id');
    var isCust = $(this).data('iscust');
    if (!$('#common_modal').is(':visible')) $("#common_modal").modal('show');
    $("#modal_title").html('Lead Stages');
    $("#modal_body").html('Please wait...');
    $.ajax({
      url: baseURL + '/leads/stages',
      type: 'POST',
      data: {
        'lead_id': id,
        json: 1,
        'isFromCustomer': isCust
      },
      success: function success(data) {
        if (data.status) {
          $("#modal_body").html(data.html);
        } else {
          toastr.error('Unable get data');
        }
      },
      error: function error(e) {
        $("#common_modal").modal('toggle');
        handleCommonError(e);
      }
    });
  });
  $(document).on('click', '.load-stage-request-details', function () {
    var id = $(this).data('sid');
    var isCust = $(this).data('iscust');
    $("#modal_title").html('Lead Stage Requests');
    $("#modal_body").html('Please wait...');
    $.ajax({
      url: baseURL + '/leads/stages/requests',
      type: 'GET',
      data: {
        'stage_id': id,
        json: 1,
        'isFromCustomer': isCust
      },
      success: function success(data) {
        if (data.status) {
          $("#modal_body").html(data.html);
        } else {
          toastr.error('Unable get data');
        }
      },
      error: function error(e) {
        $("#common_modal").modal('toggle');
        handleCommonError(e);
      }
    });
  }); //

  /*Common JS End*/
});

/***/ }),

/***/ 1:
/*!**********************************************!*\
  !*** multi ./resources/js/scripts/common.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Library/WebServer/Documents/latestTheme/resources/js/scripts/common.js */"./resources/js/scripts/common.js");


/***/ })

/******/ });