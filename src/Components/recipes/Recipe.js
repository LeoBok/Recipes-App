import "./singleRecipe.css"

const Recipe = ({ recipe }) => {

    const { title, image, name, sourceUrl } = recipe;

    return (
        <div className="recipe-box">
            <h1>{title}</h1>
            <img
                src={image}
                alt={name}
            />
            <a href={sourceUrl} target='_blank' rel="noopener noreferrer">
                <button>Go to Recipe</button>
            </a>
        </div>
    )
}

export default Recipe