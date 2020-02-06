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
//awais
name : {
		first: 'Awais',
		last : 'Nisar'
	},
	program: 'Computer Science',
	home: 'Toronto,ON',
	interest: ['bed','food','netlfix','sports', 'computer'],
	
	greeting: function() {
		alert('Hi, I am' + me.name.first + ' ' + me.name.last);
	},
	
	bio: function(){
		alert(me.name.first + ' ' + me.name.last + ' is in the' + me.program + '. He call his home in ' + me.home + ' His interests are ' + me.interest[0]+',' + me.interest[1]+','+ me.interest[2]+',' + me.interest[3]',' me.interest[4] + '.')
	}
	
let memberName = 'annoying';
	let memberProperty = 'mosquitos';
	
	me[memberName] = memberProperty;

	delete me.name.last; 

//end awais
//add event listener function or event handler property here 

let button = document.getElementById('jess'); 
let button1 = document.getElementById('shadow');
let awaisbutton = document.getElementId('awais');//button.addEventListener('click', jess.greeting); 

button.addEventListener('click', function(){
  jess.bio(); 
})
awaisbutton.addEventListener('click', function(){
  me.bio(); })
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

//Tobi
let tobi = {
      name:{
            first: 'Tobi',
            last: 'Quadri',
      },
      age: 18,
      interests: ['Basketball', 'Music', 'Cars', 'Fashion', 'Napping', 'Vibing', 'Been in the Zone'],
      program: 'Computer Science',
      home: 'Barrie',
      greeting: function(){
            alert('Hi, I am ' +tobi.name.first + tobi.name.last);

      },

      bio: function(){
            alert(tobi.name.first + ' ' + tobi.name.last + ' is' + tobi.age + ' years old. I like' + tobi.interests[0] + ' and' + interests[1] + tobi.program + '.');

            
      }

      

}
 
//pet Peeve
let petPeeve = ['Snakes', 'CatLitter']

delete tobi.name.last;
let buttontobi = document.getElementById("tobiQuadri");
buttontobi.addEventListener('click', function(){
      tobiQuadri.info(); 
})

/*-----------------------------*/
const Vergil = {
    firstName: 'Vergil',
    lastName: 'Superintendent',
    program: 'Lakehead-Georgian Honours Bachelor of Computer Science',
    home: 'The Bunker',
    interests: ['Programming','3D Modelling','Virtual Reality'],
    greeting: function() {
        alert('Greetings, I am ' + this.lastName + ' ' + this.firstName + '.');
    },
    vData: function() {
        alert('First Name: ' + this.firstName
            + ', Last Name: ' + this.lastName
            + ', Program: ' + this.program
            + ', Home: ' + this.home
            + ', Interests: ' + this.interests);
    }
}
Vergil.petPeeve = 'Messes',
delete Vergil.lastName;

let vergilBtn=document.getElementById("Vergil");
vergilBtn.addEventListener('click',function(){
    Vergil.vData();
}
/*-----------------------------*/
// Adam
const adamp = {
      name: {
            first: 'Adam',
            last: 'Peskett'
      },
      program: 'Computer Science',
      home: 'Innisfil',
      interests: ['auto racing', 'sports', 'reading'],
      hello: function() {
            alert('Hi, I am ' + adamp.name.first)
      },

      bio: function() {
            alert(adamp.name.first + ' ' + adamp.name.last + 'is taking a ' + adamp.program + ' course. He lives in ' + adamp.home + ' and is interested in ' + adamp.interests[0] + ', ' + adamp.interests[1] + ', ' + adamp.interests[2] + '.')
      }
}
let adamButton=document.getElementByID("adamp");
adamButton.addEventListener('click',function(){
    adamButton.bio();
	
// mikemacgregor
	
let mikemacgregor = {
  name: {
    first: 'Mike',
    last: 'MacGregor'
  },
  program: 'COPR',
  home: 'Barrie',
  interests: ['soccer', 'fantasy football', 'comics'],
  hi: function() {
    alert('Hi, I am ' + mikemacgregor.name.first + ' ' + mikemacgregor.name.last);
  },
  myInfo: function() {
    var info = JSON.stringify(mikemacgregor);
    alert(info);
  }
};

mikemacgregor.petPeeve = 'my daughter not picking up after herself';

delete mikemacgregor.name.last;
	
let buttonMike = document.getElementById('mikemacgregor');
buttonMike.addEventListener('click', function(){
	mikemacgregor.myInfo
});
	
// end mikemacgregor
