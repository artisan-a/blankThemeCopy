<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'TechCrista Dashboard') }}</title>
        <!-- Favicon -->
        <link href="{{ asset('argon') }}/img/brand/favicon.png" rel="icon" type="image/png">
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">
        <!-- Extra details for Live View on GitHub Pages -->
        <!-- toastr -->
        <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css">
        <!-- Icons -->
        <link href="{{ asset('argon') }}/vendor/nucleo/css/nucleo.css" rel="stylesheet">
        <link href="{{ asset('argon') }}/vendor/@fortawesome/fontawesome-free/css/all.min.css" rel="stylesheet">
        <!-- swal -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.css">
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/10.12.5/sweetalert2.css">
        <!-- Argon CSS -->
        <link type="text/css" href="{{ asset('argon') }}/css/argon.css?v=1.0.0" rel="stylesheet">

        <!-- datapicker -->
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.min.css">
        <!-- Datatables CSS -->
        <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.23/css/dataTables.jqueryui.min.css">
    </head>
    <body class="{{ $class ?? '' }}">
        @auth()
            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                @csrf
            </form>
            @include('layouts.navbars.sidebar')
        @endauth

        <div class="main-content">
            @yield('content')
        </div>

        @guest()
            @include('layouts.footers.guest')
        @endguest

        @auth()
        <div class="container">
            <footer class="fixed-bottom">
                @include('layouts.footers.auth')
            </footer>
        </div>
        @endguest

        <script src="{{ asset('argon') }}/vendor/jquery/dist/jquery.min.js"></script>
        <script src="{{ asset('argon') }}/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>

        <script type="text/javascript">
            let baseURL = "{{ url('/') }}";
            let DT_TBL_GLOBAL_CONFIG = {
                processing: true,
                serverSide: true,
                autoWidth:false,
            };
            let DT_TIMEOUT = 0;
            function _after_datatable_loaded(table){
                /*$('[data-tooltip="tooltip"]:not(.js-tooltip-enabled)').add('.js-tooltip:not(.js-tooltip-enabled)').each((index, element) => {
                    let el = jQuery(element);
                    el.addClass('js-tooltip-enabled').tooltip({
                        container: el.data('container') || 'body',
                        animation: el.data('animation') || false
                    });
                });*/
            }
            function handleCommonError(xhr){
                if(xhr == undefined || xhr.status == undefined){
                    toastr.error("Unable to process your request!");
                    return;
                }
                switch (xhr.status) {
                    case 403:
                        toastr.warning("Don't have permission to perform action");
                        break;
                    case 404:
                        toastr.error("Sorry, we can't find it...");
                        break;
                    case 500:
                        toastr.error("Server error!");
                        break;
                }
            }
        </script>

        @stack('js')

        <!-- Argon JS -->

        <script src="{{ asset(mix('js/common.js')) }}"></script>

        <script src="{{ asset('argon') }}/js/argon.js?v=1.0.0"></script>
        <!-- toastr -->
        <script src="http://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.0.2/js/toastr.min.js">
        </script>
        <!-- swal -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/10.12.5/sweetalert2.min.js"></script>
        <!-- Datepicker -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.47/js/bootstrap-datetimepicker.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-daterangepicker/3.0.5/daterangepicker.min.js"></script>
        <!-- Datatables JS -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.8/js/select2.min.js" defer></script>
        <script src="https://cdn.datatables.net/1.10.23/js/jquery.dataTables.min.js" defer></script>

        <script src="assets/js/components/custom/input-values.jquery.js"></script>
        <script src="assets/vendor/datatables.net/js/jquery.dataTables.min.js"></script>
        <script src="assets/vendor/datatables.net-bs4/js/dataTables.bootstrap4.min.js"></script>
        <script src="assets/vendor/datatables.net-buttons/js/dataTables.buttons.min.js"></script>
        <script src="assets/vendor/datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js"></script>
        <script src="assets/vendor/datatables.net-buttons/js/buttons.html5.min.js"></script>
        <script src="assets/vendor/datatables.net-buttons/js/buttons.flash.min.js"></script>
        <script src="assets/vendor/datatables.net-buttons/js/buttons.print.min.js"></script>
        <script src="assets/vendor/datatables.net-select/js/dataTables.select.min.js"></script>
        <script src="assets/vendor/ladda/spin.js"></script>
        <script src="assets/vendor/ladda/ladda.js"></script>
    </body>
</html>
