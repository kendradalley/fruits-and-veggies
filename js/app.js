/* setup your angular app here */
var app = angular.module('App', [])

app.controller('Ctrl', ['$scope', function($scope){
  // empty food array
  $scope.fruitList = [];
  $scope.vegetableList = [];

  // Combo array of fruits and veggies
  $scope.comboArray = fruits.concat(vegetables).sort(function({ return 0.5 - Math.random() }));

$scope.gameStart = function() {

    var array1 = fruits;
    var array2 = vegetables;

    var tempArray = $scope.comboArray;
    // var tempArray2 = [];

    var produceList = [];

    for(var i = 0; i < counter; i++) {
      j = Math.floor(Math.random() * (tempArray.length - 1));

      produceList.push(tempArray[j]);
      tempArray.splice(j, 1);
    }
    console.log("produceArray", produceArray);
    return produceArray;
  }

  $scope.moveLeft = function(index) {
    //push fruit to fruit list and remove from produce list
    $scope.fruitList.push($scope.produceList[index]);
    $scope.produceList.splice(index, 1);
  }

  $scope.moveRight = function(index) {
    //push fruit to veggie list and remove from produce list
    $scope.vegetableList.push($scope.produceList[index]);
    $scope.produceList.splice(index, 1);
  }

//   $scope.produceList = [
//   'Apple',
//   'Apricot',
//   'Banana',
//   'Blackberry',
//   'Blueberry',
//   'Boysenberry',
//   'Artichoke',
//   'Arugula',
//   'Asparagus',
//   'Eggplant',
//   'Alfalfa sprouts',
//   'Bean sprouts',
//   'Black beans',
//   'Black-eyed peas',
//   'Chickpeas',
//   'Green beans',
//   'Kidney beans',
//   'Lentils',
//   'Lima beans',
//   'Mung beans',
//   'Navy beans',
//   'Pinto beans',
//   'Runner beans',
//   'Gooseberry',
//   'Grape',
//   'Grapefruit',
//   'Guava',
//   'Huckleberry',
//   'Honeydew',
//   'Jackfruit',
//   'Kiwi fruit',
//   'Kumquat',
//   'Lemon',
//   'Lime',
//   'Mango',
//   'Marion berry',

// ];


}]);

// debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruits.length);
console.log('Veggie count', vegetables.length);
