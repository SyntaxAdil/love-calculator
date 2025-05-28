document.getElementById("btn").addEventListener("click", function () {
    const menInput = document.getElementById("menName");
    const womenInput = document.getElementById("womenName");
    const display = document.getElementById("love_display");

    const menName = menInput.value.trim();
    const womenName = womenInput.value.trim();

    // Validation check
    if (menName === "" || womenName === "") {
        alert("Both names are required to calculate love percentage!");
        return;
    }

    // Reset previous result (so that it doesn't stack or overlap)
    display.innerHTML = "";

    // Generate random love percentage
    const lovePercentage = Math.ceil(Math.random() * 100);

    // Show result
    display.innerHTML = `${menName} ❤️ ${womenName}: ${lovePercentage}%`;

    // Optional: Reset input fields
    menInput.value = "";
    womenInput.value = "";
});
