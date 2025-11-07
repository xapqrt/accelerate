//double pendulum eq of motion js gonna type em out what i saw and learned



function computeAlphas(state){
const {theta1,theta2,omega1,omega2,m1,m2,L1,L2}=state
const g=9.81


const delta=theta1-theta2
const sinDelta=Math.sin(delta)
const cosDelta=Math.cos(delta)



const denom1=L1*(2*m1+m2-m2*Math.cos(2*delta))

const num1=-g*(2*m1+m2)*Math.sin(theta1)
-m2*g*Math.sin(theta1-2*theta2)
-2*sinDelta*m2*(omega2*omega2*L2
+omega1*omega1*L1*cosDelta)

const alpha1=num1/denom1




const denom2=L2*(2*m1+m2-m2*Math.cos(2*delta))

const num2=2*sinDelta*(omega1*omega1*L1*(m1+m2)
+g*(m1+m2)*Math.cos(theta1)
+omega2*omega2*L2*m2*cosDelta)

const alpha2=num2/denom2


return {alpha1,alpha2}
}




function polarToCartesian(theta1,theta2,L1,L2,centerX,centerY){
const sin1=Math.sin(theta1)
const cos1=Math.cos(theta1)
const sin2=Math.sin(theta2)
const cos2=Math.cos(theta2)

const x1=centerX+L1*sin1
const y1=centerY+L1*cos1

const x2=x1+L2*sin2
const y2=y1+L2*cos2

return {x1,y1,x2,y2}
}



function calcEnergy(state){
const {theta1,theta2,omega1,omega2,m1,m2,L1,L2}=state
const g=9.81

const cosDelta=Math.cos(theta1-theta2)


const T=0.5*m1*(L1*omega1)**2
+0.5*m2*((L1*omega1)**2+(L2*omega2)**2
+2*L1*L2*omega1*omega2*cosDelta)


const V=-(m1+m2)*g*L1*Math.cos(theta1)
-m2*g*L2*Math.cos(theta2)

return T+V
}




function checkCollision(x1,y1,x2,y2,threshold){
const dx=x1-x2
const dy=y1-y2
const distSq=dx*dx+dy*dy

return distSq<threshold*threshold
}
