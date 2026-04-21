function handleNext() {
    const model = document.getElementById('model').value;
    const service = document.getElementById('service').value;

    if (model === "" || service === "") {
        alert("Please fill in your bike details first!");
    } else {
        console.log("Proceeding with:", model, service);
        alert("Moving to Date Selection for your " + model);
        // In a real site, you would change the 'active' class on the step circles here
    }
}