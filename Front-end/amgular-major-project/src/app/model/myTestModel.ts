
export class MyTestModel {
  categoryName: string;
  subcategoryName: string;
  testName: string;
  dateAppeared: string;
  numberOfQuestions: string;
  idealTime: string;
  totalMarks: string;
  cutoff: string;

  constructor(categoryName,
              subcategoryName,
              testName,
              dateAppeared,
              numberOfQuestions,
              idealTime,
              totalMarks,
              cutOff) {

    this.categoryName = categoryName;
    this.subcategoryName = subcategoryName;
    this.testName = testName;
    this.dateAppeared = dateAppeared;
    this.numberOfQuestions = numberOfQuestions;
    this.idealTime = idealTime;
    this.totalMarks = totalMarks;
    this.cutoff = cutOff;
  }

}
