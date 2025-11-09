// Energy display updates



function updateEnergyDisplay(){


const energy=calcEnergy(pendulum)
const drift=energy-initialEnergyRef.value


document.getElementById('energy-val').textContent=energy.toFixed(3)+' J'


const driftEl=document.getElementById('drift-val')


driftEl.textContent=drift.toFixed(6)+' J'

if(Math.abs(drift)<0.001){


driftEl.className='energy-value energy-good'


}else{
driftEl.className='energy-value energy-bad'


}


}
