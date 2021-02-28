import Firebase from "../Firebase";

async function saveStudent(name, email, password, rollno) {
  await Firebase.firestore().collection("students").doc(rollno).set({
    name,
    email,
    password,
    rollno,
  });
}
async function saveFaculty(name, email, password) {
  await Firebase.firestore().collection("faculty").doc(email).set({
    name,
    email,
    password,
    rollno,
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
  await saveStudent("Richard", "email@ml", "alskd", "19csr157");
}

export { signIn, signUp };
