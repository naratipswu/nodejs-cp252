const categories = [];

const getCategories = (req, res) => {
  res.json({ categories: categories.length ? categories : ['unknown'] });

};

// Implement other controllers related to categories

module.exports = {
  getCategories,
  // Export other category controllers
};
