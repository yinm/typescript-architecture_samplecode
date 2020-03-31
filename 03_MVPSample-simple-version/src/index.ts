import { SearchUserPresenter } from "./Presenter";
import { SearchUserModel } from "./Model";
import { SearchUserView } from "./View";

const view = new SearchUserView(document.getElementById("app") as HTMLElement);
const presenter = new SearchUserPresenter(view, new SearchUserModel());
view.setPresenter(presenter);
