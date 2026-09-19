

export const getProducts = async (req, res, next) => {
  try {
    const products = await prisma.product.findMany()
    res.status(200).json({
      status: "success",
      results: products.length,
      data: {
        products,
      },
    });
  } catch (error) {
    next(error)
  }
}


export const getProductById = async (req, res, next) => {
  try {
    const {id} = req.params
    const product = await prisma.product.findUnique({
      where: {id}
    })


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
