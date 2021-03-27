import Firebase from "../Firebase";

async function saveStudent(data) {
  await Firebase.firestore().collection("students").doc(data.roll).set({
    name: data.username,
    roll: data.roll,
    sec: data.sec,
    year: data.year,
    dept: data.dept,
  });
  window.alert("Profile saved successfully");
}
async function saveFaculty(name, email, password) {
  await Firebase.firestore().collection("faculty").doc(email).set({
    name,
    email,
    password,
  });
}
async function getStudent(rollno) {
  var snapshot = await Firebase.firestore()
    .collection("students")
    .doc(rollno)
    .get();
  return snapshot.data();
}
async function getFaculty(email) {
  var snapshot = await Firebase.firestore()
    .collection("faculty")
    .doc(email)
    .get();
  return snapshot.data();
}

async function signUp(email, password) {
  var userCred = await Firebase.auth().createUserWithEmailAndPassword(
    email,
    password
  );
  await Firebase.auth().signInWithEmailAndPassword(email, password);
  console.log(userCred);
  localStorage.setItem("user", userCred);
}
async function signIn(email, password) {
  var userCred = await Firebase.auth().signInWithEmailAndPassword(
    email,
    password
  );
  localStorage.setItem("user", userCred);
  console.log(userCred);
}

export { signIn, signUp, saveStudent };
