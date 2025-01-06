import { useLoaderData } from "react-router-dom";
import ActiveSlider from "../components/ActiveSlider";
import ItemCard from "../components/ItemCard";
import { Bounce, Flip, Slide } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const items = useLoaderData();
  return (
    <div className="w-11/12 mx-auto">
      <Helmet>
        <title>Sport | Home</title>
      </Helmet>
      {/* slider */}
      <div>
        <ActiveSlider></ActiveSlider>
      </div>
      <Bounce>
        <section className="py-6 space-y-3">
          <h1 className="text-3xl font-bold text-center text-green-400">
            €/£10 off your first order
          </h1>
          <p className="text-center">
            Sign up to our newsletter and get €/£10 off your first order when
            you spend €/£100 or more! Plus, be the first to know about new
            product arrivals, exclusive offers, and the latest news from
            AllSportStore. Discount not applicable on sale items or promotions.
          </p>
          <div className="flex justify-center items-center">
            <button className="bg-blue-500 text-white font-medium py-3 px-8 rounded-lg shadow-md transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-blue-500/50">
              Join Now
            </button>
          </div>
        </section>
      </Bounce>
      {/* category */}
      <Slide>
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
                <h2 className="card-title">badminton</h2>
              </div>
            </div>
          </div>
        </section>
      </Slide>
      {/* items */}
        <section>
          <h1 className="text-3xl font-bold text-center pt-4 pb-16">
            <span className="text-blue-500">Pro</span>ducts
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map((item) => (
              <ItemCard key={item._id} item={item}></ItemCard>
            ))}
          </div>
        </section>
      <Slide>
        <section>
          <div className=" min-h-screen my-4 py-4">
            <div
              className="py-4 space-y-2"
            >
              <h1 className="text-4xl font-semibold text-center">
                {" "}
                <span className="text-blue-500">Our </span>
                User <span className="text-blue-500">Reviews</span>
              </h1>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 py-5">
              <div
                className="max-w-sm mx-auto border border-gray-200 rounded-xl shadow-md overflow-hidden"
              >
                <div className="p-6 flex flex-col items-center">
                  <img
                    src="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                  />

                  <div className="text-center mt-4">
                    <h2 className="text-lg font-semibold ">
                      Frances Wagner
                    </h2>
                    <p className="text-sm ">Member</p>
                  </div>

                  <div className="text-blue-500 text-4xl mt-4">
                    <span>“</span>
                  </div>

                  <p className=" mt-2 px-4 text-center">
                    The career website offers a user-friendly interface with
                    comprehensive resources for job seekers. The search
                    functionality is intuitive, facilitating easy access to
                    relevant job listings and career advice. Overall, it is a
                    valuable tool for anyone looking to advance their
                    professional journey
                  </p>
                </div>
              </div>

              <div
                className="max-w-sm mx-auto border border-gray-200 rounded-xl shadow-md overflow-hidden"
              >
                <div className="p-6 flex flex-col items-center">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                  />

                  <div className="text-center mt-4">
                    <h2 className="text-lg font-semibold ">
                      Becky Lance
                    </h2>
                    <p className="text-sm ">Member</p>
                  </div>

                  <div className="text-blue-500 text-4xl mt-4">
                    <span>“</span>
                  </div>

                  <p className=" mt-2 px-4 text-center">
                    Fantastic platform! The user interface is clean and
                    straightforward, making it easy to search and apply for
                    jobs. I particularly appreciate the personalized
                    recommendations, which align perfectly with my skills and
                    career goals. The additional resources, like webinars and
                    skill-building courses, are a nice bonus. It's clear the
                    team behind this website understands what job seekers need.
                    I’ve already recommended it to friends and colleagues!
                  </p>
                </div>
              </div>
              <div
                className="max-w-sm mx-auto  border border-gray-200 rounded-xl shadow-md overflow-hidden"
              >
                <div className="p-6 flex flex-col items-center">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                  />

                  <div className="text-center mt-4">
                    <h2 className="text-lg font-semibold ">
                      Harry
                    </h2>
                    <p className="text-sm ">Member</p>
                  </div>

                  <div className="text-blue-500 text-4xl mt-4">
                    <span>“</span>
                  </div>

                  <p className=" mt-2 px-4 text-center">
                    This career website has exceeded my expectations! It’s not
                    just about job listings—the career advice articles and tips
                    for improving your resume have been invaluable. The advanced
                    search filters save so much time, and I’ve found roles I
                    never would’ve considered before. The site also offers
                    salary insights and company reviews, which gave me
                    confidence during interviews. Thanks to this platform, I
                    landed my dream job in just two months!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Slide>
    </div>
  );
};

export default Home;
