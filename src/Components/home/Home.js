const Home = () => {
    return (
        <main className='home'>
            <Section
                className='section intro-sec'

                paragraph={
                    <p>My Veggie site is the website where you can search for 
                        vegetarian and vegan recipes to customize your diet,
                        according to your <span>tastes and needs.</span>
                    </p>
                }
                image={
                    <img
                        src={turnip}
                        className='image home-img'
                        alt='a smiling turnip'
                    />
                }
            />

            <Section
                className='section descript-sec'

                paragraph={
                    <p>Why should you use My Veggie site?<br></br>
                        It's simple to use, it's fast and I think,
                        is very pretty designed
                    </p>
                }

                image={
                    <img
                        src={chili}
                        className='image home-img'
                        alt='two chili'
                    />
                }
            />
        </main>
    )
}

export default Home