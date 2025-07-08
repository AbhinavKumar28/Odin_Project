import "./styles.css";
function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9) / 5 + 32;

    return fahrenheit;
}
function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

console.log("Webpack is working!");

// let locateval = document.getElementById("location").value;
// URL (required), options (optional)
let degorfarh = document.getElementById("degorfarh");
let temp = document.getElementById("temp");

function Submit() {

}
let locate = document.getElementById("location");


// let =null
locate.addEventListener("input", () => {
    let locateval = locate.value;

    fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locateval}/?key=DY69M3JCVE77EWVJPTPU83DZ3`,
        {
            mode: "cors"
        }
    )
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not OK");
            }
            return response.json();
        })
        .then(data => {
            let tempi = data.currentConditions.temp;

            if (tempi < 70) {
                temp.style.color = "white";
            } else if (tempi < 85) {
                temp.style.color = "red";
            } else {
                temp.style.color = "violet";
            }
            if (degorfarh.value === "degree") {
                tempi = fahrenheitToCelsius(tempi);
            } else {
                tempi = data.currentConditions.temp;
            }
            temp.textContent = `Temperature of ${data.resolvedAddress} in ${degorfarh.value} is ${tempi}`;
            console.log("Weather data:", data);
        })
        .catch(err => {
            console.error("Fetch error:", err);
            temp.textContent = err;
        });
});
