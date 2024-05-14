document.getElementById('calculateBtn').addEventListener('click', function() {
    var latitude = parseFloat(document.getElementById('latitude').value);
    var longitude = parseFloat(document.getElementById('longitude').value);

    // Perform calculation here
    var optimalAngle = calculateOptimalAngle(latitude);
    var seasonalAngles = calculateSeasonalAngles(optimalAngle);
    var monthlyAngles = calculateMonthlyAngles(optimalAngle);

    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p class="bold">Your optimal year-round tilt angle:<br></p><p>${optimalAngle.toFixed(1)}°</p>
        <p class="bold">Your optimal tilt angles by season:</p>
        <ul>
            <li>Spring: ${seasonalAngles.spring.toFixed(1)}°</li>
            <li>Summer: ${seasonalAngles.summer.toFixed(1)}°</li>
            <li>Fall: ${seasonalAngles.fall.toFixed(1)}°</li>
            <li>Winter: ${seasonalAngles.winter.toFixed(1)}°</li>
        </ul>
        <p class="bold">Your optimal tilt angles by month:</p>
        <ul>
            <li>January: ${monthlyAngles.january.toFixed(1)}°</li>
            <li>February: ${monthlyAngles.february.toFixed(1)}°</li>
            <li>March: ${monthlyAngles.march.toFixed(1)}°</li>
            <li>April: ${monthlyAngles.april.toFixed(1)}°</li>
            <li>May: ${monthlyAngles.may.toFixed(1)}°</li>
            <li>June: ${monthlyAngles.june.toFixed(1)}°</li>
            <li>July: ${monthlyAngles.july.toFixed(1)}°</li>
            <li>August: ${monthlyAngles.august.toFixed(1)}°</li>
            <li>September: ${monthlyAngles.september.toFixed(1)}°</li>
            <li>October: ${monthlyAngles.october.toFixed(1)}°</li>
            <li>November: ${monthlyAngles.november.toFixed(1)}°</li>
            <li>December: ${monthlyAngles.december.toFixed(1)}°</li>
        </ul>
    `;
});

function calculateOptimalAngle(latitude) {
    return latitude * 0.87 + 3.1;
}

function calculateSeasonalAngles(optimalAngle) {
    return {
        spring: optimalAngle,
        summer: optimalAngle - 15,
        fall: optimalAngle,
        winter: optimalAngle + 15
    };
}

function calculateMonthlyAngles(optimalAngle) {
    var angles = {};
    for (var i = 0; i < 12; i++) {
        var monthDifference = i - 2; // Calculate the difference from March
        angles[getMonthName(i + 1).toLowerCase()] = optimalAngle + monthDifference * 5;
    }
    return angles;
}

function getMonthName(month) {
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    return monthNames[month - 1];
}
