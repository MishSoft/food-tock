const dummyProducts = [
  {
    id: "1",
    name: "Fresh Green Salad",
    category: "Salad",
    price: 12.99,
    description: "Delicious fresh organic vegetable salad.",
    image: "/images/salad.jpg",
  },
  {
    id: "2",
    name: "Beef Burger Classic",
    category: "Burger",
    price: 15.5,
    description: "Juicy beef patty with cheese, lettuce, and special sauce.",
    image: "/images/burger.jpg",
  },
  {
    id: "3",
    name: "Italian Espresso",
    category: "Coffee",
    price: 4.0,
    description: "Rich and aromatic rich espresso shot.",
    image: "/images/espresso.jpg",
  },
];

export const getProducts = async (req, res, next) => {
  try {
    res.status(200).json({
      status: "success",
      results: dummyProducts.length,
      data: {
        product: dummyProducts
      }
    })
  } catch (error) {
    next(error)
  }
}


export const getProductById = async (req, res, next) => {
  try {
    const {id} = req.params
    const product = dummyProducts.find((p) => p.id === id)


    if (!product) {
      return res.status(404).json({
        status: "fail",
        message: "Product not found"
      })
    }

    res.status(200).json({
      status: "success",
      data: {
        product
      }
    })
  } catch (error) {
    next(error)
  }
}
