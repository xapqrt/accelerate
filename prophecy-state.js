// state management for the prophecy game


let pendulum={


theta1:Math.PI,


theta2:Math.PI,
omega1:0,


omega2:0,


m1:1,
m2:1,


L1:150,
L2:150


}

let initialEnergyRef={value:0}


window.isLaunched=false
let useRK4=false


let showPreview=false


let gong={


x:600,
y:200,


radius:30
}


const centerX=400


const centerY=300
