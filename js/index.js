import dotenv from "dotenv";
dotenv.config();
import { search } from "./api";
import { appendMovies, clearMovies, setMessage } from "./ui";

(() => {
  const handleSearchButtonClick = () => {
    const searchTerm = document.getElementById("search-pane-input").nodeValue;

    clearMovies();
    setMessage("Searching, please wait.");

    search(searchTerm)
      .then((response) => {
        if (res.Response == "True") {
          console.log(res);
          appendMovies(res.Search);
          setMessage();
        } else {
          setMessage(
            "Error: Could not find any matches, please refine your search term."
          );
        }
        // console.log(response);
      })
      .catch((error) => {
        // console.log(error);
        setMessage("Unexpected error occured, please try again.");
      });
  };

  window.addEventListener("load", () => {
    document
      .getElementById("search-pane-button")
      .addEventListener("click", handleSearchButtonClick);
  });
})();
