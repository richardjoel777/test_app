import Firebase from "../Firebase";

async function uploadAnswers(answers, user, test_id) {
  console.log("Test id in upload answers ", test_id);
  console.log("inside upload", answers);
  await Firebase.firestore()
    .collection("data")
    .doc("tests")
    .collection("II-CSE-C")
    .doc(test_id)
    .collection("student_answers")
    .doc(user)
    .set({ answers: answers.answers, total: answers.total });
}

//model
var answers = { questionId1: "optid", questionId2: "optid2" };
var total = 99;
var rollno = "19csr163";

export { uploadAnswers };
