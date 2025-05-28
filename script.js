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

    // Normalize names to lowercase for comparison
    const menLower = menName.toLowerCase();
    const womenLower = womenName.toLowerCase();

    // Special case check
    const specialMen = ["adil", "abdur rahman"];
    const specialWomen = ["saima"];

    let lovePercentage;

    if (specialMen.includes(menLower) && specialWomen.includes(womenLower)) {
        // Random number between 90 and 100
        lovePercentage = Math.floor(Math.random() * 11) + 90;
    } else {
        // Random number between 1 and 100
        lovePercentage = Math.ceil(Math.random() * 100);
    }

    // Reset previous result (optional but clean)
    display.innerHTML = "";

    // Show new result
    display.innerHTML = `${menName} ❤️ ${womenName}: ${lovePercentage}%`;

    // Optional: Clear input fields
    menInput.value = "";
    womenInput.value = "";
});
