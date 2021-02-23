import Firebase from "../Firebase";

async function uploadAnswers(answers, total, user) {
  await Firebase.firestore()
    .collection("test2")
    .doc("doc1")
    .collection("students")
    .doc(user.id)
    .set({ answers: answers.answers, total: total });
}

//model
var answers = { questionId1: "optid", questionId2: "optid2" };
var total = 99;
var rollno = "19csr163";

export { uploadAnswers };
