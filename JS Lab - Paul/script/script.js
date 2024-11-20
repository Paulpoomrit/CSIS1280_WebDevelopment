function addValue(){
    // get the operands value
    let input1 = document.getElementById("input_a").value;
    let input2 = document.getElementById("input_b").value;
    // parse to integer. You can use: parseInt(input, 10);
    let input1Int = parseInt(input1, 10);
    let input2Int = parseInt(input2, 10);
    // perform operation
    let output = input1Int + input2Int;
    console.log(output)
    
    // change the text area
    document.mycalculator.output.value = output;
}

function mulValue(){
    let input1 = document.getElementById("input_a").value;
    let input2 = document.getElementById("input_b").value;

    let input1Int = parseInt(input1, 10);
    let input2Int = parseInt(input2, 10);
    let output = input1Int * input2Int;
    console.log(output);

    document.mycalculator.output.value = output;
}

function divValue(){
    let input1 = document.getElementById("input_a").value;
    let input2 = document.getElementById("input_b").value;

    let input1Int = parseInt(input1, 10);
    let input2Int = parseInt(input2, 10);
    let output = input1Int / input2Int;
    console.log(output);

    document.mycalculator.output.value = output;
}
