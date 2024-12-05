import { useLoaderData } from "react-router-dom";
import ActiveSlider from "../components/ActiveSlider";
import ItemCard from "../components/ItemCard";



const Home = () => {
    const items = useLoaderData();
    return (
        <div className="w-11/12 mx-auto">
            {/* slider */}
            <div>
                <ActiveSlider></ActiveSlider>
            </div>
            {/* category */}
            <section>
                <h1 className="text-3xl">Product Categories</h1>
                <div>

                </div>
            </section>
            {/* items */}
            <section>
                <h1>{items.length}</h1>
                <div>
                    {
                        items.map(item => <ItemCard key={item._id} item={item}></ItemCard>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;