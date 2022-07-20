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
      "Plastic Cup"
    ],
  },
  {
    name: "Stephanie",
    age: `Your doggie is ${calculateDogAge(3)} years old in dog years!`,
    picSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_LPwIgYq5d18s_WtB48WAZeFRKDAK7idvqQ&usqp=CAU",
    toys: [
        "Ball",
        "Pillow"
    ],
  },
  {
    name: "Bomnk",
    age: `Your doggie is ${calculateDogAge(2)} years old in dog years!`,
    picSrc:"https://d3544la1u8djza.cloudfront.net/APHI/Blog/2020/05-14/How+Do+Dogs+Get+Hernias+_+ASPCA+Pet+Insurance+_+shiba+inu+with+an+orange+collar+resting+on+a+tan+chair-min.jpg",
    toys: [
        "Rock",
        "Stick"
    ],
  }
];

let dogHTML = "";

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
    dogHTML += dogEntry;
})

document.getElementById("dog").innerHTML = dogHTML;
