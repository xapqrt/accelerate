// block management for the ppl


let blocks=[]


let draggedBlock=null
let offsetX=0


let offsetY=0
let blockIdCounter=0



function createBlock(type){


const block=document.createElement('div')
block.className='block '+type


block.id='block-'+blockIdCounter++

let innerHTML=''


if(type==='input'){

innerHTML=`
<div class="block-title">INPUT</div>


<input type="range" min="0" max="10" value="5" step="0.1" 
oninput="updateBlockValue('${block.id}',this.value)">


<div class="block-value">Value: <span>5</span></div>
`


block.dataset.value='5'
}else if(type==='adder'){

innerHTML=`


<div class="block-title">ADDER</div>
<div class="block-value">A + B = ?</div>


`
block.dataset.value='0'


}else if(type==='printer'){
innerHTML=`


<div class="block-title">PRINTER</div>


<div class="block-value">Output: --</div>
`


}

block.innerHTML=innerHTML


const workspace=document.getElementById('workspace')

block.style.left='50px'
block.style.top=(50+blocks.length*80)+'px'


block.addEventListener('mousedown',startDrag)


workspace.appendChild(block)
blocks.push({


id:block.id,


type:type,
element:block,


value:parseFloat(block.dataset.value||0),
pendulum:null


})

if(type==='input'){

spawnPendulum(block.id)
}

}




function updateBlockValue(blockId,value){


const block=blocks.find(b=>b.id===blockId)
if(block){


block.value=parseFloat(value)


block.element.querySelector('.block-value span').textContent=value

if(block.pendulum){


block.pendulum.L1=parseFloat(value)*10
}


}
}




function startDrag(e){


draggedBlock=this
const rect=this.getBoundingClientRect()


const workspace=document.getElementById('workspace')
const workspaceRect=workspace.getBoundingClientRect()

offsetX=e.clientX-rect.left


offsetY=e.clientY-rect.top

document.addEventListener('mousemove',doDrag)


document.addEventListener('mouseup',stopDrag)
}




function doDrag(e){


if(!draggedBlock)return

const workspace=document.getElementById('workspace')


const workspaceRect=workspace.getBoundingClientRect()

let x=e.clientX-workspaceRect.left-offsetX


let y=e.clientY-workspaceRect.top-offsetY

x=Math.max(0,Math.min(x,workspace.offsetWidth-draggedBlock.offsetWidth))


y=Math.max(0,Math.min(y,workspace.offsetHeight-draggedBlock.offsetHeight))

draggedBlock.style.left=x+'px'


draggedBlock.style.top=y+'px'
}




function stopDrag(){


draggedBlock=null
document.removeEventListener('mousemove',doDrag)


document.removeEventListener('mouseup',stopDrag)
}




function clearWorkspace(){


blocks.forEach(b=>b.element.remove())


blocks=[]
document.getElementById('output').innerHTML=''


}
