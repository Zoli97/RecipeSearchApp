//const searchForm = document.querySelector("form");
const searchResult = document.querySelector(".search-result");
const container = document.querySelector(".container");
const search_button = document.getElementById("search-button");
var search_input_value = "";
const app_id = "d094be13";
const api_key = "5648611a7b7951f95352609860b00982	";
//base url ready to fetch it
const submitTheForm = (e)=>{
    e.preventDefault();
    //preiau valorea din input
    search_input_value = document.querySelector("input").value.trim();
    fetchAPI();
};
async function fetchAPI() {
    const base_url = `https://api.edamam.com/search?&q=${search_input_value}&app_id=${app_id}&app_key=${api_key}&to=22`;
    const response = await fetch(base_url);
    //convert my response to json
    const data_json = await response.json();
    //pass this data in our function which will generate html
    generateHTML(data_json.hits);
    console.log(data_json);
}
function generateHTML(resultsHint) {
    //the results i can map it for each result
    var generatedHTML = "";
    resultsHint.map((result)=>{
        //foreach result i will generate an item, loop thorugh every item i will generate new item for that.
        //so i creating an html item every time that i looping thourgh this array.
        //it will create the html item and it will add to my generatedhtml
        //generate dynamic image,title with js expression
        container.classList.remove("delete_placeholder");
        generatedHTML += ` <div class="item">
    <img src="${result.recipe.image}" alt="" />
    <div class="flex-container">
      <h1 class="title">${result.recipe.label}</h1>
      <a href="${result.recipe.url}" target="_blank" class="view-button">View recipe</a>
    </div>
    <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
    <p class="item-data">Diet label: ${result.recipe.dietLabels.length > 0 ? result.recipe.dietLabels : "No data found"}</p>
    
  </div>`;
    });
    //append this items in my search result div
    searchResult.innerHTML = generatedHTML;
}
search_button.addEventListener("click keydown", submitTheForm);

//# sourceMappingURL=index.7c0ccee6.js.map
