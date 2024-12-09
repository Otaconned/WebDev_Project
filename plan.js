/* Drop zone functionality, largely referenced from W3Schools. After class on the 3rd, I also prompted CoPilot/GPT "What are some ways that this code can be improved to be more legible and have simplistic functionality? Explain in detail any changes made"
to ensure clarification and improve efficacy.*/
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

/* Taken from MealDB's API implementation, with tweaking referenced from previous assignments */
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
          recipesContainer.innerHTML = "<p>No recipes found. Why not try something vegetarian?</p>";
        }
      })
      .catch(err => {
        console.error("Error fetching recipes:", err);
        recipesContainer.innerHTML = "<p>Failed to load. Please try again later.</p>";
      });
  };

/* Taken from EmailJS' API implementation and reference docs*/
document.addEventListener('DOMContentLoaded', function () {
  emailjs.init('YOUR_PUBLIC_KEY'); 

  document.getElementById('invite-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const emailInput = document.getElementById('invite-email');
    const inviteStatus = document.getElementById('invite-status');

    emailjs.send('service_v8qv31l', 'template_ih9w9wi', {
      email: emailInput.value, 
    }).then(
      function () {
        inviteStatus.textContent = 'Invite sent successfully!';
        inviteStatus.style.color = 'green';
        emailInput.value = '';
      },
      function (error) {
        console.error('Failed to send invitation:', error);
        inviteStatus.textContent = 'Failed to send invitation. Please try again later.';
        inviteStatus.style.color = 'red';
      }
    );
  });
});

