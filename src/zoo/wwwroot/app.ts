class Animal {
    //name: string;
    //species: string;
    //sound: string;
    makeSound() {
        return this.sound;
    }
    //adding the 'public' tag to each category does the same job as individually declaring all properties of the class.
    constructor(public name: string, public sound: string, public species:string) {
        //this.name = name;
        //this.sound = sound;
        //this.species = species;
        console.log(`An animal was created...`);
    }

}

let bear = new Animal(`Baloo`, `Bear`, `Roar`);
//bear.name = "Baloo";
//bear.species = "Bear";
//bear.sound = "Roar";
//If you use a constructor class then there is no need to call each property out individually.

let panther = new Animal(`Bagura`, `Panther`,`Growl`);
//panther.name = "Bagura";
//panther.species = "Panther";
//panther.sound = "Growl";

let wolf = new Animal(`Fang`, `Wolf`, `Howl`);
//wolf.name = "Fang";
//wolf.species = "Wolf";
//wolf.sound = "Howl";

let monkey = new Animal(`King Louis`, `Monkey`, `Ooo Ooo Ahh Ahh!`);
//monkey.name = "King Louis";
//monkey.species = "Monkey";
//monkey.sound = "Ooo Ooo Ahh Ahh!";

let animals: Animal[] = [bear, panther, wolf, monkey];

for (i = 0; i < animals.length; i++) {
    console.log(console.log(`${animals[i].name} says ${animals[i].makeSound()}`);
};

