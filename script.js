// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];


function getLearnerData(course, ag, submissions) {
  // here, we would process this data to achieve the desired result.
  const result = [];
  if (AssignmentGroup.course_id !== CourseInfo.id) {
    console.log("Error");
  } else {
    // continue but how???
  }
  return result;
}

// Tried to save each learner to an object. Kind of working.
// Create and maniplate arrays and objects
const learners = {}; 
LearnerSubmissions.forEach(submission => {
  let { learner_id, assignment_id, submission: { submitted_at, score } } = submission;
  if (!learners[learner_id]) {
    learners[learner_id] = {
      learner_id,
      assignments: []
    };
  }
});

const learnersArray = Object.values(learners);

console.log(learnersArray);

const learnerScores = LearnerSubmissions.map(submission => submission.submission.score)

console.log(learnerScores)

// Throwing stuff at the wall to try to get some points

// Use operators to perform calculations on variables and literals.
// Use functions to handle repeated tasks.
function avg(submissionScore, pointsPossible) {
  if (submissionScore < 0) {
    console.log("Error score can't be less than 0")
  } else {
    const average = submissionScore / pointsPossible;
  }
  return average;
}

// Two different loops
for (const i in AssignmentGroup) {
  console.log([i])
}

let newLearnerObj = {}
for (let i = 0; i<LearnerSubmissions.length; i++){
  newLearnerObj = newLearnerObj + LearnerSubmissions[i];
}

