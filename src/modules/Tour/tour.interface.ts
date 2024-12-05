type TTour = {
  name: string;
  price: number;
  description: string;
  imageCover: string;
  images: string[];
  video: string;
  ratingAverage: number;
  ratingQuantity: number;
  duration: number;
  totalSeats: number;
  difficulty: string;
  startDates: Date[];
  categories: string[];
  languages: string[];
};

export default TTour;
