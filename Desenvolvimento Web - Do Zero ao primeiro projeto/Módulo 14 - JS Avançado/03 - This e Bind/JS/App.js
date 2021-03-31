'use strict';

function speakSound(){
    console.log(this.sound)
}

let dog = {
   sound: 'Au Au',
   speak: speakSound
   
}

let cat = {
    sound: 'Miau Miau',
    speak: speakSound
 }
 


dog.speak();
cat.speak();


// --------------------- ****** ------------------------------ //

function info(){
    console.log(`${this.name} ${this.surName}`);
}

let man = {
    name: 'José',
    surName: 'Rocha',
    full: info
}

let whomen = {
    name:  'Bete',
    surName: 'Morais',
    full: info


}

// man.full();
// whomen.full();

let binded = info.bind(man);

binded()