import ActiveSlider from "../components/ActiveSlider";



const Home = () => {
    return (
        <div className="w-11/12 mx-auto">
            {/* slider */}
            <div>
                <ActiveSlider></ActiveSlider>
            </div>
            <section>
                <h1 className="text-3xl">Product Categories</h1>
                <div></div>
            </section>
        </div>
    );
};

export default Home;