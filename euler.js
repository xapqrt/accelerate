// Euler integration

//js energy draining


function integrate_euler(state,dt){
const alphas=computeAlphas(state)

state.theta1+=state.omega1*dt
state.theta2+=state.omega2*dt
state.omega1+=alphas.alpha1*dt
state.omega2+=alphas.alpha2*dt
}

//so much maths goddamn it, have to do my hw too


function integrate_euler_step(state,dt){
const {alpha1,alpha2}=computeAlphas(state)

const newState={
theta1:state.theta1+state.omega1*dt,
theta2:state.theta2+state.omega2*dt,
omega1:state.omega1+alpha1*dt,
omega2:state.omega2+alpha2*dt,
m1:state.m1,
m2:state.m2,
L1:state.L1,
L2:state.L2
}

return newState
}
