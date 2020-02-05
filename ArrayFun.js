var Cats = ["Milk", "Sope", "Maple", "Tom", "Jerry", "Roach", "Derrel", "Pinky", "Spork", "Brain"] ;

 for( i= 0; i< Cats.length; i++){
     console.log(Cats[i]);
 }

 //array 2

 var inventory= [
     ["Milk", 10],
     ["Bread", 20],
     ["Tomatos", 30],
     ["Cheese", 40],
     ["Soda", 50],
     ["Fish", 60],
     ["Steak", 70],
     ["Apple", 80],
     ["Bannanas", 90],
     ["Peppers", 100]
 ]

 function add(){
     var input = document.getElementById('userInput').value;
     inventory.forEach(function(array) {
         if(input == array [0]){
             array[1] += 1;
         }
     });
    }

 function sub() {
     var input = document.getElementById('userInput').value;
     for(let i = 0; i <inventory.length; i++){
         if(input == inventory[i][0]){
             inventory[1][1] -= 1;
         }
         }
     }