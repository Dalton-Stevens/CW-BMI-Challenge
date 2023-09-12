const bmi = (weight, height) => {
  let calcBmi = weight / (height * height);

  return calcBmi <= 18.5
    ? "Underweight"
    : calcBmi <= 25
    ? "Normal"
    : calcBmi <= 30
    ? "Overweight"
    : "Obese";
};

console.log(bmi(80, 1.8));
