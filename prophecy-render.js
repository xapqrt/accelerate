// Pendulum rendering



function drawPendulumState(ctx){


const coords=polarToCartesian(pendulum.theta1,pendulum.theta2,


pendulum.L1,pendulum.L2,centerX,centerY)

ctx.strokeStyle='#fff'


ctx.lineWidth=3


ctx.beginPath()
ctx.moveTo(centerX,centerY)


ctx.lineTo(coords.x1|0,coords.y1|0)


ctx.lineTo(coords.x2|0,coords.y2|0)
ctx.stroke()


ctx.fillStyle='#fff'


ctx.beginPath()
ctx.arc(coords.x1|0,coords.y1|0,8,0,Math.PI*2)


ctx.fill()

ctx.beginPath()


ctx.arc(coords.x2|0,coords.y2|0,12,0,Math.PI*2)


ctx.fill()
}




function drawGong(ctx){


ctx.fillStyle='#ff8800'
ctx.beginPath()


ctx.arc(gong.x,gong.y,gong.radius,0,Math.PI*2)


ctx.stroke()
}




function drawTrajectoryPreview(ctx){


const ghostState={...pendulum}

ctx.strokeStyle='rgba(0,255,0,0.2)'


ctx.lineWidth=1


ctx.beginPath()

for(let i=0;i<200;i++){


if(useRK4){


integrate_rk4(ghostState,0.02)
}else{


integrate_euler(ghostState,0.05)


}

const coords=polarToCartesian(ghostState.theta1,ghostState.theta2,


ghostState.L1,ghostState.L2,centerX,centerY)

if(i===0){


ctx.moveTo(coords.x2|0,coords.y2|0)


}else{
ctx.lineTo(coords.x2|0,coords.y2|0)


}


}

ctx.stroke()


}




function renderFrame(ctx){


clearCanvas(ctx,800,600)

if(showPreview&&!window.isLaunched){


drawTrajectoryPreview(ctx)


}


drawGong(ctx)


drawPendulumState(ctx)

updateEnergyDisplay()


}




function updateEnergyDisplay(pendulum,initialEnergy){


const energy=calcEnergy(pendulum)
const drift=energy-initialEnergy


document.getElementById('energy-val').textContent=energy.toFixed(3)+' J'


const driftEl=document.getElementById('drift-val')


driftEl.textContent=drift.toFixed(6)+' J'

if(Math.abs(drift)<0.001){


driftEl.className='energy-value energy-good'


}else{
driftEl.className='energy-value energy-bad'


}


}
