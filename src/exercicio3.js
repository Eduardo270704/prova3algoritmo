function classificar(v){
    for(let i=0; i<v.length; i++){
        v[i]=(v[i]%2==0)?'p':'i';
    }
    return v;
}

const vetor = [12, 8, 4, 9, 3, 15, 11, 6, 0, 19];
console.log("Par ou ímpar:", classificar(vetor));