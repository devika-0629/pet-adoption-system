import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addRequestAPI } from "../services/allAPI";
import { toast } from "react-toastify";

const AdoptionForm = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({fullName: "",email: "",phone: "",address: "",});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ( !formData.fullName || !formData.email || !formData.phone || !formData.address  ) {
      toast.warning("Please fill all fields");
      return;
    }

    try {
      await addRequestAPI({
        ...formData,petId: id,status: "Pending",date: new Date().toLocaleDateString(),
      });

      toast.success("Adoption request submitted successfully ")
      navigate("/requests");
    } catch (error) {
      console.log(error);
      toast.error("Failed to submit request");
    }
  };

  return (
    <div className="container py-5">
      <div className="card shadow border-0 mx-auto" style={{ maxWidth: "700px" }}>
        <div className="card-body p-4 p-md-5">
          <h2 className="text-center fw-bold mb-4">Adoption Request </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" value={formData.fullName} onChange={(e) =>setFormData({...formData,fullName: e.target.value,})}/>
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" value={formData.email} onChange={(e) => setFormData({...formData,email: e.target.value,})}/>
            </div>

            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input type="tel" className="form-control" value={formData.phone} onChange={(e) =>setFormData({...formData,phone: e.target.value,})}/>
            </div>

            <div className="mb-4">
              <label className="form-label">Address</label>
              <textarea rows="4" className="form-control" value={formData.address} onChange={(e) => setFormData({...formData,address: e.target.value,})}></textarea>
            </div>

            <button className="btn btn-warning w-100">Submit Adoption Request</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdoptionForm;