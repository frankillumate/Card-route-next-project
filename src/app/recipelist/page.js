import RecipeList from '@/components/recipe-list-re/index.js';
import React from 'react'

async function FetchListOfRecipe(){
    try{

        const apiResponse = await fetch('https://dummyjson.com/recipes')
        const data = await apiResponse.json()
        
        return data?.recipes;
    }catch(e){
        console.error(e)
        throw new Error('Failed to fetch recipes')
    }
}


async function Recipes() {

    const recipeList = await FetchListOfRecipe()
   return (
     <RecipeList recipeList ={recipeList}/> 
  )
}

export default Recipes