  // Prompt for a string type input
  let stringInput = prompt("String typedagi malumot kiriting:");
  console.log("String input:", stringInput);

  // Prompt for a number type input
  let numberInput = prompt("Number typedagi malumot kiriting:");
  numberInput = Number(numberInput); // Convert the input to a number
  console.log("Number input:", numberInput);

    let boolnInput = prompt("boolean typdagi malumot kiriting:");
    console.log("booln input:", boolnInput);

    function showConfirmation() {
        const inputs = {
            "murod": "string",
            123: "number",
            true: "boolean"
        };
    
        let message = "Подтвердите действие на 127.0.0.1:5500\n\n";
        for (let key in inputs) {
            message += `Siz kiritgan ${key} sozi ${inputs[key]} typega tegishli\n`;
        }
    
        if (confirm(message)) {
            alert("You confirmed the action.");
        } else {
            alert("Action was canceled.");
        }
    }
    
    showConfirmation();