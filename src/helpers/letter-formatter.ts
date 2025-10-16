export const makeBigFirstLetter = (city: string): string => {
  if (!city) return "Your Location";
  const regex = /\p{L}+/gu;
  const words = city.match(regex) || [];
  return words
    .map(
      (word) => word[0].toLocaleUpperCase() + word.slice(1).toLocaleLowerCase()
    )
    .join(" ");
};
