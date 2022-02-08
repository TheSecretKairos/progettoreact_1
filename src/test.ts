class Studente {

    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    
    display(): void {
        console.log("studente" + this.id);
    }
}
let obj = new Studente(1, "Mario");  //classe inizializzata

obj.display();