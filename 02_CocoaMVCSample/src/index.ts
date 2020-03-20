import { Model } from "./Model";
import { Controller } from "./Controller";
import { View } from "./View";

const controller = new Controller(new Model(), new View());
controller.mount();
