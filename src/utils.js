export default (min, max) => {
  const result = Math.floor(Math.random() * (max - min + 1)) + min; // Максимум и минимум включаются
  return result;
};
