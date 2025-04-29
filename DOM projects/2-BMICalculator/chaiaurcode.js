const formItems = document.querySelector("form");

formItems.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log(event.target.height.value);
  const height = parseFloat(event.target.height.value);
  const weight = parseFloat(event.target.weight.value);
  if (!inputValidation(height, weight)) {
    return;
  }
  // const height = document.getElementById("height").value;
  // const weight = document.getElementById("weight").value;

  const results = document.getElementById("results");
  const BMI = calculateBMI(height, weight);
  results.innerHTML = `Your BMI is ${BMI}`;

  console.log(BMI);
  const colorBody = document.querySelector(".container");
  if (BMI >= 18.6 && BMI < 24.9) {
    colorBody.style.backgroundColor = "green";
  } else if (BMI < 18.6) {
    colorBody.style.backgroundColor = "orange";
  } else {
    colorBody.style.backgroundColor = "yellow";
  }
});

const calculateBMI = (height, weight) => {
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  return bmi.toFixed(2);
};

const inputValidation = (height, weight) => {
  // Check if either value is not a number or is <= 0
  if (height === null || weight === null) {
    alert("Weight and height cannot be empty.");
    return false;
  }
  if (isNaN(height) || isNaN(weight)) {
    alert("height and weight must be numbers.");
    return false;
  }

  // Optional: Check for realistic ranges
  if (height <= 0 || weight <= 0) {
    alert("Height and weight must be greater than zero.");
    return false;
  }

  // If everything is good
  return true;
};
