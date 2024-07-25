import { Request, Response } from "express";
import CategoryModel from "../models/category.model";

// Create a new category
export default {
  async createCategory(req: Request, res: Response) {
  try {
    const { name, description } = req.body;
    const newCategory = new CategoryModel({ name, description });
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json({ error: "Error Happen" });
  }
},

// Get all categories
  async getAllCategories (req: Request, res: Response) {
    try {
      const categories = await CategoryModel.find();
      res.status(200).json(categories);
    } catch (error) {
      res.status(400).json({ error: "Error Happen" });
    }
  },

  // Get a single category by ID
  async getCategoryById (req: Request, res: Response) {
    try {
      const category = await CategoryModel.findById(req.params.id);
      if (!category) {
        return res.status(404).json({ error: "Category not found" });
      }
      res.status(200).json(category);
    } catch (error) {
      res.status(400).json({ error: "Error Happen" });
    }
  },

  // Update a category by ID
  async updateCategory (req: Request, res: Response){
    try {
      const { name, description } = req.body;
      const updatedCategory = await CategoryModel.findByIdAndUpdate(
        req.params.id,
        { name, description },
        { new: true }
      );
      if (!updatedCategory) {
        return res.status(404).json({ error: "Category not found" });
      }
      res.status(200).json(updatedCategory);
    } catch (error) {
      const err = error as Error;
      res
        .status(400)
        .json({ data: err.message, message: "Failed get all products" });
    }
  },

  // Delete a category by ID
  async deleteCategory (req: Request, res: Response){
    try {
      const deletedCategory = await CategoryModel.findByIdAndDelete(
        req.params.id
      );
      if (!deletedCategory) {
        return res.status(404).json({ error: "Category not found" });
      }
      res.status(200).json({ message: "Category deleted successfully" });
    } catch (error) {
      res.status(400).json({ error: "Error Happen" });
    }
  },
};
