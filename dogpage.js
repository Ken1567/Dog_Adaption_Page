function calculateDogAge(age) {
    var dogYears;
    if (age <= 2) {
        dogYears = age * 10.5
    } else if (age > 2) {
        dogYears = 21 + (age-2)*4
    }
    return dogYears;
}

const dogs = [
  {
    name: "Mafi",
    age: `Your doggie is ${calculateDogAge(1)} years old in dog years!`,
    picSrc:"https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
    toys: [
      "Bone",
      "Water bottle"
    ],
  },
  {
    name: "Stephanie",
    age: `Your doggie is ${calculateDogAge(3)} years old in dog years!`,
    picSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_LPwIgYq5d18s_WtB48WAZeFRKDAK7idvqQ&usqp=CAU",
    toys: [
        "Ball",
        "Shoes"
    ],
  },
  {
    name: "Bomnk",
    age: `Your doggie is ${calculateDogAge(2)} years old in dog years!`,
    picSrc:"https://d3544la1u8djza.cloudfront.net/APHI/Blog/2020/05-14/How+Do+Dogs+Get+Hernias+_+ASPCA+Pet+Insurance+_+shiba+inu+with+an+orange+collar+resting+on+a+tan+chair-min.jpg",
    toys: [
        "Ducklings",
        "Tabo"
    ],
  }
];

let dogHTML = ""; // eto yung ilalagay sa baba

dogs.forEach(dog => {
    let dogEntry = `
        <div class="dogentry">
            <h3>Name: ${dog.name}</h3>
            <img src=${dog.picSrc} height="100px">
            <h3>Age: ${dog.age}</h3>
            <h3>Fave toys: ${dog.toys.reduce((total, currentToy) => {
              return total + "," + currentToy;
            })}</h3></br>
        </div>
    `; 
    // dito ka mag-add
    dogHTML += dogEntry;
})

document.getElementById("dog").innerHTML = dogHTML;

// // common way
// function func1(dog) {
//   // do something
//   console.log(dog);
// }
// array.forEach(func1)

// // js standard way
// const func2 = function(dog) {
//   console.log(dog);
// }
// array.forEach(func2);

// // arrow notation
// const func3 = (dog) => {
//   console.log(dog);
// }
// array.forEach(func3);

// // using anonymoous arrow notation function
// array.forEach((parameter1, parameter2, etc) => {
//   // do something
// })
  