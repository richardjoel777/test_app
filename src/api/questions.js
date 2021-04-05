import Firebase from "../Firebase";

async function addQuestion(data, test_id) {
  var question_txt = data[0];
  var options = [
    getOption(1, data[1]),
    getOption(2, data[2]),
    getOption(3, data[3]),
    getOption(4, data[4]),
  ];
  var points = parseInt(data[5]);
  await addToFirebase(
    {
      question_txt: question_txt,
      options: options,
      points: points,
      isHard: data[6].toLowerCase() === "true",
    },
    test_id
  );
}

async function editQuestion(test_id, question_id, new_opt) {
  try {
    await Firebase.firestore()
      .collection("data")
      .doc("tests")
      .collection("tests")
      .doc(test_id)
      .collection("questions")
      .doc(question_id)
      .set({ options: new_opt });
  } catch (ex) {
    console.log(ex);
  }
}

async function getQuestions(test_id) {
  try {
    var questions = [];
    var snapshot = await Firebase.firestore()
      .collection("data")
      .doc("tests")
      .collection("tests")
      .doc(test_id)
      .collection("questions")
      .get();
    snapshot.docs.forEach((e) =>
      questions.push({ ...e.data(), ...{ question_id: e.id } })
    );
    //console.log("bye", questions);
    return questions;
  } catch (ex) {
    console.log("Error", ex);
  }
}

async function getStudentAnswers(test_id) {
  try {
    var student_answers = [];
    var snapshot = await Firebase.firestore()
      .collection("data")
      .doc("tests")
      .collection("tests")
      .doc(test_id)
      .collection("student_answers")
      .get();
    snapshot.docs.forEach((e) =>
      student_answers.push({ ...e.data(), ...{ student_id: e.id } })
    );
    //console.log("bye", student_answers);
    return student_answers;
  } catch (ex) {
    console.log("Error", ex);
  }
}

async function addTestDetails(
  testname,
  sec,
  year,
  dept,
  course,
  coursecode,
  datetime,
  faculty,
  facultyname,
  cls,
  test_id
) {
  //console.log("Inside add test details");
  await Firebase.firestore()
    .collection("data")
    .doc("tests")
    .collection("tests")
    .doc(test_id)
    .set({
      name: testname,
      sec: sec,
      year: year,
      dept: dept,
      cls: cls,
      course: course,
      coursecode: coursecode,
      faculty: faculty,
      facultyname: facultyname,
      datetime: datetime,
    });
}
async function getTestDetails(test_id) {
  try {
    const test_details = await Firebase.firestore()
      .collection("data")
      .doc("tests")
      .collection("tests")
      .doc(test_id)
      .get();
    if (test_details) return test_details.data();
    return null;
  } catch (ex) {
    console.log(ex.message);
  }
}
//utility functions
function getOption(index, txt) {
  return { opt_id: "00" + index.toString(), opt_text: txt };
}
async function addToFirebase(data, test_id) {
  await Firebase.firestore()
    .collection("data")
    .doc("tests")
    .collection("tests")
    .doc(test_id)
    .collection("questions")
    .add(data);
}

async function getTests(faculty) {
  var tests = [];
  var snapshot = await Firebase.firestore()
    .collection("data")
    .doc("tests")
    .collection("tests")
    .get();
  snapshot.docs.forEach((e) =>
    tests.push({ ...e.data(), ...{ test_id: e.id } })
  );
  var res = tests.filter((test) => test.faculty === faculty);
  var ans = [];
  return await Promise.all(
    res.map((test) => {
      try {
        return mapTests(test);
      } catch (ex) {
        throw ex;
      }
    })
  );
}

async function mapTests(test) {
  var student_answers = await getStudentAnswers(test.test_id);
  var questions = await getQuestions(test.test_id);
  var res = {
    test: test,
    isCompleted: test.datetime >= Date.now(),
    student_answers: student_answers,
    questions: questions,
  };
  console.log("Map ", res);
  return res;
}

export {
  addQuestion,
  addTestDetails,
  getQuestions,
  getTestDetails,
  editQuestion,
  getTests,
};
