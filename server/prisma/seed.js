import "dotenv/config"
import { PrismaClient } from "../src/generated/client/index.js"
import { PrismaPg } from "@prisma/adapter-pg"

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })

const initialProducts = [
  {
    name: "Fresh Green Salad",
    category: "Salad",
    price: 12.99,
    description: "Delicious fresh organic vegetable salad with house dressing.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Classic Beef Burger",
    category: "Burger",
    price: 15.5,
    description:
      "Juicy beef patty with cheese, lettuce, and special burger sauce.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Italian Espresso",
    category: "Coffee",
    price: 4.0,
    description:
      "Rich and aromatic double shot espresso made from premium beans.",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Margherita Pizza",
    category: "Pizza",
    price: 18.0,
    description:
      "Traditional Neapolitan pizza with fresh mozzarella, tomatoes, and basil.",
    image:
      "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=600&q=80",
  },
];

async function main() {
  console.log("Seeding database with initial products...")

  await prisma.product.deleteMany()

  for (const product of initialProducts) {
    await prisma.product.create({
      data: product
    })
  }

  console.log("Seeding completed successfully!")
}

main()
  .catch((e) => {
    console.log("Error while seeding:", e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
