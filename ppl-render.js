// pendulum rendering for ppl
//js had to copy the code from other rendering filesd



function spawnPendulum(blockId){


const block=blocks.find(b=>b.id===blockId)
if(!block)return


const rect=block.element.getBoundingClientRect()


const workspace=document.getElementById('workspace')
const workspaceRect=workspace.getBoundingClientRect()

const centerX=rect.left-workspaceRect.left+75


const centerY=rect.top-workspaceRect.top+30

block.pendulum={


theta1:Math.PI/4,


theta2:Math.PI/4,
omega1:0.5,


omega2:0.5,


m1:1,
m2:1,


L1:block.value*10,
L2:30,


centerX:centerX,
centerY:centerY


}
}




function updatePendulums(){


for(let block of blocks){
if(block.pendulum){


const rect=block.element.getBoundingClientRect()


const workspace=document.getElementById('workspace')
const workspaceRect=workspace.getBoundingClientRect()

block.pendulum.centerX=rect.left-workspaceRect.left+75


block.pendulum.centerY=rect.top-workspaceRect.top+30

integrate_euler(block.pendulum,0.05)


}
}
}




function drawPendulums(){


const canvas=document.getElementById('canvas')
const ctx=canvas.getContext('2d')


ctx.clearRect(0,0,canvas.width,canvas.height)

for(let block of blocks){


if(block.pendulum){


const p=block.pendulum
const coords=polarToCartesian(p.theta1,p.theta2,p.L1,p.L2,p.centerX,p.centerY)


let color='#fff'


if(block.type==='input')color='#ff0'
else if(block.type==='adder')color='#0ff'


ctx.strokeStyle=color


ctx.lineWidth=2
ctx.beginPath()


ctx.moveTo(p.centerX|0,p.centerY|0)


ctx.lineTo(coords.x1|0,coords.y1|0)
ctx.lineTo(coords.x2|0,coords.y2|0)


ctx.stroke()

ctx.fillStyle=color


ctx.beginPath()


ctx.arc(coords.x2|0,coords.y2|0,4,0,Math.PI*2)
ctx.fill()


}
}
}
