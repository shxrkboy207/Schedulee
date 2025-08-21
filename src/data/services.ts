export interface Service {
  id: number;
  title: string;
  category: string[];
  provider: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Criação de Logo Profissional",
    category: ["Design"],
    provider: "Ana Silva",
    price: 299,
    rating: 4.9,
    reviews: 45,
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
  },
  {
    id: 2,
    title: "Desenvolvimento de Site Responsivo",
    category: ["Tecnologia"],
    provider: "Carlos Santos",
    price: 1200,
    rating: 4.8,
    reviews: 32,
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
  },
  {
    id: 3,
    title: "Campanha Google Ads Completa",
    category: ["Marketing"],
    provider: "Maria Oliveira",
    price: 800,
    rating: 4.7,
    reviews: 28,
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
  }
];