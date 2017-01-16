let app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    
    $routeProvider
    .when('/cancel_a_contract', {
        templateUrl : './views/cancel_a_contract.html'
    })
    .when('/certified_warranty', {
        templateUrl : './views/certified_warranty.html'
    })
    .when('/certified_warranty_claims', {
        templateUrl : './views/certified_warranty_claims.html'
    })
    .when('/contact_us', {
        templateUrl : './views/contact_us.html'
    })
    .when('/contract_remittance', {
        templateUrl : './views/contract_remittance.html'
    })
    .when('/dealer_dashboard', {
        templateUrl : './views/dealer_dashboard.html'
    })
    .when('/e_contracting_sign_up', {
        templateUrl : './views/e_contracting_sign_up.html'
    })
    .when('/gap_claims', {
        templateUrl : './views/gap_claims.html'
    })
    .when('/guaranteed_asset_protection_(gap)', {
        templateUrl : './views/guaranteed_asset_protection_(gap).html'
    })
    .when('/lienholder_administration', {
        templateUrl : './views/lienholder_administration.html'
    })
    .when('/lifetime_limited_powertrain_warranty_wrap', {
        templateUrl : './views/lifetime_limited_powertrain_warranty_wrap.html'
    })
    .when('/lifetime_limited_powertrain_warranty_wrap_claims', {
        templateUrl : './views/lifetime_limited_powertrain_warranty_wrap_claims.html'
    })
    .when('/manuals_procedures', {
        templateUrl : './views/manuals_procedures.html'
    })
    .when('/marketing_resourses', {
        templateUrl : './views/marketing_resourses.html'
    })
    .when('/news', {
        templateUrl : './views/news.html'
    })
    .when('/order_supplies', {
        templateUrl : './views/order_supplies.html'
    })
    .when('/popp_spp', {
        templateUrl : './views/popp_spp.html'
    })
    .when('/procedure_manuals', {
        templateUrl : './views/procedure_manuals.html'
    })
    .when('/program_resources', {
        templateUrl : './views/program_resources.html'
    })
    .when('/quote_a_vehicle', {
        templateUrl : './views/quote_a_vehicle.html'
    })
    .when('/rate_a_vehicle', {
        templateUrl : './views/rate_a_vehicle.html'
    })
    .when('/reports', {
        templateUrl : './views/reports.html'
    })
    .when('/rate_a_vehicle', {
        templateUrl : './views/rate_a_vehicle.html'
    })
    .when('/search_verify_coverage', {
        templateUrl : './views/search_verify_coverage.html'
    })
    .when('/support', {
        templateUrl : './views/support.html'
    })
    .when('/tire_wheel', {
        templateUrl : './views/tire_wheel.html'
    })
    .when('/tire_wheel_claims', {
        templateUrl : './views/tire_wheel_claims.html'
    })
    .when('/training_schedules', {
        templateUrl : './views/training_schedules.html'
    })
    .when('/vehicle_service_contracts', {
        templateUrl : './views/vehicle_service_contracts.html'
    })
    .when('/vsc_claims', {
        templateUrl : './views/vsc_claims.html'
    });
}]);