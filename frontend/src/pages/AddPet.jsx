import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPetAPI } from "../services/allAPI";
import { toast } from "react-toastify";

const AddPet = () => {
  const navigate = useNavigate()

  const [pet, setPet] = useState({name: "",type: "Dog", breed: "",age: "",gender: "Male",image: "",description: "",status: "Available", });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!pet.name || !pet.breed || !pet.age || !pet.image || !pet.description
    ) {
      toast.warning("Please fill all fields");
      return;
    }

    try {
      await addPetAPI({
        ...pet,
        age: Number(pet.age),
      });

      toast.success("Pet added successfully 🐾");
      navigate("/pets");
    } catch (error) {
      console.log(error);
      toast.error("Failed to add pet");
    }
  };

  return (
    <div className="container py-5">
      <div className="card shadow border-0 mx-auto" style={{ maxWidth: "800px" }}>
        <div className="card-body p-4">
          <h2 className="text-center fw-bold mb-4">Add New Pet 🐾</h2>

          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Pet Name</label>
                <input type="text" className="form-control" value={pet.name}onChange={(e) =>setPet({ ...pet, name: e.target.value })}/>
              </div>

              <div className="col-md-6">
                <label className="form-label">Type</label>
                <select className="form-select" value={pet.type} onChange={(e) => setPet({ ...pet, type: e.target.value })}>
                  <option>Dog</option>
                  <option>Cat</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Breed</label>
                <input type="text" className="form-control" value={pet.breed} onChange={(e) => setPet({ ...pet, breed: e.target.value })}/>
              </div>

              <div className="col-md-6">
                <label className="form-label">Age</label>
                <input type="number" className="form-control" value={pet.age} onChange={(e) => setPet({ ...pet, age: e.target.value })}/>
              </div>

              <div className="col-md-6">
                <label className="form-label">Gender</label>
                <select className="form-select" value={pet.gender} onChange={(e) => setPet({ ...pet, gender: e.target.value }) }>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Status</label>
                <select className="form-select" value={pet.status} onChange={(e) => setPet({ ...pet, status: e.target.value })}>
                  <option>Available</option>
                  <option>Adopted</option>
                </select>
              </div>

              <div className="col-12">
                <label className="form-label">Image URL</label>
                <input type="text" className="form-control" value={pet.image} onChange={(e) => setPet({ ...pet, image: e.target.value })}/>
              </div>

              <div className="col-12">
                <label className="form-label">Description</label>
                <textarea className="form-control" rows="4" value={pet.description} onChange={(e) =>setPet({ ...pet, description: e.target.value })}></textarea>
              </div>

              <div className="col-12 text-center mt-4">
                <button className="btn btn-warning px-5">Add Pet </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPet;