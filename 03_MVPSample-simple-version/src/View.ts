import {
  SearchUserPresenterInput,
  SearchUserPresenterOutput
} from "./Presenter";
import { User } from "./Model";

export class SearchUserView implements SearchUserPresenterOutput {
  private mountPoint: HTMLElement;
  private input: HTMLInputElement;
  private list: HTMLUListElement;

  private presenter!: SearchUserPresenterInput;

  constructor(mountPoint: HTMLElement) {
    this.mountPoint = mountPoint;
    this.input = mountPoint.querySelector(
      "[data-bind='input']"
    ) as HTMLInputElement;
    this.list = mountPoint.querySelector(
      "[data-bind=users]"
    ) as HTMLUListElement;

    this.mountPoint.addEventListener("submit", e => {
      e.preventDefault();
      this.presenter.didTapSearchButton(this.input.value);
    });
  }

  setPresenter(presenter: SearchUserPresenterInput) {
    this.presenter = presenter;
  }

  updateUsers(users: User[]) {
    this.list.innerHTML = "";

    users.forEach(user => {
      const img = document.createElement("img");
      img.src = user.avatar_url;
      img.height = 100;
      img.width = 100;

      const a = document.createElement("a");
      a.textContent = user.login;
      a.href = user.html_url;
      a.target = "_blank";

      const liElement = document.createElement("li");
      liElement.appendChild(img);
      liElement.appendChild(a);

      this.list.appendChild(liElement);
    });
  }
}
