
function convert(){
var output = document.getElementById("output");
var input = document.getElementById("input").value;
output.value = "";
for(let i=0; i<input.length; i++){
    if(/C/i.test(input[i])){
        output.value+="CG"  
    }else if(/G/i.test(input[i])){
        output.value+="GC"
    }else if(/A/i.test(input[i])){
        output.value+="AT" 
}else if(/T/i.test(input[i])){
    output.value+="TA"

}else if(input[i]!=="C"||input[i]!=="G"||input[i]!=="A"||input[i]!=="T"){
output.value+=" Invalid base "
}
}
}

     