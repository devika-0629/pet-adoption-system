import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFavoritesAPI, deleteFavoriteAPI,} from "../services/allAPI";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  const getFavorites = async () => {
    try {
      const result = await getFavoritesAPI();
      setFavorites(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFavorites();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteFavoriteAPI(id);
      toast.success("Removed from favorites");
      getFavorites();
    } catch (error) {
      toast.error("Failed to remove favorite");
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-5">My Favorites</h1>

      {favorites.length == 0 ? (
        <div className="text-center">
          <h4>No favorite pets yet </h4>
          <Link to="/pets" className="btn btn-warning mt-3">Explore Pets</Link>
        </div>
      ) : (
        <div className="row g-4">
          {favorites.map((pet) => (
            <div className="col-md-6 col-lg-4" key={pet.id}>
              <div className="card h-100 shadow-sm">
                <img src={pet.image} alt={pet.name} className="card-img-top" style={{ height: "250px", objectFit: "cover" }}/>
                <div className="card-body">
                  <h4>{pet.name}</h4>
                  <p>{pet.breed}</p>
                  <div className="d-flex gap-2">
                    <Link to={`/pets/${pet.petId}`} className="btn btn-dark flex-grow-1">View Details</Link>
                    <button className="btn btn-danger" onClick={() => handleDelete(pet.id)}><FaTrash /></button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;