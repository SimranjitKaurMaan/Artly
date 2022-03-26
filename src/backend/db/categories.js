import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Photography",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
    artworksCount: 12,
    imageUrl: "https://res.cloudinary.com/duddwta8d/image/upload/v1648081716/collection-2_knhw2x.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Impressionism",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
    artworksCount: 20,
    imageUrl: "https://res.cloudinary.com/duddwta8d/image/upload/v1648081718/portrait-5_nrwqhi.jpg"   
  },
  {
    _id: uuid(),
    categoryName: "PopArt",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
    artworksCount: 16,
    imageUrl: "https://res.cloudinary.com/duddwta8d/image/upload/v1648081719/portrait-7_kymgrl.jpg"   
  },
];
