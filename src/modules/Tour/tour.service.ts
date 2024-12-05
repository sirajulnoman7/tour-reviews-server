import TTour from "./tour.interface";
import tourModel from "./tour.model";

const createTour = async (payload: TTour) => {
  const result = await tourModel.create(payload);
  return result;
};

export const tourServices = {
  createTour,
};
