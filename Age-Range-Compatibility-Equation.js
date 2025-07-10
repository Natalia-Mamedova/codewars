// Description:
// Everybody knows the classic "half your age plus seven" dating rule that a lot of people follow (including myself).
// It's the 'recommended' age range in which to date someone.
// Min = Age/2 + 7
// Max=2⋅(Age - 7)
// Minimum age≤Your age≤Maximum age
// Task
// Given an integer (1 <= n <= 100) representing a person's age, return their minimum and maximum age range.
// This equation doesn't work when the age <= 14, so if the age <= 14, use this equation instead:
// min = age - 0.10 * age
// max = age + 0.10 * age
// You should floor all your answers so that an integer is given instead of a float (which doesn't represent age).
// Return your answer in the form "[min]-[max]"

// Solution:
function datingRange(age) {
    if (age > 14) {
        let minAge = Math.floor(age / 2 + 7);
        let maxAge = Math.floor(2 * (age - 7));
        return `${minAge}-${maxAge}`
    } else if (age <= 14) {
        let min = Math.floor(age - 0.10 * age)
        let max = Math.floor(age + 0.10 * age)
        return `${min}-${max}`
    }
}