var Animal = (function () {
    //adding the 'public' tag to each category does the same job as individually declaring all properties of the class.
    function Animal(name, sound, species) {
        this.name = name;
        this.sound = sound;
        this.species = species;
        //this.name = name;
        //this.sound = sound;
        //this.species = species;
        console.log("An animal was created...");
    }
    //name: string;
    //species: string;
    //sound: string;
    Animal.prototype.makeSound = function () {
        return this.sound;
    };
    return Animal;
}());
var bear = new Animal("Baloo", "Bear", "Roar");
//bear.name = "Baloo";
//bear.species = "Bear";
//bear.sound = "Roar";
//If you use a constructor class then there is no need to call each property out individually.
var panther = new Animal("Bagura", "Panther", "Growl");
//panther.name = "Bagura";
//panther.species = "Panther";
//panther.sound = "Growl";
var wolf = new Animal("Fang", "Wolf", "Howl");
//wolf.name = "Fang";
//wolf.species = "Wolf";
//wolf.sound = "Howl";
var monkey = new Animal("King Louis", "Monkey", "Ooo Ooo Ahh Ahh!");
//monkey.name = "King Louis";
//monkey.species = "Monkey";
//monkey.sound = "Ooo Ooo Ahh Ahh!";
var animals = [bear, panther, wolf, monkey];
for (i = 0; i < animals.length; i++) {
    console.log(console.log(animals[i].name + " says " + animals[i].makeSound()));
}
;
