import Firebase from "../Firebase";

async function uploadAnswers(answers, total, rollno) {
  await Firebase.firestore()
    .collection("test2")
    .doc("doc1")
    .collection("students")
    .doc(rollno)
    .set({ answers: answers, total: total });
}

//model
var answers = { questionId1: "optid", questionId2: "optid2" };
var total = 99;
var rollno = "19csr163";

export { uploadAnswers };
