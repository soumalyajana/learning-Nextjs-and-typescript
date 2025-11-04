type point = {x : number ; y: number}

function distanceFromOrigin(p: point){
    return Math.hypot(p.x , p.y)
}

console.log(distanceFromOrigin({x : "3", y : 2}));