import Firebase from "../Firebase";

async function addQuestion(data) {
  var question_txt = data[0];
  var options = [
    getOption(1, data[1]),
    getOption(2, data[2]),
    getOption(3, data[3]),
    getOption(4, data[4]),
  ];
  var points = parseInt(data[5]);
  await addToFirebase({
    question_txt: question_txt,
    options: options,
    points: points,
  });
}
async function getQuestions() {
  var questions = [];
  var snapshot = await Firebase.firestore()
    .collection("test2")
    .doc("doc1")
    .collection("questions")
    .get();
  snapshot.docs.forEach((e) =>
    questions.push({ ...e.data(), ...{ question_id: e.id } })
  );
  console.log(questions);
  return questions;
}

//utility functions
function getOption(index, txt) {
  return { opt_id: "00" + index.toString(), opt_text: txt };
}
async function addToFirebase(data) {
  await Firebase.firestore()
    .collection("test2")
    .doc("doc1")
    .collection("questions")
    .add(data);
}

export { addQuestion, getQuestions };
