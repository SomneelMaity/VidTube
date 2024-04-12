export const API_KEY = "AIzaSyCCRhq5zHS2r2OP6vU8dj2CDxUB7dCfd4U";

export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
