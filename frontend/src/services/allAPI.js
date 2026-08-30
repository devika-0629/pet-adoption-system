import apiService from "../api/apiService";
// ------------- PETS --------------

export const getAllPetsAPI = async () => {
  return await apiService("GET", "/pets", {});
};

export const getSinglePetAPI = async (id) => {
  return await apiService("GET", `/pets/${id}`, {});
};

export const addPetAPI = async (petDetails) => {
  return await apiService("POST", "/pets", petDetails);
};

export const updatePetAPI = async (id, petDetails) => {
  return await apiService("PUT", `/pets/${id}`, petDetails);
};

export const deletePetAPI = async (id) => {
  return await apiService("DELETE", `/pets/${id}`, {});
};

// ------------- FAVORITES --------------

export const getFavoritesAPI = async () => {
  return await apiService("GET", "/favorites", {});
};

export const addFavoriteAPI = async (petDetails) => {
  return await apiService("POST", "/favorites", petDetails);
};

export const deleteFavoriteAPI = async (id) => {
  return await apiService("DELETE", `/favorites/${id}`, {});
};

// ------------- ADOPTION REQUESTS --------------

export const getRequestsAPI = async () => {
  return await apiService("GET", "/adoptionRequests", {});
};

export const addRequestAPI = async (requestDetails) => {
  return await apiService(
    "POST",
    "/adoptionRequests",
    requestDetails
  );
};

export const updateRequestAPI = async (id, requestDetails) => {
  return await apiService(
    "PUT",
    `/adoptionRequests/${id}`,
    requestDetails
  );
};