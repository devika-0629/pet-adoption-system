import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllPetsAPI } from "../services/allAPI";
import { FaHeart, FaPaw } from "react-icons/fa";

const Pets = () => {
  const [pets, setPets] = useState([])
  const [search, setSearch] = useState("")
  const [type, setType] = useState("All")

  const getPets = async () => {
    const result = await getAllPetsAPI()
    setPets(result.data)
  };

  useEffect(() => {
    getPets();
  }, []);

  const filteredPets = pets.filter((pet) =>(pet.name.toLowerCase().includes(search.toLowerCase()) || pet.breed.toLowerCase().includes(search.toLowerCase())) && (type == "All" || pet.type == type))

  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4">Our Lovely Pets </h1>

      <div className="row mb-4 g-3">
        <div className="col-md-8">
          <input className="form-control" placeholder="Search pets..." value={search} onChange={(e) => setSearch(e.target.value)}/>
        </div>

        <div className="col-md-4">
          <select className="form-select" value={type} onChange={(e) => setType(e.target.value)}>
            <option value="All">All Pets</option>
            <option value="Dog">Dogs</option>
            <option value="Cat">Cats</option>
          </select>
        </div>
      </div>

      <div className="row g-4">
        {filteredPets.map((pet) => (
          <div className="col-md-6 col-lg-4" key={pet.id}>
            <div className="card h-100 shadow-sm">
              <img src={pet.image} className="card-img-top" alt={pet.name} style={{ height: "250px", objectFit: "cover" }}/>

              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h4>{pet.name}</h4>
                  <span className="badge bg-success">{pet.status}</span>
                </div>

                <p>{pet.breed}</p>
                <p>{pet.age} Years Old</p>

                <Link to={`/pets/${pet.id}`} className="btn btn-dark w-100"><FaPaw className="me-2" />View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pets;