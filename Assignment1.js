// C1-A1

// Persona 1, Student Information (Me)
let fullName = "Patrick Joseph Punzal"
let birthdate = "January 17, 2002";
let birthplace = "Narvacan, Ilocos Sur";
let address = "Bagar, Candon City, Ilocos Sur";
let courseAndYear = "Bachelor Of Science In Computer Science, 2nd Year";
let dreamJobAfterGraduation = "Product Manager";

// Persona 2, 1st Classmate (this is a random name, and identity)
let classmate1FullName = "Marie Reyes De Guzman"
let classmate1Birthdate = "February 15, 2002";
let classmate1Birthplace = "San Jose, Candon City, Ilocos Sur";
let classmate1Address = "San Roque, Candon City, Ilocos Sur";
let classmate1CourseAndYear = "Bachelor Of Science In Computer Science, 2nd Year";
let classmate1DreamJob = "Game Developer";

// Persona 3, 3rd Classmate (also a random)
let classmate2FullName = "Joseph Wick Dantes"
let classmate2Birthdate = "November 25, 2003";
let classmate2Birthplace = "San Jose, Candon City, Ilocos Sur";
let classmate2Address = "San Roque, Candon City, Ilocos Sur";
let classmate2CourseAndYear = "Bachelor Of Science In Computer Science, 3rd Year";
let classmate2DreamJob = "Web Developer";

// Print information for Student 1 (Me)
let student1Info = "[" + fullName.toUpperCase() + "] was born on [" + birthdate + "] at [" + birthplace.toUpperCase() + "], and currently living at [" + address.toUpperCase() + "]. [" + fullName.toLowerCase() + "] is taking up [" + courseAndYear + "] and dreams to be [" + dreamJobAfterGraduation + "] after graduation.\n";
console.log(student1Info);

// Print information for Classmate 1
let classmate1Info = "[" + classmate1FullName + "] was born on [" + classmate1Birthdate + "] at [" + classmate1Birthplace.toUpperCase() + "], and currently living at [" + classmate1Address.toUpperCase() + "]. [" + classmate1FullName.toLowerCase() + "] is taking up [" + classmate1CourseAndYear + "] and dreams to be [" + classmate1DreamJob + "] after graduation.\n";
console.log(classmate1Info);

// Print information for Classmate 2
let classmate2Info = "[" + classmate2FullName + "] was born on [" + classmate2Birthdate + "] at [" + classmate2Birthplace.toUpperCase() + "], and currently living at [" + classmate2Address.toUpperCase() + "]. [" + classmate2FullName.toLowerCase() + "] is taking up [" + classmate2CourseAndYear + "] and dreams to be [" + classmate2DreamJob + "] after graduation.";
console.log(classmate2Info);
