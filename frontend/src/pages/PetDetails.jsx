import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSinglePetAPI, addFavoriteAPI } from "../services/allAPI";
import { FaArrowLeft, FaHeart, FaPaw } from "react-icons/fa";
import { toast } from "react-toastify";

const PetDetails = () => {
  const { id } = useParams()

  const [pet, setPet] = useState(null)
  const [loading, setLoading] = useState(true)

  const getPetDetails = async () => {
    try {
      const result = await getSinglePetAPI(id)
      setPet(result.data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load pet details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPetDetails();
  }, [id]);

  const handleFavorite = async () => {
    try {
      const { id, ...petData } = pet;

      await addFavoriteAPI({
        ...petData,petId: id,
      });

      toast.success(`${pet.name} added to favorites `);
    } catch (error) {
      console.log(error);
      toast.error("Could not add to favorites");
    }
  };

  if (loading) {
    return (
      <div className="container text-center py-5">
        <div className="spinner-border text-warning"></div>
        <p className="mt-3">Loading...</p>
      </div>
    );
  }

  if (!pet) {
    return (
      <div className="container text-center py-5">
        <h3>Pet Not Found </h3>
        <Link to="/pets" className="btn btn-dark mt-3">Back to Pets</Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <Link to="/pets" className="btn btn-outline-dark mb-4"><FaArrowLeft className="me-2" />Back to Pets</Link>
      <div className="card border-0 shadow">
        <div className="row g-0">
          <div className="col-md-6">
            <img src={pet.image} alt={pet.name} className="img-fluid w-100 h-100" style={{ minHeight: "450px", objectFit: "cover" }}/>
          </div>

          <div className="col-md-6">
            <div className="card-body p-4 p-md-5">
              <div className="d-flex justify-content-between align-items-center">
                <h1 className="fw-bold">{pet.name} </h1>
                <span className={`badge fs-6 ${pet.status == "Available"? "bg-success": "bg-secondary"}`}>{pet.status}</span>
              </div>

              <hr />

              <div className="row">
                <div className="col-6 mb-3">
                  <strong>Type</strong>
                  <p className="text-muted">{pet.type}</p>
                </div>

                <div className="col-6 mb-3">
                  <strong>Breed</strong>
                  <p className="text-muted">{pet.breed}</p>
                </div>

                <div className="col-6 mb-3">
                  <strong>Age</strong>
                  <p className="text-muted">{pet.age} Years</p>
                </div>

                <div className="col-6 mb-3">
                  <strong>Gender</strong>
                  <p className="text-muted">{pet.gender}</p>
                </div>
              </div>
              <h5>About {pet.name}</h5>
              <p className="text-muted">{pet.description}</p>
              <div className="d-flex gap-2 flex-wrap">
                {pet.status == "Available" && (
                  <Link to={`/adopt/${pet.id}`} className="btn btn-warning btn-lg"><FaPaw className="me-2" />Adopt Now</Link>
                )}
                <button onClick={handleFavorite} className="btn btn-outline-danger btn-lg"><FaHeart className="me-2" />Add Favorite</button>
                <Link to={`/edit-pet/${pet.id}`} className="btn btn-outline-dark btn-lg">Edit Pet</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;