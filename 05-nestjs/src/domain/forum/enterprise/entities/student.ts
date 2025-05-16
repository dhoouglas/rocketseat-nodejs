import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

interface StudentProps {
  name: string;
  email: string;
  pasword: string;
}

export class Student extends Entity<StudentProps> {
  get name() {
    return this.props.name;
  }

  get email() {
    return this.props.email;
  }

  get pasword() {
    return this.props.pasword;
  }

  static create(props: StudentProps, id?: UniqueEntityID) {
    const student = new Student(props, id);

    return student;
  }
}
