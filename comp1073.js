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

//stella
const student {
  name: {
    first: 'Stella',
    last: 'Gray'
  },
  program: 'Computer Science',
  home: 'Field, ON',
  interests: ['reading', 'watching tv/movies'],
  greeting: function () {
    alert('Hi, I am' + student.name.first + ' ' + student.name.last)
  },
  bio: function () {
    alert(student.name.first + ' ' + student.name.last + ' is in the ' + student.program + ' program, she calls' + student.home + ' home. Her intersts are' + student.interests[0] + ' and ' + student.intersts[1] + '.');
  }
};


//add pet peeve
student.petPeeve = "I don't know";


//delete last name
delete student.name.last;

let buttonStella = document.getElementById('stella');
button.addEventListener('click', function(){
student.bio});

//end stella

// gillian:
let gillian = {
  name: {
    first: 'Gillian',
    last: 'Thorne'
  },
  program: 'Computer Science',
  home: 'Barrie',
  interests: ['Taylor Swift', 'koalas', 'sleeping'];
  greeting: function() {
    alert('Hi, I am ' + gillian.name.first);
  },
  about: function() {
    alert(gillian.name.first + ' is studying ' + gillian.program ' and lives at home in ' + gillian.home  + '. She likes ' + gillian.interests[0] + ', ' + gillian.interests[1] + ' and ' gillian.interests[2] + '.');
  }
}

gillian.petPeeve = 'loud noises';
delete gillian.name.last;

let gillianButton = document.getElementById('gillian');
gillianButton.addEventListener('click', function() {
  gillian.bio()
});
// end gillian

//add event listener function or event handler property here 

let button = document.getElementById('jess'); 
let button1 = document.getElementById('shadow');
//button.addEventListener('click', jess.greeting); 

button.addEventListener('click', function(){
  jess.bio(); 
})

//nik
let nikBrennan = {
      name: ["Nik", "Brennan"],
      program: "Computer Science",
      home: "Barrie",
      interests: ["Video games", "Streaming", "Playing with my doggos"],
      myName: function(){
            alert("Hi, I am " + name[0]);
      },
      info: function(){
            alert("Hi, I am " + this.name[0] + " " + this.name[1] +". My interests consist of " + this.interests + ". I live in " + this.home);
      }
};

nikBrennan.petPeeve = "Zach Green";
delete nikBrennan.name.last;

let buttonNik = document.getElementById("nik");
buttonNik.addEventListener('click', function(){
      nikBrennan.info(); 
})


//Will
1.) Create an object to represent you.
let me = {
  //properites
  name: {
    first: 'William',
    last: 'Van Wieringen'
  },
  program: 'comp1073',
  home: 'Parents House',
  interests: ['napping', 'eating', 'Gaming', 'doggies'],
  petPeeve: 'When a computer or phone won''t load a page fast enough',
  //methods

  greeting: function() {
    alert('Hi ' + me.name.first);
  },
  bio: function(){
    alert(me.name.first + ' ' + me.name.last + 'my program is ' +  me.program + ' I live in my ' + me.home + ' I like ' + me.interests[0] + ' and ' + me.interests[1] + ' and ' + me.interests[2] + ' and ' + me.interests[3]);

  }

};
//add petPeeve
me.petPeeve = 'When a computer or phone won''t load a page fast enough';
//delete your last name
delete me.name.last;

let buttonMe = document.getElementById("me");
buttonMe.addEventListener('click', function(){
      me.info(); 
})
