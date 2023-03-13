const products = {
  chips: 5,
  cookie: 15,
  soda: 20,
};

for (const product in products) {
  console.log(product);
  console.log(products[product]);

  if (product === "chips") {
    products[product] = 90;
  }

  console.log(products);
}
