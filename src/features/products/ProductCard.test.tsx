import { render, screen } from "@testing-library/react"
import ProductCard from "./ProductCard"
import TestComponentWrapper from "../../components/TestComponentWrapper/TestComponentWrapper"
import { Product } from "./Products.types"

describe("Product  card test", () => {
  const product: Product = {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  }

  const product1: Product = {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "jewelery",
    image: "",
    rating: {
      rate: 3.6,
      count: 145,
    },
  }

  const product2: Product = {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: `men's clothing`,
    image: "",
    rating: {
      rate: 3.6,
      count: 145,
    },
  }

  test("renders Product card component with props", () => {
    render(
      <TestComponentWrapper>
        <ProductCard product={product} />
      </TestComponentWrapper>,
    )

    expect(
      screen.getByText(/DANVOUY Womens T Shirt Casual Cotton Short/i),
    ).toBeInTheDocument()
  })

  test("renders default image when data set not include image", () => {
    render(
      <TestComponentWrapper>
        <ProductCard product={product1} />
      </TestComponentWrapper>,
    )

    expect(
      screen.getByText(/DANVOUY Womens T Shirt Casual Cotton Short/i),
    ).toBeInTheDocument()
  })

  test("renders men's clothing default  image when data set not include image", () => {
    render(
      <TestComponentWrapper>
        <ProductCard product={product2} />
      </TestComponentWrapper>,
    )

    expect(
      screen.getByText(/DANVOUY Womens T Shirt Casual Cotton Short/i),
    ).toBeInTheDocument()
  })
})
