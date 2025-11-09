
//rk4 integration with the 4th order runge kutta

function integrate_rk4(state,dt){
const k1=computeDerivatives(state)

const state2={
theta1:state.theta1+0.5*dt*k1.dtheta1,


theta2:state.theta2+0.5*dt*k1.dtheta2,
omega1:state.omega1+0.5*dt*k1.domega1,


omega2:state.omega2+0.5*dt*k1.domega2,


m1:state.m1,
m2:state.m2,


L1:state.L1,
L2:state.L2


}

const k2=computeDerivatives(state2)

const state3={


theta1:state.theta1+0.5*dt*k2.dtheta1,
theta2:state.theta2+0.5*dt*k2.dtheta2,


omega1:state.omega1+0.5*dt*k2.domega1,


omega2:state.omega2+0.5*dt*k2.domega2,
m1:state.m1,


m2:state.m2,


L1:state.L1,
L2:state.L2


}

const k3=computeDerivatives(state3)

const state4={


theta1:state.theta1+dt*k3.dtheta1,
theta2:state.theta2+dt*k3.dtheta2,


omega1:state.omega1+dt*k3.domega1,
omega2:state.omega2+dt*k3.domega2,


m1:state.m1,


m2:state.m2,
L1:state.L1,


L2:state.L2
}


const k4=computeDerivatives(state4)

state.theta1+=dt/6*(k1.dtheta1+2*k2.dtheta1+2*k3.dtheta1+k4.dtheta1)


state.theta2+=dt/6*(k1.dtheta2+2*k2.dtheta2+2*k3.dtheta2+k4.dtheta2)


state.omega1+=dt/6*(k1.domega1+2*k2.domega1+2*k3.domega1+k4.domega1)
state.omega2+=dt/6*(k1.domega2+2*k2.domega2+2*k3.domega2+k4.domega2)

}



function computeDerivatives(state){


const {alpha1,alpha2}=computeAlphas(state)

return{


dtheta1:state.omega1,


dtheta2:state.omega2,
domega1:alpha1,


domega2:alpha2
}


}



function integrate_rk4_step(state,dt){


const k1=computeDerivatives(state)

const state2={


theta1:state.theta1+0.5*dt*k1.dtheta1,


theta2:state.theta2+0.5*dt*k1.dtheta2,
omega1:state.omega1+0.5*dt*k1.domega1,


omega2:state.omega2+0.5*dt*k1.domega2,
m1:state.m1,


m2:state.m2,


L1:state.L1,
L2:state.L2


}

const k2=computeDerivatives(state2)


const state3={


theta1:state.theta1+0.5*dt*k2.dtheta1,
theta2:state.theta2+0.5*dt*k2.dtheta2,


omega1:state.omega1+0.5*dt*k2.domega1,
omega2:state.omega2+0.5*dt*k2.domega2,


m1:state.m1,


m2:state.m2,
L1:state.L1,


L2:state.L2


}

const k3=computeDerivatives(state3)


const state4={


theta1:state.theta1+dt*k3.dtheta1,


theta2:state.theta2+dt*k3.dtheta2,
omega1:state.omega1+dt*k3.domega1,


omega2:state.omega2+dt*k3.domega2,


m1:state.m1,
m2:state.m2,


L1:state.L1,
L2:state.L2


}

const k4=computeDerivatives(state4)

return{


theta1:state.theta1+dt/6*(k1.dtheta1+2*k2.dtheta1+2*k3.dtheta1+k4.dtheta1),
theta2:state.theta2+dt/6*(k1.dtheta2+2*k2.dtheta2+2*k3.dtheta2+k4.dtheta2),


omega1:state.omega1+dt/6*(k1.domega1+2*k2.domega1+2*k3.domega1+k4.domega1),


omega2:state.omega2+dt/6*(k1.domega2+2*k2.domega2+2*k3.domega2+k4.domega2),
m1:state.m1,


m2:state.m2,


L1:state.L1,
L2:state.L2


}
}