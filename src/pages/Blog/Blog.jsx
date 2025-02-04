import React, { useState } from "react";

const Blog = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const posts = [
    {
      id: 1,
      title: "Top 5 Running Shoes for 2025",
      image:
        "https://demo.posthemes.com/pos_sneaker/138-large_default/nike-air-max-270.jpg",
      description:
        "Check out our top picks for the best running shoes this year, designed for performance and comfort. These shoes will give you the edge you need to perform your best in 2025. Whether you're running marathons or just hitting the track, these shoes are perfect for every athlete.",
    },
    {
      id: 2,
      title: "Sneaker Trends You Need to Know",
      image:
        "https://demo.posthemes.com/pos_sneaker/139-large_default/adidas-ultraboost.jpg",
      description:
        "Stay ahead of the game with the latest sneaker trends that everyone is talking about. From vibrant colorways to innovative designs, these sneakers are setting the stage for the future of footwear fashion.",
    },
    {
      id: 3,
      title: "How to Choose the Right Basketball Shoes",
      image:
        "https://demo.posthemes.com/pos_sneaker/140-large_default/puma-rs-x.jpg",
      description:
        "Not sure which basketball shoes to buy? Here’s everything you need to know before making your choice. Understand the key features to look for, such as grip, ankle support, and durability, to ensure you make the right decision for your game.",
    },
  ];

  const openModal = (post) => {
    setSelectedPost(post);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPost(null);
  };

  return (
    <section className="bg-gray-100 py-12 lg:px-20 px-5">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Latest Shoe Blog Posts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover rounded-md mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {post.description.slice(0, 90)}...
              </p>
              <button
                onClick={() => openModal(post)}
                className="text-blue-500 mt-4 inline-block"
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && selectedPost && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-96">
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full h-56 object-cover rounded-md mb-6"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {selectedPost.title}
            </h3>
            <p className="text-gray-600 mb-4">{selectedPost.description}</p>
            <button
              onClick={closeModal}
              className="text-red-500 mt-4 inline-block hover:text-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;
