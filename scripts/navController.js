app.controller('navControl', ['$scope', function($scope){
    
    $scope.toggle = false;

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

    $scope.showMenu = function () {

        $scope.toggle=!$scope.toggle;
        console.log($scope.toggle);
    }

    /*$scope.showDashBoard = function () {
        
        for (let i = 0; i < $scope.menuOptions.length; i++){
            
                $scope.menuOptions[i].key = false;
            }
    }*/

    $scope.closeMobile = function () {


        for (let i = 0; i < $scope.menuOptions.length; i++){
            
                $scope.menuOptions[i].key = false;
            }

        $scope.toggle=!$scope.toggle;
    }

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