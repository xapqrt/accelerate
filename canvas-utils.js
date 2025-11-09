

// canvas rendering utilities


function drawPendulum(ctx,state,centerX,centerY){
const {x1,y1,x2,y2}=polarToCartesian(
state.theta1,state.theta2,
state.L1,state.L2,
centerX,centerY
)



ctx.strokeStyle='#fff'
ctx.lineWidth=2
ctx.beginPath()
ctx.moveTo(centerX|0,centerY|0)
ctx.lineTo(x1|0,y1|0)

ctx.lineTo(x2|0,y2|0)
ctx.stroke()

ctx.fillStyle='#fff'
ctx.beginPath()
ctx.arc(x1|0,y1|0,5,0,Math.PI*2)
ctx.fill()

ctx.beginPath()


ctx.arc(x2|0,y2|0,8,0,Math.PI*2)
ctx.fill()

return {x1,y1,x2,y2}
}



function drawPendulumBatch(ctx,pendulums,centerX,centerY){
ctx.strokeStyle='#fff'


ctx.lineWidth=1
ctx.beginPath()

for(let p of pendulums){
const {x1,y1,x2,y2}=polarToCartesian(
p.theta1,p.theta2,



p.L1,p.L2,
centerX,centerY
)

ctx.moveTo(centerX|0,centerY|0)
ctx.lineTo(x1|0,y1|0)



ctx.lineTo(x2|0,y2|0)
}

ctx.stroke()

ctx.fillStyle='#fff'
ctx.beginPath()
for(let p of pendulums){



const {x1,y1,x2,y2}=polarToCartesian(
p.theta1,p.theta2,



p.L1,p.L2,
centerX,centerY
)
ctx.moveTo(x2|0,y2|0)



ctx.arc(x2|0,y2|0,3,0,Math.PI*2)
}
ctx.fill()
}



function drawTrail(ctx,x,y,color){
ctx.fillStyle=color||'#fff'



ctx.fillRect(x|0,y|0,1,1)
}



function clearCanvas(ctx,width,height){

ctx.fillStyle='#000'


ctx.fillRect(0,0,width,height)
}


function fadeCanvas(ctx,width,height,alpha){
ctx.fillStyle=`rgba(0,0,0,${alpha})`


ctx.fillRect(0,0,width,height)
}
