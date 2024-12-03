function addNumber(num){
    var input = document.getElementById("input")
    input.value = input.value + num;
}

function calculate(){
    var input = document.getElementById("input")
    try{
        input.value = eval(input.value)
    }

    catch(e){
        input.value = "error"
    }
}

function clearinput(){
      document.getElementById("input").value="";
}

function sin(){
    document.getElementById("input").value=Math.sin(document.getElementById("input").value);
    
}