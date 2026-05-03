export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number; // in sqft
  type: string;
  image: string;
  featured: boolean;
  description: string;
  amenities: string[];
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Modern Forest Villa",
    price: 1250000,
    location: "Evergreen Hills, WA",
    bedrooms: 4,
    bathrooms: 3,
    area: 3200,
    type: "Villa",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    description: "Experience luxury living surrounded by nature in this modern forest villa. Features open-concept design, floor-to-ceiling windows, and premium finishes throughout.",
    amenities: ["Private Pool", "Smart Home System", "Forest View", "2-Car Garage"]
  },
  {
    id: "2",
    title: "Earth-Toned Eco Home",
    price: 850000,
    location: "Sedona, AZ",
    bedrooms: 3,
    bathrooms: 2,
    area: 2400,
    type: "House",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    description: "A beautiful sustainable home built with natural materials. Features solar panels, a rainwater harvesting system, and beautiful desert landscaping.",
    amenities: ["Solar Panels", "Energy Efficient", "Patio", "Mountain View"]
  },
  {
    id: "3",
    title: "Luxury Urban Penthouse",
    price: 2100000,
    location: "Downtown Metro",
    bedrooms: 3,
    bathrooms: 3.5,
    area: 4100,
    type: "Penthouse",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    description: "Stunning panoramic city views from this top-floor penthouse. Includes a private rooftop terrace, chef's kitchen, and dedicated elevator access.",
    amenities: ["Rooftop Terrace", "Concierge", "Gym Access", "City View"]
  },
  {
    id: "4",
    title: "Cozy Suburban Retreat",
    price: 650000,
    location: "Maplewood District",
    bedrooms: 4,
    bathrooms: 2.5,
    area: 2800,
    type: "House",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    description: "Perfect family home in a quiet neighborhood. Features a large backyard, renovated kitchen, and proximity to top-rated schools.",
    amenities: ["Large Backyard", "Fireplace", "Renovated Kitchen", "Near Schools"]
  },
  {
    id: "5",
    title: "Riverside Estate",
    price: 3400000,
    location: "River Bend, OR",
    bedrooms: 5,
    bathrooms: 4.5,
    area: 5500,
    type: "Estate",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
    description: "Magnificent estate with direct river access. Includes a private dock, guest house, and expansive grounds perfect for entertaining.",
    amenities: ["Private Dock", "Guest House", "Home Theater", "Wine Cellar"]
  },
  {
    id: "6",
    title: "Minimalist Townhome",
    price: 520000,
    location: "Artisan Quarters",
    bedrooms: 2,
    bathrooms: 2,
    area: 1600,
    type: "Townhome",
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
    description: "Sleek and modern townhome in a vibrant cultural district. Features high ceilings, exposed brick, and a walk-out balcony.",
    amenities: ["Balcony", "High Ceilings", "Walk-in Closet", "Pet Friendly"]
  }
];
