import RecipeDetailsItem from "@/components/recipedetails";
import Link from "next/link";

async function fetchRecipeDetails(currentRecipeId){
    // Fetch recipe details from API
    // Return the fetched recipe details

    try {
        const response = await fetch(`https://dummyjson.com/recipes/${currentRecipeId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const recipeDetails = await response.json();

        return recipeDetails;

    } catch (error) {
        throw new Error(error)
    }
}

export default async function ({params}){
 const getRecipeDetails  = await fetchRecipeDetails(params?.details);

    return <RecipeDetailsItem getRecipeDetails={getRecipeDetails} key={getRecipeDetails.id}/>
}