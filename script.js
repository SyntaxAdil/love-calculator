document.getElementById("btn").addEventListener("click", function () {
    const menName = document.getElementById("menName").value.trim();
    const womenName = document.getElementById("womenName").value.trim();
    
    // Validation check
    if (menName === "" || womenName === "") {
        alert("Both names are required to calculate love percentage!");
        
    }
  

    const lovePercentage = Math.ceil(Math.random() * 100);

    document.getElementById("love_display").innerHTML = `${menName} 
    ❤️ 
    ${womenName}:
    ${lovePercentage}%`;
});
