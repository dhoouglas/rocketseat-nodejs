import { UniqueEtityId } from "./unique-entity-id";

export class Entity<Props> {
  private _id: UniqueEtityId;
  protected props: Props;

  get id() {
    return this._id;
  }

  protected constructor(props: Props, id?: UniqueEtityId) {
    this.props = props;
    this._id = id ?? new UniqueEtityId();
  }
}
