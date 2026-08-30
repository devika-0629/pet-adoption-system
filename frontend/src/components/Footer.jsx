import { FaHeart, FaPaw } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <div className="container">
        <p className="mb-1">
          <FaPaw className="text-warning me-2" />
          Pet Adoption Management System
        </p>

        <small className="text-white-50">
          Made with <FaHeart className="text-danger mx-1" /> for lovely pets 
        </small>
      </div>
    </footer>
  );
};

export default Footer;