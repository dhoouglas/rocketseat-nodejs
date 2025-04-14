import { Entity } from "../../core/entities/entity";
import { UniqueEtityId } from "../../core/entities/unique-entity-id";

interface AnswerProps {
  authorId: UniqueEtityId;
  questionId: UniqueEtityId;
  content: string;
  createdAt: Date;
  updatedAt?: Date;
}

export class Answer extends Entity<AnswerProps> {
  get content() {
    return this.props.content;
  }
}
