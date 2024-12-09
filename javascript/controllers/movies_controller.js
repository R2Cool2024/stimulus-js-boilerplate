import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ["input", "results"]
  connect() {
    console.log("movies controller connected")
  }

  search() {
    event.preventDefault()
    this.resultsTarget.innerHTML = ""
    fetch(`http://www.omdbapi.com/?s=${this.inputTarget.value}&apikey=adf1f2d7`)
      .then(response => response.json())
      .then((data) => {
        data.Search.forEach((result) => {
          this.inputTarget.value=""
          const movieTag = `<li class="col">
            <img src="${result.Poster}" alt="${result.Title}" class="img-fluid">
          </li>`
          this.resultsTarget.insertAdjacentHTML("beforeend", movieTag)
          
        })
      })
  }
}
