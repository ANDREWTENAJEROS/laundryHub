// app.js
var app = angular.module('orderApp', []);
app.controller('OrderController', function($scope, $firebaseDatabase) {
    var firebaseConfig = {
        // Your Firebase configuration object goes here
    };
    firebase.initializeApp(firebaseConfig);
    var database = firebase.database();

    $scope.orders = [];

    $scope.addOrder = function() {
        var order = {
            date: $scope.date,
            customerName: $scope.customerName,
            items: {
                LF: $scope.LF || 0,
                RMF: $scope.RMF || 0,
                HF: $scope.HF || 0,
                HI: $scope.HI || 0
            }
        };

        // Calculate total price
        order.totalPrice = order.items.LF * 150 + order.items.RMF * 180 + order.items.HF * 200 + order.items.HI * 240;

        // Save to Firebase
        var newOrderRef = database.ref('orders').push();
        newOrderRef.set(order);

        // Clear form fields after saving
        $scope.date = '';
        $scope.customerName = '';
        $scope.LF = $scope.RMF = $scope.HF = $scope.HI = '';

        alert('Order saved successfully!');
    };

    // Load orders from Firebase
    database.ref('orders').on('value', function(snapshot) {
        $scope.orders = [];
        snapshot.forEach(function(childSnapshot) {
            var order = childSnapshot.val();
            $scope.orders.push(order);
        });
        $scope.$apply();
    });

    // Inside your AngularJS controller
    $scope.activeTab = 'orderFormTab'; // Default tab

    // Function to switch to the history tab
    $scope.showHistoryTab = function() {
        $scope.activeTab = 'historyTab';
    };

    // Function to switch to the order form tab
    $scope.showOrderFormTab = function() {
        $scope.activeTab = 'orderFormTab';
};
});
