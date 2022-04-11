// var student1 = {
//   name: "Mustafa",
//   rollNo: 1,
//   age: 19,
//   result: "A+",
// };
// var student2 = {
//   name: "Moiz",
//   rollNo: 2,
//   age: 18,
//   result: "A",
// };
// var student3 = {
//   name: "Raza",
//   rollNo: 3,
//   age: 21,
//   result: "A+",
// };
// var student4 = {
//   name: "Ammad",
//   rollNo: 4,
//   age: 24,
//   result: "A+",
// };

// var students = [student1, student2, student3, student4 ];

// console.log(students);

// for (var i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

var student1 = {
  rollno: 1,
  name: "MUSTAFA",
  fathername: "IQBAL",
  Result: "PASS",
};
var student2 = {
  rollno: 2,
  name: "RAZA",
  fathername: "IQBAL",
  Result: "PASS",
};
var student3 = {
  rollno: 3,
  name: "MOIZ",
  fathername: "ALAY",
  Result: "PASS",
};
var student4 = {
  rollno: 4,
  name: "AMMAD",
  fathername: "LATIF",
  Result: "PASS",
};
var students = [student1, student2, student3, student4 ];
var studentData = document.getElementById("studentdata");
for (var i = 0; i < students.length; i++) {
  var obj = students[i];
  studentData.innerHTML +=
    "<tr><td>" +
    obj.rollno +
    "</td><td>" +
    obj.name +
    "</td><td>" +
    obj.fathername +
    "</td><td>" +
    obj.Result +
    "</td></tr>";
}
function searchStudent() {
  var inpVal = document.getElementById("inpVal");
  for (var i = 0; i < students.length; i++) {
    var obj = students[i];
    if (inpVal.value == obj.rollno) {
      console.log(obj);
      studentSearch.innerHTML =
        "<tr><td>" +
        obj.rollno +
        "</td><td>" +
        obj.name +
        "</td><td>" +
        obj.fathername +
        "</td><td>" +
        obj.Result +
        "</td></tr>";
    }
  }
}

// function searchResult() {
//   var userRollNumber = rollnumberInput.value;
//   for (var i = 0; i < student.length; i++) {
//     if (userRollNumber == student[i].rollno) {
//       var obj = student[i];
//       console.log(student[i]);
//       showRollNumber.innerHTML = obj.rollno;
//       showName.innerHTML = obj.name;
//       showFatherName.innerHTML = obj.fathername;
//       showResult.innerHTML = obj.Result;
//     }
//   }
// }

// var student = {
//   name: "MUSTAFA HASSAN",
// };

// // --------------------
// for (var i = 0; i < student.length; i++) {
//   student[i].id = i + 1;
//   console.log(student[i]);
// }
// --------------------------------

// var student = {
//   name: "HASSAN",
//   fathername: "FASIL",
//   age: 19,
//   hobbies: ["a", "b", "c"],
//   isClearedInAllSubjects: false,
//   address: {
//     Country: "Pakistan",
//     city: "Karachi",
//     Area: "Hussainabad",
//   },
//   func: function () {
//     console.log("Function Called");
//   },
// };
// student.func();
// console.log(student);
