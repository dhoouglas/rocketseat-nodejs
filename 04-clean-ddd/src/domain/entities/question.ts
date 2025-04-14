import { Slug } from "./value-objects/slug";
import { Entity } from "../../core/entities/entity";
import { UniqueEtityId } from "../../core/entities/unique-entity-id";

interface QuestionProps {
  authorId: UniqueEtityId;
  bestAnswerId?: UniqueEtityId;
  title: string;
  content: string;
  slug: Slug;
  createdAt: Date;
  updatedAt?: Date;
}

export class Question extends Entity<QuestionProps> {}
