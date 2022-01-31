import people_reviews from "./people_reviews"
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import './review.css'
import { useState } from "react";

const Review = () => {

    const [index, setIndex] = useState(0)
    const { id, name, text, vote } = people_reviews[index]

    const checkIndex = (num) => {
        if (num > people_reviews.length - 1) {
            return 0
        }
        if (num < 0) {
            return people_reviews.length - 1
        }
        return num
    }

    const prevPerson  = () => {
        setIndex(index => {
            let newIndex = index - 1;
            return checkIndex(newIndex);
        })
    }

    const nextPerson  = () => {
        setIndex(index => {
            let newIndex = index + 1;
            return checkIndex(newIndex);
        })
    }

    <article key={ id } className="artcl-review">

        <h1>Reviews:</h1>
        <section className="sctn-review">

            <h2>user-name: { name }</h2>

            <p className="paragraph-review">“{ text }”</p>

            <p className='vote-paragraph'>vote: { vote }</p>

            <div className="button-cont">
                <button onClick={prevPerson}>
                    <BsFillArrowLeftCircleFill />
                </button>
                
                <button onClick={nextPerson}>
                    <BsFillArrowRightCircleFill />
                </button>
            </div>


        </section>

    </article>
}

export default Review