"use strict";
class Studente {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    display() {
        console.log("studente" + this.id);
    }
}
let obj = new Studente(1, "Mario"); //classe inizializzata
obj.display();
