const Section = ({ paragraph, image, className }) => {
    return (
        <section className={ className }>
            { paragraph }
            { image }
        </section>
    )
}

export default Section