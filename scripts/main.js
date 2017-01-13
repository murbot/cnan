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

app.controller('mainControl', ['$scope', function($scope){
    
    $scope.titles = [
    "Dealer Dashboard",
    "Sell Contracts", 
    "Manage Contracts",
    "Reporting & Remitance",
    "Claims",
    "Our Products", 
    "Marketing & Communications",
    "Help"];

    $scope.subOptions = [
        [],
        ["Quote a Vehicle","Rate a Vehicle", "Program Resources"],
        ["Search & Verify Coverage", "Cancel a Contract", "Lienholder Administration", "Procedure Manuals"],
        ["Reports", "Contract Remittance", "e-contracting Sign-up"],
        ["VSC Claims", "GAP Claims", "Tire & Wheel Claims", "Certified Warranty Claims", "Lifetime Limited Powertrain Warranty & Wrap Claims"],
        ["Vehicle Service Contracts", "POPP/SPP", "Guaranteed Asset Protection (GAP)", "Tire & Wheel", "Certified Warranty", "Lifetime Limited Powertrain Warranty & Wrap"],
        ["News","Marketing Resourses","Training & Schedules","Order Supplies"],
        ["Support","Manuals & Procedures"]
    ];

    $scope.menuOptions = [ //add icons
        { title: "",
          submenu : [],
          key: false
        },
        { title: "",
          submenu : [],
          key: false
        },
        { title: "",
          submenu : [],
          key: false
        },
        { title: "",
          submenu : [],
          key: false
        },
        { title: "", 
          submenu : [],
          key: false
        },  
         { title: "",  
          submenu : [],
          key: false
        },  
         { title: "",
          submenu : [],
          key: false
        },  
         { title: "",
          submenu : [],
          key: false
        },  
    ]; 

    for (let i=0; i < $scope.titles.length; i++) {

        $scope.menuOptions[i].title = $scope.titles[i];
        
        for (let j=0; j < $scope.subOptions[i].length; j++ ){

            let title = $scope.subOptions[i][j];
            let link=title.toLowerCase().replace(/\s+/g, '_').replace('_&', '').replace(/-/g,'_');
            
            $scope.menuOptions[i].submenu.push({
                title: title,
                link: link
            })           
        }
    }

    /*$scope.showDashBoard = function () {
        
        for (let i = 0; i < $scope.menuOptions.length; i++){
            
                $scope.menuOptions[i].key = false;
            }
    }*/

    $scope.showOptions = function (selected) {
       
        selected.key = !selected.key;
        for (let i = 0; i < $scope.menuOptions.length; i++){
            
            if ($scope.menuOptions[i].title != selected.title) {
                $scope.menuOptions[i].key = false;
            }
        }
    }

    $scope.highlight = function (subtitle) {


        let el = document.querySelector('#'+subtitle);
        if (document.querySelector('.highlight')) {
            document.querySelector('.highlight').classList.remove('highlight');
        }
        el.classList.add('highlight');
    }
}]);