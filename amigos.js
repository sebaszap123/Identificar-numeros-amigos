class App{
    constructor(){
        this.maximo = 3000
        this.num1 = 220
        this.numsAmigos = new Array()
    }
    getSumDivisibles(numero){
        let suma = 0;
        for(let i = 1; i < numero; i++){
            if(numero % i == 0){
                suma += i
            }
        }
        return suma
    }
    getCompare(numCompare, max){
        let pass = false
        let divisores1 = this.getSumDivisibles(numCompare)
        let divisores2;
        for(var i=1; i<max; i++){
            divisores2 = this.getSumDivisibles(i);
            if(divisores2 == numCompare && divisores1 == i && numCompare !== i){
                pass = i
            }
        }
        return pass;
    }
    numAmigos(num, max){
        let pass = this.getCompare(num, max);
        return pass;
    }
    getAllAmigos(){
        for(let i=1; i<this.maximo; i++){
            let numC = this.numAmigos(i, this.maximo);
            if(numC !== false){
                let pass = this.amigosAllReadyExist(i, numC)
                if(pass !== false){
                    let objAmigos = {amigo1: i, amigo2: numC}
                    this.numsAmigos.push(objAmigos);
                }
            }
        }
        return this.numsAmigos;
    }
    amigosAllReadyExist(amigo1, amigo2){
        let pass = true
        for(let i = 0; i < this.numsAmigos.length; i++){
            if(this.numsAmigos[i].amigo1 === amigo2 && this.numsAmigos[i].amigo2 === amigo1){
                pass = false;
            }
        }
        return pass
    }
}
let app = new App();
console.log('Prueba de numAmigos');
console.log(app.getAllAmigos());