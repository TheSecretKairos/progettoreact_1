interface Veicoli
{
    avvia() : void ;
    guida(distanza : number) : void;
    getPosizione() : number ;  
}

class Auto implements Veicoli 
{
    avvia(): void {
        throw new Error("Method not implemented.");
    }
    guida(distanza: number): void {
        throw new Error("Method not implemented.");
    }
    getPosizione(): number {
        throw new Error("Method not implemented.");
    }

}