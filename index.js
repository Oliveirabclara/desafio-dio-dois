console.log("Hello, World.")

let PlayerPosition = PlayerRank(4,5)
console.log(PlayerPosition)

function PlayerRank(victories, defeats){
    result = victories + defeats
    return result
}