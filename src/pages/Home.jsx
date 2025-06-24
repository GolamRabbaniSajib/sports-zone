import { Link, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import ActiveSlider from "../components/ActiveSlider";
import ItemCard from "../components/ItemCard";

const Home = () => {
  const items = useLoaderData();

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="w-11/12 mx-auto px-2 sm:px-4">
      <Helmet>
        <title>Sport | Home</title>
      </Helmet>

      {/* Slider */}
      <motion.div variants={fadeInUp} initial="hidden" animate="visible">
        <ActiveSlider />
      </motion.div>

      {/* Offer Section */}
      <motion.section
        className="pt-28 space-y-6 text-center"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text">
          €/£10 Off Your First Order
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-base sm:text-lg">
          Sign up to our newsletter and get €/£10 off your first order of
          €/£100 or more. Be the first to know about new product arrivals,
          exclusive offers, and the latest news from AllSportStore.
        </p>
        <Link to="/auth/login">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-400 to-teal-400 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-blue-400/50"
          >
            Join Now
          </motion.button>
        </Link>
      </motion.section>

      {/* Categories */}
      <motion.section
        className="pt-28"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text">
          Product Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            { name: "Cricket", img: "https://i.ibb.co.com/rZ02hv7/photo-1531415074968-036ba1b575da.jpg" },
            { name: "Football", img: "https://i.ibb.co.com/ykYRMwL/photo-1486286701208-1d58e9338013.jpg" },
            { name: "Golf", img: "https://i.ibb.co.com/02M7DqQ/photo-1562204320-31975a5e09ce.jpg" },
            { name: "Ping Pong", img: "https://i.ibb.co.com/vDSS0qh/photo-1595428479939-064496acc26d.jpg" },
            { name: "Basketball", img: "https://i.ibb.co.com/vPcX1Rb/photo-1485395037613-e83d5c1f5290.jpg" },
            { name: "Badminton", img: "https://i.ibb.co.com/7yfMjr4/photo-1614058584275-7330e8f9929c.jpg" },
          ].map(({ name, img }, i) => (
            <motion.div
              key={name}
              custom={i}
              variants={fadeInUp}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-all flex flex-col items-center"
            >
              <img src={img} alt={name} className="w-20 h-20 object-cover rounded-full mb-3" />
              <h3 className="text-lg font-semibold">{name}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Latest Products */}
      <motion.section
        className="pt-28"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text">
          Latest Products
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div key={item._id} custom={i} variants={fadeInUp}>
              <ItemCard item={item} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* User Reviews */}
      <motion.section
        className="pt-28 pb-16"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text">
          Our User Reviews
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {["Frances Wagner", "Becky Lance", "Harry"].map((name, i) => (
            <motion.div
              key={name}
              custom={i}
              variants={fadeInUp}
              className="bg-white border border-gray-200 rounded-xl shadow-md p-6 text-center"
            >
              <img
                src={`https://i.pravatar.cc/150?img=${i + 10}`}
                alt={name}
                className="w-24 h-24 rounded-full object-cover border-4 border-white mx-auto shadow"
              />
              <h3 className="text-lg font-semibold mt-4">{name}</h3>
              <p className="text-sm text-gray-500">Member</p>
              <p className="mt-4 text-gray-700 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
                ligula id elit consequat aliquet.
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Home;