import Product from "../interfaces/Product";
import chair from "../assets/chair.png";
import sofa from "../assets/chair.png";

const products: Product[] = [
  {
    id: "1",
    category: "chair",
    imageUrl: chair,
    price: 100,
    productName: "Riven Chair",
    avgRating: 4.7,
    reviews: [
      {
        id: "101",
        rating: 5,
        text: "Beautiful chair and very comfortable.",
      },
      {
        id: "102",
        rating: 4.5,
        text: "Great quality! Worth the price.",
      },
    ],
    description:
      "The Riven Chair is a stylish and comfortable addition to any room.",
  },
  {
    id: "2",
    category: "chair",
    imageUrl: chair,
    price: 150,
    productName: "Fake Chair 1",
    avgRating: 4.5,
    reviews: [
      {
        id: "201",
        rating: 4.5,
        text: "Comfortable and stylish!",
      },
      {
        id: "202",
        rating: 5,
        text: "Love it! Great quality.",
      },
    ],
    description: "This is a comfortable and stylish chair for your home.",
  },
  {
    id: "3",
    category: "chair",
    imageUrl: chair,
    price: 180,
    productName: "Fake Chair 2",
    avgRating: 3.8,
    reviews: [
      {
        id: "301",
        rating: 3.5,
        text: "Decent chair, but could be better.",
      },
      {
        id: "302",
        rating: 4,
        text: "Good value for the price.",
      },
    ],
    description: "A decent chair that offers good value for the price.",
  },
  {
    id: "4",
    category: "chair",
    imageUrl: chair,
    price: 220,
    productName: "Fake Chair 3",
    avgRating: 4.2,
    reviews: [
      {
        id: "401",
        rating: 4.5,
        text: "Very comfortable and sturdy.",
      },
      {
        id: "402",
        rating: 3.5,
        text: "Looks nice, but assembly was a bit difficult.",
      },
    ],
    description:
      "This chair is very comfortable and provides excellent support.",
  },
  {
    id: "5",
    category: "chair",
    imageUrl: chair,
    price: 80,
    productName: "Fake Chair 4",
    avgRating: 4.1,
    reviews: [
      {
        id: "501",
        rating: 4,
        text: "Great price for a simple chair.",
      },
      {
        id: "502",
        rating: 4.5,
        text: "Happy with the purchase.",
      },
    ],
    description: "A simple yet functional chair at an affordable price.",
  },
  {
    id: "6",
    category: "chair",
    imageUrl: chair,
    price: 120,
    productName: "Fake Chair 5",
    avgRating: 4.6,
    reviews: [
      {
        id: "601",
        rating: 5,
        text: "Elegant design and comfortable.",
      },
      {
        id: "602",
        rating: 4.5,
        text: "Good customer service.",
      },
    ],
    description:
      "An elegant chair that provides a touch of sophistication to any space.",
  },
  {
    id: "7",
    category: "chair",
    imageUrl: chair,
    price: 190,
    productName: "Fake Chair 6",
    avgRating: 4.3,
    reviews: [
      {
        id: "701",
        rating: 4,
        text: "Nice chair, but could use more cushioning.",
      },
      {
        id: "702",
        rating: 4.5,
        text: "Sturdy and well-built.",
      },
    ],
    description:
      "A nice chair with a sturdy construction, though it could be more cushioned.",
  },
  {
    id: "8",
    category: "chair",
    imageUrl: chair,
    price: 160,
    productName: "Fake Chair 7",
    avgRating: 4.4,
    reviews: [
      {
        id: "801",
        rating: 4.5,
        text: "Really like the color and texture.",
      },
      {
        id: "802",
        rating: 4.5,
        text: "Fits perfectly in my living room.",
      },
    ],
    description:
      "A stylish and comfortable chair that complements any interior design.",
  },
  {
    id: "9",
    category: "chair",
    imageUrl: chair,
    price: 250,
    productName: "Fake Chair 8",
    avgRating: 4.9,
    reviews: [
      {
        id: "901",
        rating: 5,
        text: "Absolutely in love with this chair!",
      },
      {
        id: "902",
        rating: 5,
        text: "Excellent craftsmanship and materials.",
      },
    ],
    description:
      "An exquisite chair crafted with attention to detail and using high-quality materials.",
  },
  {
    id: "10",
    category: "sofa",
    imageUrl: sofa,
    price: 350,
    productName: "Fake Sofa 1",
    avgRating: 4.7,
    reviews: [
      {
        id: "1001",
        rating: 4.5,
        text: "Very comfortable and spacious.",
      },
      {
        id: "1002",
        rating: 5,
        text: "The perfect sofa for relaxation.",
      },
    ],
    description:
      "This sofa offers both comfort and style, making it an excellent addition to any living room.",
  },
  {
    id: "11",
    category: "sofa",
    imageUrl: sofa,
    price: 280,
    productName: "Fake Sofa 2",
    avgRating: 4.6,
    reviews: [
      {
        id: "1101",
        rating: 5,
        text: "Extremely satisfied with this sofa.",
      },
      {
        id: "1102",
        rating: 4.5,
        text: "Good value for money.",
      },
    ],
    description:
      "A budget-friendly sofa that does not compromise on quality or comfort.",
  },
  {
    id: "12",
    category: "sofa",
    imageUrl: sofa,
    price: 400,
    productName: "Fake Sofa 3",
    avgRating: 4.3,
    reviews: [
      {
        id: "1201",
        rating: 4,
        text: "Looks great, but cushions could be firmer.",
      },
      {
        id: "1202",
        rating: 4.5,
        text: "Beautiful design and good customer service.",
      },
    ],
    description:
      "A visually stunning sofa, though some may prefer firmer cushions.",
  },
  {
    id: "13",
    category: "sofa",
    imageUrl: sofa,
    price: 500,
    productName: "Fake Sofa 4",
    avgRating: 4.8,
    reviews: [
      {
        id: "1301",
        rating: 5,
        text: "Luxurious and comfortable.",
      },
      {
        id: "1302",
        rating: 5,
        text: "Worth every penny.",
      },
    ],
    description: "Indulge in luxury with this sumptuous and comfortable sofa.",
  },
  {
    id: "14",
    category: "sofa",
    imageUrl: sofa,
    price: 420,
    productName: "Fake Sofa 5",
    avgRating: 4.2,
    reviews: [
      {
        id: "1401",
        rating: 4,
        text: "Good sofa, but assembly instructions could be clearer.",
      },
      {
        id: "1402",
        rating: 4.5,
        text: "Satisfied with the purchase.",
      },
    ],
    description:
      "A good sofa that could benefit from clearer assembly instructions.",
  },
  {
    id: "15",
    category: "sofa",
    imageUrl: sofa,
    price: 380,
    productName: "Fake Sofa 6",
    avgRating: 4.4,
    reviews: [
      {
        id: "1501",
        rating: 4.5,
        text: "The perfect sofa for lounging.",
      },
      {
        id: "1502",
        rating: 4.5,
        text: "Stylish and comfortable.",
      },
    ],
    description:
      "This sofa strikes the perfect balance between style and comfort.",
  },
  {
    id: "16",
    category: "sofa",
    imageUrl: sofa,
    price: 320,
    productName: "Fake Sofa 7",
    avgRating: 4.6,
    reviews: [
      {
        id: "1601",
        rating: 5,
        text: "Highly recommended!",
      },
      {
        id: "1602",
        rating: 4.5,
        text: "Looks even better in person.",
      },
    ],
    description: "A highly recommended sofa that is sure to impress.",
  },
  {
    id: "17",
    category: "sofa",
    imageUrl: sofa,
    price: 450,
    productName: "Fake Sofa 8",
    avgRating: 4.0,
    reviews: [
      {
        id: "1701",
        rating: 4,
        text: "Decent sofa for the price.",
      },
      {
        id: "1702",
        rating: 4,
        text: "Could be more comfortable.",
      },
    ],
    description: "A decent sofa option at an affordable price point.",
  },
];

export default products;
