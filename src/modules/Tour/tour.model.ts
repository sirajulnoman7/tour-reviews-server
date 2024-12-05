import { model, Schema } from "mongoose";
import TTour from "./tour.interface";

const createTour = new Schema<TTour>(
  {
    name: { type: String, require: [true, "please enter your name"] },

    price: { type: Number, require: [true, "please enter your price"] },
    description: {
      type: String,
      require: [true, "please enter your description"],
    },

    imageCover: {
      type: String,
      require: [true, "please enter your imageCover"],
    },
    images: { type: [String], require: [true, "please enter your images"] },
    video: { type: String, require: [true, "please enter your video"] },
    ratingAverage: {
      type: Number,
      require: [true, "please enter your ratingAverage"],
    },
    ratingQuantity: {
      type: Number,
      require: [true, "please enter your ratingQuantity"],
    },
    duration: { type: Number, require: [true, "please enter your duration"] },
    totalSeats: {
      type: Number,
      require: [true, "please enter your maxGroupSize"],
    },
    difficulty: {
      type: String,
      require: [true, "please enter your difficulty"],
    },
    startDates: {
      type: [Date],
      require: [true, "please enter your startDates"],
    },
    categories: {
      type: [String],
      require: [true, "please enter your categories"],
    },
    languages: {
      type: [String],
      require: [true, "please enter your languages"],
    },
  },
  {
    timestamps: true,
  }
);

const tourModel = model<TTour>("tour", createTour);
export default tourModel;
