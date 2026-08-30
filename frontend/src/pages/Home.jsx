import { Link } from "react-router-dom";
import { FaPaw, FaHeart, FaHome } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <section className="bg-light py-5">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display-4 fw-bold">
                Find Your Perfect
                <span className="text-warning"> Best Friend </span>
              </h1>
              <p className="lead text-muted my-4">Give a loving pet a second chance and find your perfect companion.</p>
              <Link to="/pets" className="btn btn-warning btn-lg me-2"><FaPaw className="me-2" />Explore Pets</Link>
              <Link to="/favorites" className="btn btn-outline-dark btn-lg"><FaHeart className="me-2" />Favorites</Link>
            </div>

            <div className="col-md-6 mt-4 mt-md-0">
              <img
                className="img-fluid rounded shadow"
                src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1000"
                alt="Pets"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="text-center mb-5">
          <h2>Why Adopt With Us?</h2>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card text-center h-100 shadow-sm p-4">
              <FaPaw className="fs-1 text-warning mb-3 mx-auto" />
              <h4>Find Pets</h4>
              <p>Browse different pets and find your perfect companion.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card text-center h-100 shadow-sm p-4">
              <FaHeart className="fs-1 text-danger mb-3 mx-auto" />
              <h4>Save Favorites</h4>
              <p>Save pets you love and view them anytime.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card text-center h-100 shadow-sm p-4">
              <FaHome className="fs-1 text-success mb-3 mx-auto" />
              <h4>Give Them a Home</h4>
              <p>Submit an adoption request and give a pet a loving home.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;