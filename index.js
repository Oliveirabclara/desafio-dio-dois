
let PlayerPosition = PlayerRank(600,554)
console.log(PlayerPosition)

function PlayerRank(victories, defeats){
    let result = victories - defeats
    console.log(result)

    let level;

    if (victories <=10){
        level = "Ferro"
    }else if (victories >=11 && victories <=20){
        level = "Bronze"
    }else if (victories >=21 && victories <=50){
        level = "Prata"
    }else if (victories >=51 && victories <=80){
        level = "Ouro"
    }else if (victories >=81 && victories <=90){
        level = "Diamante"
    }else if (victories >=91 && victories <=100){
        level = "Lendario"
    }else
        level = "Imortal"

    console.log("O Heroi tem um total de: " + victories, "vitorias e esta no level: " + level)
}