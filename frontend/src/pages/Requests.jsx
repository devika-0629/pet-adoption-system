import { useEffect, useState } from "react";
import { getRequestsAPI, updateRequestAPI, } from "../services/allAPI";
import { toast } from "react-toastify";

const Requests = () => {
  const [requests, setRequests] = useState([])

  const getRequests = async () => {
    try {
      const result = await getRequestsAPI()
      setRequests(result.data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load requests");
    }
  }

  useEffect(() => {
    getRequests();
  }, []);

  const changeStatus = async (request, status) => {
    try {
      await updateRequestAPI(request.id, {
        ...request,status,
      });

      toast.success("Request status updated");
      getRequests();
    } catch (error) {
      toast.error("Failed to update status");
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-5">Adoption Requests </h1>

      {requests.length == 0 ? (
        <div className="text-center">
          <h4>No adoption requests yet.</h4>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Pet ID</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {requests.map((request) => (
                <tr key={request.id}>
                  <td>{request.fullName}</td>
                  <td>{request.email}</td>
                  <td>{request.phone}</td>
                  <td>{request.petId}</td>
                  <td>{request.date}</td>

                  <td>
                    <span className={`badge ${request.status == "Approved"? "bg-success": request.status == "Rejected"? "bg-danger": "bg-warning text-dark"}`}>{request.status}</span>
                  </td>

                  <td>
                    <div className="d-flex gap-2">
                      <button className="btn btn-success btn-sm" onClick={() =>changeStatus(request, "Approved")}>Approve</button>
                      <button className="btn btn-danger btn-sm" onClick={() =>changeStatus(request, "Rejected")}>Reject</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Requests;