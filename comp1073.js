// JavaScript Document

//add your object here
const jess = {
  name: ['Jessica','Gilfillan'],
  age:34,
  interests: ['coffee', 'code', 'cats'],
  bio: function() {
    alert(this.name[0] + ' ' + this.name[1]  + ' is ' + this.age + ' years old. They like ' + this.interests[0] + ', ' + this.interests[1] +  ' and ' + this.interests[2] + '.');
  },
  greeting: function() {
    alert('Hi! I\'m ' + this.name[0] + this.age + '.');
  }
}


//add event listener function or event handler property here

let button = document.getElementById('jess');
let button1 = document.getElementById('shadow');
//button.addEventListener('click', jess.greeting);

button.addEventListener('click', function(){
  jess.bio();
});

//--------------------------------------------------------------------------------------------------
//Braden Coates
const braden = {
  name: {
    first: "Braden",
    last: "Coates"
  },
  program: "Computer Science",
  home: "Hamilton",
  interests: ["Video games", "Board games", "Programming", "Reading", "Camping"],
  iAm: () => {
    alert(`Hi, I am ${braden.name.first}`);
  },
  info: () => {
    alert(`My name is ${braden.name.first} ${braden.name.last}, I am from ${braden.home} and am taking ${braden.program}. My interests are ${braden.interests[2]} and ${braden.interests[4]}. My biggest pet peeve is ${braden.peeve}.`);
  }
}

braden.peeve = "my code not compiling"

delete braden.name.last;

let buttonBraden = document.getElementById("braden");
buttonBraden.addEventListener('click', () => {
  braden.info();
});

//--------------------------------------------------------------------------------------------------
