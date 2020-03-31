import { SearchUserModelInput, User } from "./Model";

export interface SearchUserPresenterInput {
  didTapSearchButton: (text: string) => void;
}

export type SearchUserPresenterOutput = {
  updateUsers: (users: User[]) => void;
};

export class SearchUserPresenter implements SearchUserPresenterInput {
  private view: SearchUserPresenterOutput;
  private model: SearchUserModelInput;

  private users: User[] = [];

  constructor(view: SearchUserPresenterOutput, model: SearchUserModelInput) {
    this.view = view;
    this.model = model;
  }

  async didTapSearchButton(text: string) {
    try {
      this.users = await this.model.fetchUser(text);
      this.view.updateUsers(this.users);
    } catch (e) {
      console.error(e);
    }
  }
}
