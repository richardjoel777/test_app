import Firebase from "../Firebase";

async function uploadAnswers(answers, user, test_id) {
  console.log("Test id in upload answers ", test_id);
  console.log("inside upload", user);
  await Firebase.firestore()
    .collection("data")
    .doc("tests")
    .collection("tests")
    .doc(test_id)
    .collection("student_answers")
    .doc(user)
    .set({ answers: answers.answers, total: answers.total });
}

//model

export { uploadAnswers };
