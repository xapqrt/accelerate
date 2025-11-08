// yeah this is js the program execution logic


function executeProgram(){


const output=document.getElementById('output')
output.innerHTML='<div style="color:#0f0">EXECUTING...</div>'


setTimeout(()=>{


let result=0

for(let block of blocks){


if(block.type==='input'){


result=block.value
output.innerHTML+=`<div style="color:#ff0">INPUT: ${result}</div>`


}else if(block.type==='adder'){


result=result+5


output.innerHTML+=`<div style="color:#0ff">ADDER: ${result}</div>`
}else if(block.type==='printer'){


output.innerHTML+=`<div style="color:#f0f">PRINTER OUTPUT: ${result}</div>`


}
}


console.log("🧬 program executed, result:",result)
},500)


}
