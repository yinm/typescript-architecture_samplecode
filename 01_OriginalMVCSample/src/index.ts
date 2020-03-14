import { Model } from "./Model";
import { Controller } from "./Controller";
import { View } from "./View";

const model = new Model();
const view = new View(model, new Controller(model));

view.registerModel();
