// Game logic


function launchPendulum(){


window.isLaunched=true
initialEnergyRef.value=calcEnergy(pendulum)


document.getElementById('status').textContent='LAUNCHED!'


document.getElementById('status').className=''
}



function resetPendulum(){


window.isLaunched=false

pendulum.theta1=Math.PI
pendulum.theta2=Math.PI


pendulum.omega1=0


pendulum.omega2=0

document.getElementById('theta1').value=3141592


document.getElementById('theta2').value=3141592


document.getElementById('omega1').value=0
document.getElementById('omega2').value=0

document.getElementById('theta1-val').textContent='3.141592'


document.getElementById('theta2-val').textContent='3.141592'
document.getElementById('omega1-val').textContent='0.000000'


document.getElementById('omega2-val').textContent='0.000000'

initialEnergyRef.value=calcEnergy(pendulum)


document.getElementById('status').textContent=''


document.getElementById('status').className=''
}



function checkGongCollision(){


if(!window.isLaunched)return false

const coords=polarToCartesian(pendulum.theta1,pendulum.theta2,


pendulum.L1,pendulum.L2,centerX,centerY)

const dx=coords.x2-gong.x


const dy=coords.y2-gong.y
const dist=Math.sqrt(dx*dx+dy*dy)


if(dist<gong.radius){

window.isLaunched=false
document.getElementById('status').textContent='HIT!'


document.getElementById('status').className='success'


return true


}


return false
}



function updatePendulumPhysics(){


if(!window.isLaunched)return

if(useRK4){

integrate_rk4(pendulum,0.02)


}else{
integrate_euler(pendulum,0.05)


}


}
