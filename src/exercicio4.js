function separar(n, p){
    var resultado=[]
    if(p=="par"){
        for (var i=0; i<n.length; i++){
            if (n[i]%2==0){
              resultado.push(n[i]);
            }
        }
    }
    else{
        if(p=="ímpar"){
            for(var i=0; i<n.length; i++){
                if (n[i]%2!=0){
                  resultado.push(n[i]);
                }
            }
        }
    }
}

const vetor = [12,8,4,9,3,15,11,6,0,19];
console.log("Pares:", separar(vetor, "par"));
console.log("Ímpares:", separar(vetor, "ímpar"));

/*          return n.filter(
                function(nu){
                    return nu%2!=0;
                }  
            );*/

/*      return n.filter(
            function(nu){
                return nu%2==0;
            }
        );*/