import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ["button", "link"]
  connect() {
    console.log("Hello from our first Stimulus controller");
  }

  disable() {
    console.log("I'm disabled");
    this.buttonTarget.innerText= "Bingo!";
    this.element.setAttribute("disabled", "");
    this.linkTarget.classList.remove("d-none");
  }

  reset() {
    this.buttonTarget.innerText= "click me!";
    this.element.removeAttribute("disabled");
    this.linkTarget.classList.add("d-none");
  }
}