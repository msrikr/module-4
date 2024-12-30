
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


var sayHello = {
  speak: function(name) {
    console.log("Hello " + name);
  }
};


var sayGoodbye = {
  speak: function(name) {
    console.log("Goodbye " + name);
  }
};


for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  
  if (firstLetter === 'j') {
    sayGoodbye.speak(names[i]);
  } else {
    sayHello.speak(names[i]);
  }
}
