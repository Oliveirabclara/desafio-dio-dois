
function PlayerRank(victories, defeats){
    let result = victories - defeats
    return result
}

let PlayerPosition = PlayerRank(89,2)    
let level;

if (PlayerPosition <=10){
    level = "Ferro"
}else if (PlayerPosition >=11 && PlayerPosition <=20){
    level = "Bronze"
}else if (PlayerPosition >=21 && PlayerPosition <=50){
    level = "Prata"
}else if (PlayerPosition >=51 && PlayerPosition <=80){
    level = "Ouro" 
}else if (PlayerPosition >=81 && PlayerPosition <=90){
    level = "Diamante"
}else if (PlayerPosition >=91 && PlayerPosition <=100){
    level = "Lendario"
}else
    level = "Imortal"

console.log("O Herói tem de saldo de: ", PlayerPosition,  " e está no nível: ", level)