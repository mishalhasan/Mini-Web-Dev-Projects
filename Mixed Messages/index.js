
var drinks = ["water",", ", "coke",", ", "juice",", ", "smoothies",", ", "tea",", ", "coffee" ]; 
var mainCourse = ["chicken biryani", "pasta", "sandwhich", "omlette","pizza","waffles"];
var dessert = ["pudding", "ice cream", "fruits", "cake","brownie","pie"];


function randomFoodRec(){

    let cmainCourse = mainCourse[Math.floor(Math.random() * mainCourse.length)];
    let cDessert = dessert[Math.floor(Math.random() * dessert.length)];
    let drinksList = ""; 

    for(let dr = 0; dr<drinks.length-1; dr++){
        drinksList = drinksList + drinks[dr] ; 
    }

    drinksList = drinksList + "and " + drinks[drinks.length-1];

    return`The chef's special today is ${cmainCourse} and for dessert we recommend ${cDessert}. If you'd like to have a drink we have; ${drinksList}.`


}

console.log(randomFoodRec()); 