// Description:
// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

// Solution:
function bmi(weight, height) {
    let WH = weight / (height * height)
    if (WH <= 18.5) {
        return "Underweight"
    } else if (WH <= 25.0) {
        return "Normal"
    } else if (WH <= 30.0) {
        return "Overweight"
    } else if (WH > 30.0) {
        return "Obese"
    }
}