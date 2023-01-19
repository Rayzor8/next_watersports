export const formatToRupiah = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "decimal",
    currency: "IDR",
  }).format(number);
};
