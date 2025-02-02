import { useState } from 'react';
// From Mohan Laptop
// Mock Category Data
const categories = [
  {
    id: 1,
    name: "Electronics",
    description: "Find the latest gadgets and technology.",
    image: "https://via.placeholder.com/300x300?text=Electronics",
  },
  {
    id: 2,
    name: "Fashion",
    description: "Trendy clothes and accessories for every style.",
    image: "https://via.placeholder.com/300x300?text=Fashion",
  },
  {
    id: 3,
    name: "Home & Kitchen",
    description: "Explore the best products for your home.",
    image: "https://via.placeholder.com/300x300?text=Home+%26+Kitchen",
  },
  {
    id: 4,
    name: "Books",
    description: "A wide collection of books for every reader.",
    image: "https://via.placeholder.com/300x300?text=Books",
  },
];

export default function HomePageClient() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [Result,setResult] = useState(null);

  // Handle category selection
  const exploreCategory = (category) => {
    setSelectedCategory(category);
    alert(`Exploring the ${category.name} category!`);
  };

  // Filter categories based on the search query
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-700 to-gray-300 py-10">
      <div className="container mx-auto px-6">
        {/* Search Box */}
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="Search Products..."
            className="w-1/2 p-3 rounded-xl shadow-md text-lg outline-none focus:outline-blue-300"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <h1 className="text-4xl font-extrabold text-center text-white mb-10">
          Explore Our Categories
        </h1>
        
        {/* Category Listing */}
        <div className="w-full overflow-x-scroll flex-row flex p-10">
          {filteredCategories.map((category) => (
            <div 
              key={category.id} 
              className="bg-white p-6 rounded-xl shadow-2xl hover:shadow-2xl mx-3 transition-all duration-500 ease-in-out transform hover:scale-105 cursor-pointer"
              onClick={() => exploreCategory(category)}
            >
              <div className="overflow-hidden rounded-lg">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-64 object-cover rounded-lg transition-all duration-300 ease-in-out transform hover:scale-110" 
                />
              </div>
              <div className="mt-6 text-center">
                <h2 className="text-xl font-semibold text-gray-800">{category.name}</h2>
                <p className="text-lg font-medium text-gray-600 mt-2">{category.description}</p>
                <button 
                  className="mt-4 w-full bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition duration-300 transform hover:scale-105"
                >
                  Explore {category.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Category Details */}
        {/* {selectedCategory && (
          <div className="mt-12 bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
              You are exploring the {selectedCategory.name} category!
            </h2>
            <div className="text-center">
              <p className="text-lg font-medium text-gray-600">{selectedCategory.description}</p>
            </div>
          </div>
        )} */}
        {Result && (<div className='w-full h-screen'></div>)}
      </div>
    </div>
  );
}
