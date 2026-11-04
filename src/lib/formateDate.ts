

const formatDate = (date: string) => {
  if (!date) return "Not available";

  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};


export default formatDate ;