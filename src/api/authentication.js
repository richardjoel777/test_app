import Firebase from "../Firebase";

async function saveStudent(data, email) {
  await Firebase.firestore()
    .collection("data")
    .doc("users")
    .collection("students")
    .doc(email)
    .set({
      name: data.username,
      roll: data.roll,
      sec: data.sec,
      year: data.year,
      dept: data.dept,
    });
  window.alert("Profile saved successfully");
}
// async function saveFaculty() {
//   var name = "Good Guru";
//   var email = "mathsguru.sh@kongu.edu";
//   await Firebase.firestore()
//     .collection("data")
//     .doc("users")
//     .collection("faculty")
//     .doc(email)
//     .set({
//       name,
//       email,
//     });
// }

function checkAuth() {
  var user = localStorage.getItem("TestAppUser");
  console.log("Inside checkauth", user);
  return user;
}

async function getStudent(email) {
  var snapshot = await Firebase.firestore()
    .collection("data")
    .doc("users")
    .collection("students")
    .doc(email)
    .get();
  return snapshot.data();
}
async function getFaculty(email) {
  var snapshot = await Firebase.firestore()
    .collection("data")
    .doc("users")
    .collection("faculty")
    .doc(email)
    .get();
  return snapshot.data();
}

async function signUp(name, email, password) {
  var userCred = await Firebase.auth().createUserWithEmailAndPassword(
    email,
    password
  );
  await Firebase.auth().signInWithEmailAndPassword(email, password);
  if (hasNumber(email)) {
    await Firebase.firestore()
      .collection("data")
      .doc("users")
      .collection("students")
      .doc(email)
      .set({
        email: email,
        name: name,
      });
  } else {
    await Firebase.firestore()
      .collection("data")
      .doc("users")
      .collection("faculty")
      .doc(email)
      .set({
        email: email,
        name: name,
      });
  }
  localStorage.setItem("TestAppUser", email);
}

function hasNumber(myString) {
  return /\d/.test(myString);
}

async function signIn(email, password) {
  var userCred = await Firebase.auth().signInWithEmailAndPassword(
    email,
    password
  );
  localStorage.setItem("TestAppUser", email);
}

export {
  signIn,
  signUp,
  saveStudent,
  checkAuth,
  hasNumber,
  getStudent,
  getFaculty,
};
