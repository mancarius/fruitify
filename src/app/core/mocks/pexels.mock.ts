import { Photo, PhotosWithTotalResults } from "pexels";

export const PEXELS_MOCK_PHOTO: Photo = {
  id: 3573351,
  width: 3066,
  height: 3968,
  url: "https://www.pexels.com/photo/trees-during-day-3573351/",
  photographer: "Lukas Rodriguez",
  photographer_url: "https://www.pexels.com/@lukas-rodriguez-1845331",
  photographer_id: "1845331",
  alt: "green leafed trees during daytime",
  avg_color: "#5A5A5A",
  src: {
    original:
      "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png",
    large2x:
      "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    large:
      "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=650&w=940",
    medium:
      "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=350",
    small:
      "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=130",
    portrait:
      "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    landscape:
      "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    tiny: "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  },
  liked: false,
};

export const PEXELS_MOCK_API_RESPONSE: PhotosWithTotalResults = {
  total_results: 10000,
  page: 1,
  per_page: 1,
  photos: [
    PEXELS_MOCK_PHOTO
  ],
  next_page: 2,
};
