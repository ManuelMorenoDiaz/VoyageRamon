const Category = require('../models/categories.js');

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: 'Categoria no encontrada' });
    }
    res.json(category);
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createCategory = async (req, res) => {
  const {titulo, imagen, video, descripcion} = req.body;
   
  try{
      const newCategory = new Category({
        titulo, 
        imagen, 
        video, 
        descripcion
      });
      const savedCategory = await newCategory.save();
      res.json(savedCategory);

    } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCategory = async (req, res) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate( req.params.id, {
      titulo, 
      imagen, 
      video, 
      descripcion
  
    }, { new: true });
    if (!updatedCategory) {
      return res.status(404).json({ message: 'Categoria no encontrada' });
    }
    res.json(updatedCategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete( req.params.id);
    if (!deletedCategory) {
      return res.status(404).json({ message: 'Categoria no encontrada' });
    }
    res.json({ message: 'Categoria eliminada correctamente' });
  } catch (error) {
    
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory
}