import { useState } from "react"
import { FcSearch } from "react-icons/fc";
import RadioBtnComponent from "./RadioBtnComponent"
import Recipe from "./Recipe";
import './recipes.css'

const Recipes = () => {

    const apiKey = 'ffd557c43fce496b88b82a49549d528b'

    const cuisineArray = [
        {name:'american', id:1},
        {name:'british', id:2},
        {name:'chinese', id:3},
        {name:'french', id:4},
        {name:'german', id:5},
        {name:'indian', id:6},
        {name:'italian', id:7},
        {name:'japanese', id:8},
        {name:'mexican', id:9},
        {name:'spanish', id:10},
    ]

    const dietArray = [
        {name:'gluten-free', id:1},
        {name:'vegetarian', id:2},
        {name:'lacto-vegetarian', id:3},
        {name:'vegan', id:4},
    ]

    // created a cuisine state which will be stored in the fetchData func 
    // and change based on the cuisine selected
    const [cuisine, setCuisine] = useState()

    // created a diet state which will be stored in the fetchData func 
    // and change based on the diet selected
    const [diet, setDiet] = useState()

    // created a query state which will be stored in the fetchData func 
    // and change based on the searched recipe in the input field
    const [query, setQuery] = useState('')

    // set the recipes state initially as an empty array
    const [recipes, setRecipes] = useState([])

    // fetch the data from server and update the recipes state with the fetched data
    const fetchData = async() => {
        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&excludeIngredients=meat&query=${query}&cuisine=${cuisine}&diet=${diet}&addRecipeInformation=true&number=15`)

            if (!response.ok) throw Error('Did not received expected data')

            const data = await response.json()

            setRecipes(data.results)

            setFetchError(null)

        } catch (err) {
            setFetchError(err.message)
        }
    }

    // data'll be fetched at every button click
    const handleClick = () => {
        fetchData()
    }

    return (
        <div></div>
    )
}

export default Recipes