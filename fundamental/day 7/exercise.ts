

type Stats = {
  score: {
    highest: number;
    lowest: number;
    average: number;
  };
  age: {
    highest: number;
    lowest: number;
    average: number;
  };
}


class Person {
  public name: string;
  public email: string;
  private birthDate: Date;

  constructor(name: string, email:string, birthDate: Date) {
    this.name = name;
    this.email = email;
    this.birthDate = birthDate
  }

  public getAgeInYears(): number {
    const currentDate = new Date()
    return currentDate.getFullYear() - this.birthDate.getFullYear()
  }
}

class Student extends Person {
  public score: number;

  constructor(name:string, email:string, birthDate: Date, score: number){
    super(name, email, birthDate);
    this.score = score
  }
}


class StudentStats {
  private students: Student[]

  constructor(students: Student[]){
    this.students = students
  }

  public calculateStudent(): Stats {
    const scores = this.students.map(student => student.score)
    const age = this.students.map(student => student.getAgeInYears())

    const scoreHighest = Math.max(...scores);
    const scoreLowest = Math.min(...scores);
    const scoreAverage = Math.floor(scores.reduce((sum, num) => sum + num,0)/ scores.length)

    const ageHighest = Math.max(...age);
    const ageLowest = Math.min(...age);
    const ageAverage = Math.floor(age.reduce((sum, num) => sum + num,0) / age.length)

    return {
      score: {
        highest: scoreHighest,
        lowest: scoreLowest,
        average: scoreAverage
      },
      age: {
        highest: ageHighest,
        lowest: ageLowest,
        average: scoreAverage
      }
    }
  }
}

const student: Student[] = [
  new Student("Bob", "Bob@gmail.com", new Date("2000-04-15"), 90),
  new Student("Duksi", "Duksi@gmail.com", new Date("2000-04-15"), 75),
  new Student("Alica", "Alica@gmail.com", new Date("2000-04-15"), 83),
]

const calculator = new StudentStats(student)
const stats = calculator.calculateStudent()
console.log(stats)


