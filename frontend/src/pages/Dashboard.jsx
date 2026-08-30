import { useEffect, useState } from "react";
import { getAllPetsAPI, getFavoritesAPI, getRequestsAPI, } from "../services/allAPI";
import { FaPaw,FaHeart, FaClipboardList, FaCheckCircle, } from "react-icons/fa";

const Dashboard = () => {
  const [totalPets, setTotalPets] = useState(0)
  const [availablePets, setAvailablePets] = useState(0)
  const [favorites, setFavorites] = useState(0)
  const [requests, setRequests] = useState(0)

  const getDashboardData = async () => {
    try {
      const petsResult = await getAllPetsAPI()
      const favoritesResult = await getFavoritesAPI()
      const requestsResult = await getRequestsAPI()

      const pets = petsResult.data

      setTotalPets(pets.length)

      setAvailablePets(
        pets.filter((pet) => pet.status == "Available").length
      );

      setFavorites(favoritesResult.data.length);
      setRequests(requestsResult.data.length);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDashboardData();
  }, []);

  const cards = [
    {
      title: "Total Pets",
      value: totalPets,
      icon: <FaPaw />,
      color: "primary",
    },
    {
      title: "Available Pets",
      value: availablePets,
      icon: <FaCheckCircle />,
      color: "success",
    },
    {
      title: "Favorites",
      value: favorites,
      icon: <FaHeart />,
      color: "danger",
    },
    {
      title: "Adoption Requests",
      value: requests,
      icon: <FaClipboardList />,
      color: "warning",
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-5 text-center">Dashboard</h1>

      <div className="row g-4">
        {cards.map((card) => (
          <div className="col-md-6 col-lg-3" key={card.title}>
            <div className={`card border-0 shadow-sm bg-${card.color} text-white`}>
              <div className="card-body text-center p-4">
                <div className="fs-1 mb-3">{card.icon}</div>
                <h5>{card.title}</h5>
                <h2 className="fw-bold">{card.value}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;