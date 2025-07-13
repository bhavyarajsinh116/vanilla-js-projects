const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";
const formEl = document.querySelector("form");
const searchInputEl = document.getElementById("search-input");
const searchResultsEl = document.querySelector(".search-results");
const showMoreEl = document.getElementById("show-more-button");
const searchResultEl = document.getElementsByClassName("search-result");

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    searchImages();
});
let inputData = "";
let page = 1;


async function searchImages() {
    inputData = searchInputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    const responce = await fetch(url);
    const data = await responce.json();
  
   searchResultsEl.innerHTML=``;

    for (let i = 0; i < data.results.length; i++) {

        let newDiv = document.createElement("div");
        newDiv.classList.add("search-result");
        let desc = data.results[i].
            alt_description;
        let img = data.results[i].urls.regular;
        newDiv.innerHTML = ` <img
          src=${img}
          alt="image"
        />
        <a

          href=${img}
          target="_blank"
          rel="noopener noreferrer"
          >${desc}</a
        >`;
        searchResultsEl.append(newDiv);
    }
    showMoreEl.style.display="block";

    
}

showMoreEl.addEventListener("click",()=>{
    page++;
    searchImages();
})