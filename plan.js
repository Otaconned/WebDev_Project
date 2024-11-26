document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("searchRecipes").addEventListener("click", fetchRecipes);
  
    document.querySelectorAll(".drop").forEach(zone => {
      zone.addEventListener("dragover", (e) => e.preventDefault());
      zone.addEventListener("drop", (e) => {
        e.preventDefault();
        const mealData = JSON.parse(e.dataTransfer.getData("application/json"));
        zone.innerHTML = `
          <h3>${mealData.name}</h3>
          <p><strong>Category:</strong> ${mealData.category}</p>
          <p><strong>Area:</strong> ${mealData.area}</p>
          <img src="${mealData.image}" alt="${mealData.name}" class="drop-img">
        `;
      });
    });
  });
  
  function fetchRecipes() {
    const mealLookup = document.getElementById("mealLookup").value.trim(); // Get user input
    const recipesContainer = document.querySelector(".recipes");
    recipesContainer.innerHTML = ""; 
  
    const query = mealLookup ? `search.php?s=${mealLookup}` : `search.php?s=Arrabiata`;
  
    fetch(`https://www.themealdb.com/api/json/v1/1/${query}`)
      .then(response => {
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
      })
      .then(data => {
        if (data.meals) {
          data.meals.forEach(meal => {
            const recipeDiv = document.createElement("div");
            recipeDiv.classList.add("recipe");
            recipeDiv.setAttribute("draggable", "true");
  
            recipeDiv.dataset.meal = JSON.stringify({
              name: meal.strMeal,
              category: meal.strCategory,
              area: meal.strArea,
              image: meal.strMealThumb,
            });
  
            recipeDiv.innerHTML = `
              <h3>${meal.strMeal}</h3>
              <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="recipe-img">
            `;

            recipeDiv.addEventListener("dragstart", (e) => {
              e.dataTransfer.setData("application/json", recipeDiv.dataset.meal);
            });
  
            recipesContainer.appendChild(recipeDiv);
          });
        } else {
          recipesContainer.innerHTML = "<p>No recipes found. Try a different query.</p>";
        }
      })
      .catch(err => {
        console.error("Error fetching recipes:", err);
        recipesContainer.innerHTML = "<p>Failed to load recipes. Please try again later.</p>";
      });
  };