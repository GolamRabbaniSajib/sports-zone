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
      <section className="py-11">
        <h1 className="text-3xl font-bold text-center">
          Product <span className="text-blue-500">Categories</span>
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          <div className="card">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co.com/rZ02hv7/photo-1531415074968-036ba1b575da.jpg"
                alt="Shoes"
                className="rounded-full w-24 h-24"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Cricket</h2>
            </div>
          </div>
          <div className="card ">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co.com/ykYRMwL/photo-1486286701208-1d58e9338013.jpg"
                alt="Shoes"
                className="rounded-full w-24 h-24"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Football</h2>
            </div>
          </div>
          <div className="card ">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co.com/02M7DqQ/photo-1562204320-31975a5e09ce.jpg"
                alt="Shoes"
                className="rounded-full w-24 h-24"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Golf</h2>
            </div>
          </div>
          <div className="card">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co.com/vDSS0qh/photo-1595428479939-064496acc26d.jpg"
                alt="Shoes"
                className="rounded-full w-24 h-24"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">ping pong</h2>
            </div>
          </div>
          <div className="card">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co.com/vPcX1Rb/photo-1485395037613-e83d5c1f5290.jpg"
                alt="Shoes"
                className="rounded-full w-24 h-24"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">basketball</h2>
            </div>
          </div>
          <div className="card">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co.com/7yfMjr4/photo-1614058584275-7330e8f9929c.jpg"
                alt="Shoes"
                className="rounded-full w-24 h-24"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">badminton
              </h2>
            </div>
          </div>
        </div>
      </section>
      {/* items */}
      <section>
        <h1 className="text-3xl font-bold text-center pt-4 pb-16"><span className="text-blue-500">Pro</span>ducts</h1>
        <div className="grid md:grid-cols-3 gap-4">
          {items.map((item) => (
            <ItemCard key={item._id} item={item}></ItemCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
