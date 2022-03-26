import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Abstract New",
    artist: "Rachel Green",
    price:  4.65,
    rating: 4.5,
    imageUrl: "https://res.cloudinary.com/duddwta8d/image/upload/v1648081716/collection-2_knhw2x.jpg",
    categoryName: "Photography",
  },
  {
    _id: uuid(),
    title: "You are Winner",
    artist: "Junaid Qureshi",
    price:  4.85,
    rating: 4.9,
    imageUrl: "https://res.cloudinary.com/duddwta8d/image/upload/v1648081718/portrait-5_nrwqhi.jpg",
    categoryName: "Impressionism",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    price:  4.85,
    rating: 3.9,
    imageUrl: "https://res.cloudinary.com/duddwta8d/image/upload/v1648081719/portrait-7_kymgrl.jpg",
    categoryName: "PopArt",
  },
  {
    _id: uuid(),
    title: "Abstract Instrument",
    artist: "Rachel Green",
    price:  4.65,
    rating: 4.5,
    imageUrl: "https://res.cloudinary.com/duddwta8d/image/upload/v1648081716/collection-2_knhw2x.jpg",
    categoryName: "Oil Paintings",
  },
  {
    _id: uuid(),
    title: "Abstract Instrument",
    artist: "Rachel Green",
    price:  4.65,
    rating: 4.5,
    imageUrl: "https://res.cloudinary.com/duddwta8d/image/upload/v1648081715/collection-1_m3tz5h.jpg",
    categoryName: "Basel Works",
  },
  {
    _id: uuid(),
    title: "Abstract Instrument",
    artist: "Rachel Green",
    price:  4.65,
    rating: 4.5,
    imageUrl: "https://res.cloudinary.com/duddwta8d/image/upload/v1648081715/collection-3_b9ops9.jpg",
    categoryName: "Water",
  },
  {
    _id: uuid(),
    title: "Abstract Instrument",
    artist: "Rachel Green",
    price:  4.65,
    rating: 4.5,
    imageUrl: "https://res.cloudinary.com/duddwta8d/image/upload/v1648081716/portrait-1_h1pmf1.jpg",
    categoryName: "Portraits",
  }
];
