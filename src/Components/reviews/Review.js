import people_reviews from "./people_reviews"
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
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
}