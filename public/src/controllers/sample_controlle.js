import { Controller } from "stimulus";

export default class extends Controller {
    static get targets() {
        return ["hello"];
    }

    connect() {
        this.helloTarget.innerHTML = "<h1>Hello Express & Stimulus!</h1>"
    }

}