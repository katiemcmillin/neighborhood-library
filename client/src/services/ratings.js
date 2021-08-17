import api from "./api-config";
//Front end API requests
export const getAllRatings = async () => {
  const resp = await api.get("/ratings");
  return resp.data;
};

export const getOneRating = async (id) => {
  const resp = await api.get(`/ratings/${id}`);
  return resp.data;
};

export const postRating = async (ratingData) => {
  const resp = await api.post("/ratings", { rating: ratingData });
  return resp.data;
};
