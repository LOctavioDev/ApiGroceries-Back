import productDao from "../dao/products.dao.js";
import Products from "../models/products.model.js";

export const getAllProducts = (req, res) => {
  productDao
    .getAll()
    .then((products) => {
      res.json(products); // Devolver los productos como JSON
    })
    .catch((err) => {
      res.status(500).json({ error: err.message }); // Devolver un objeto JSON con el mensaje de error en caso de que falle la consulta
    });
};


export const getOneProduct = (req, res) => {
  const productId = req.params.bc;
  productDao
    .getOne(productId)
    .then((product) => {
      if (product) {
        res.json(product); // Devolver el producto como JSON si se encuentra
      } else {
        res.status(404).json({
          error: "Product not found", // Devolver un mensaje de error si el producto no se encuentra
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: "Server unavailable", // Devolver un mensaje de error si ocurre algún error en el servidor
      });
    });
};


export const insertProduct = (req, res) => {
  productDao
    .insertProduct(req.body)
    .then(() => {
      res.status(201).json({ message: "Product inserted successfully" }); // Devolver un mensaje de éxito después de la inserción
    })
    .catch((err) => {
      res.status(500).json({ error: "Server unavailable" }); // Devolver un mensaje de error si ocurre algún error en el servidor
    });
};


export const updateProduct = (req, res) => {
  const productId = req.params.bc;
  productDao
    .updateProduct(productId, req.body)
    .then((result) => {
      if (result) {
        res.json({ message: "Product updated successfully" }); // Devolver un mensaje de éxito después de la actualización
      } else {
        res.status(404).json({ error: "Product not found" }); // Devolver un mensaje de error si el producto no se encuentra
      }
    })
    .catch((err) => {
      res.status(500).json({ error: "Server unavailable" }); // Devolver un mensaje de error si ocurre algún error en el servidor
    });
};


export const deleteProduct = (req, res) => {
  const productId = req.params.bc;
  productDao
    .deleteProduct(productId)
    .then((result) => {
      if (result) {
        res.json({ message: "Product deleted successfully" }); // Devolver un mensaje de éxito después de la eliminación
      } else {
        res.status(404).json({ error: "Product not found" }); // Devolver un mensaje de error si el producto no se encuentra
      }
    })
    .catch((err) => {
      res.status(500).json({ error: "Server unavailable" }); // Devolver un mensaje de error si ocurre algún error en el servidor
    });
};

  
  
