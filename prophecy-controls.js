// Slider event handlers



function initSliders(){


const theta1Slider=document.getElementById('theta1')
const theta2Slider=document.getElementById('theta2')


const omega1Slider=document.getElementById('omega1')


const omega2Slider=document.getElementById('omega2')

theta1Slider.addEventListener('input',()=>{


const val=parseFloat(theta1Slider.value)/1000000


pendulum.theta1=val
document.getElementById('theta1-val').textContent=val.toFixed(6)


if(!window.isLaunched){


initialEnergyRef.value=calcEnergy(pendulum)
}


})

theta2Slider.addEventListener('input',()=>{


const val=parseFloat(theta2Slider.value)/1000000


pendulum.theta2=val
document.getElementById('theta2-val').textContent=val.toFixed(6)


if(!window.isLaunched){


initialEnergyRef.value=calcEnergy(pendulum)
}


})

omega1Slider.addEventListener('input',()=>{


const val=parseFloat(omega1Slider.value)/1000000


pendulum.omega1=val
document.getElementById('omega1-val').textContent=val.toFixed(6)


if(!window.isLaunched){


initialEnergyRef.value=calcEnergy(pendulum)
}


})

omega2Slider.addEventListener('input',()=>{


const val=parseFloat(omega2Slider.value)/1000000


pendulum.omega2=val
document.getElementById('omega2-val').textContent=val.toFixed(6)


if(!window.isLaunched){


initialEnergyRef.value=calcEnergy(pendulum)
}


})
}




function changeMode(){


const mode=document.querySelector('input[name="integrator"]:checked').value
useRK4=(mode==='rk4')


console.log("🧬 switched to",mode)


}




function togglePreview(){


showPreview=!showPreview
document.getElementById('previewBtn').textContent=showPreview?'PREVIEW ON':'PREVIEW OFF'


}
