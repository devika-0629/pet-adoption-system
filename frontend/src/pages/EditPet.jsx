import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSinglePetAPI, updatePetAPI, } from "../services/allAPI";
import { toast } from "react-toastify";

const EditPet = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [pet, setPet] = useState(null);

  const getPet = async () => {
    try {
      const result = await getSinglePetAPI(id);
      setPet(result.data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load pet");
    }
  };

  useEffect(() => {
    getPet();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await updatePetAPI(id, {
        ...pet,age: Number(pet.age),
      });

      toast.success("Pet updated successfully");
      navigate(`/pets/${id}`);
    } catch (error) {
      console.log(error);
      toast.error("Update failed");
    }
  };

  if (!pet) {
    return (
      <div className="text-center py-5">Loading...</div>
    );
  }

  return (
    <div className="container py-5">
      <div className="card shadow border-0 mx-auto" style={{ maxWidth: "800px" }}>
        <div className="card-body p-4">
          <h2 className="text-center mb-4">Edit Pet</h2>

          <form onSubmit={handleUpdate}>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Name</label>
                <input className="form-control" value={pet.name} onChange={(e) =>setPet({ ...pet, name: e.target.value })}/>
              </div>

              <div className="col-md-6">
                <label className="form-label">Type</label>
                <select className="form-select" value={pet.type} onChange={(e) =>setPet({ ...pet, type: e.target.value })}>
                  <option>Dog</option>
                  <option>Cat</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Breed</label>
                <input className="form-control" value={pet.breed} onChange={(e) =>setPet({ ...pet, breed: e.target.value })}/>
              </div>

              <div className="col-md-6">
                <label className="form-label">Age</label>
                <input type="number" className="form-control" value={pet.age} onChange={(e) =>setPet({ ...pet, age: e.target.value })}/>
              </div>

              <div className="col-md-6">
                <label className="form-label">Gender</label>
                <select className="form-select" value={pet.gender} onChange={(e) =>setPet({ ...pet, gender: e.target.value })}>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Status</label>
                <select className="form-select" value={pet.status} onChange={(e) =>setPet({ ...pet, status: e.target.value })}>
                  <option>Available</option>
                  <option>Adopted</option>
                </select>
              </div>

              <div className="col-12">
                <label className="form-label">Image URL</label>
                <input className="form-control" value={pet.image} onChange={(e) => setPet({ ...pet, image: e.target.value })}/>
              </div>

              <div className="col-12">
                <label className="form-label">Description</label>
                <textarea rows="4" className="form-control" value={pet.description} onChange={(e) =>setPet({ ...pet, description: e.target.value })}></textarea>
              </div>

              <div className="col-12 text-center">
                <button className="btn btn-warning px-5">Update Pet</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPet;