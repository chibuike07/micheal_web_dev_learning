const displayProducts = () => {
  const wrapper = document.querySelector("#wrapper");
  const storage = JSON.parse(localStorage.getItem("products"));
  const innerContainer = document.createElement("div");

  const groupedCategory = storage.reduce((store, value) => {
    // holding the categories
    const productCategory = value.category;

    // check if there is category in the database - storage
    if (productCategory) {
      // check if the category exists in the store and add the category object to the list of it's products
      if (store[productCategory]) store[productCategory].push(value);
      // create a new category and add it to the list of products
      else store[productCategory] = [value];

      // return the store
      return store;
    }
  }, {});

  // access the objects
  for (const category in groupedCategory) {
    // create elements
    const productWrapper = document.createElement("section");
    const headerElem = document.createElement("header");
    const headingElem = document.createElement("h2");

    // assign class name
    headerElem.classList.add("category_header");
    productWrapper.classList.add("product_wrapper");

    // assign value to element
    headingElem.textContent = category;

    // add element to they parent
    headerElem.appendChild(headingElem);
    innerContainer.appendChild(headerElem);

    // accessing/looping through the each category products
    groupedCategory[category].length > 0 &&
      groupedCategory[category].forEach(
        ({
          brand,
          description,
          discountPercentage,
          category: productCategory,
          thumbnail,
          title,
          price,
        }) => {
          // create elements
          const cardWrapper = document.createElement("div");
          const categoryHeader = document.createElement("header");
          const categoryImg = document.createElement("img");
          const cardTitleWrapper = document.createElement("header");
          const cardTitle = document.createElement("h3");
          const cardBrand = document.createElement("small");
          const cardDescription = document.createElement("div");
          const cardText = document.createElement("p");
          const cardPricesWrapper = document.createElement("div");
          const cardPrice = document.createElement("sub");
          const cardDiscount = document.createElement("sup");
          const cardBtnWrap = document.createElement("div");
          const cardBtn = document.createElement("button");

          cardBtn.innerText = "view";
          cardBtnWrap.appendChild(cardBtn);

          // assign values to elements
          categoryImg.src = thumbnail;
          categoryImg.alt = `${productCategory} category`;
          cardTitle.textContent = title;
          cardBrand.textContent = brand;
          cardText.textContent = description;
          cardDiscount.textContent = `${discountPercentage}%`;
          cardPrice.textContent = `$${price}`;

          cardDiscount.title = "discount";

          // classname
          // cardTitleWrapper.setAttribute("class", "categoryTitle");
          innerContainer.classList.add("innerContainer");
          cardTitleWrapper.classList.add("card_title_wrapper");
          categoryHeader.classList.add("card_header");
          cardDescription.classList.add("card_desc");
          cardPricesWrapper.classList.add("card_PriceWrapper");
          cardWrapper.classList.add("card");
          cardBtnWrap.classList.add("card_btn");

          // add element to they wrappers
          cardTitleWrapper.appendChild(cardTitle);
          cardTitleWrapper.appendChild(cardBrand);
          categoryHeader.appendChild(cardTitleWrapper);
          cardDescription.appendChild(cardText);
          cardPricesWrapper.appendChild(cardPrice);
          cardPricesWrapper.appendChild(cardDiscount);

          // add element to they wrappers - card
          cardWrapper.appendChild(categoryImg);
          cardWrapper.appendChild(cardTitleWrapper);
          cardWrapper.appendChild(categoryHeader);
          cardWrapper.appendChild(cardDescription);
          cardWrapper.appendChild(cardPricesWrapper);
          cardWrapper.appendChild(cardBtnWrap);
          productWrapper.appendChild(cardWrapper);
          // add element to they wrappers
          innerContainer.appendChild(productWrapper);
        }
      );

    // add element to they wrappers - display to the browser
    wrapper.appendChild(innerContainer);
  }
};

const getProducts = () => {
  fetch("https://dummyjson.com/products", {
    headers: {
      "Content-Type": "application/json",
      //   Authorization: "Bearer " + "token",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      const { products } = data;

      console.log("data :>> ", products);

      if (localStorage.getItem("products") === null) {
        localStorage.setItem("products", JSON.stringify(products));
      } else {
        localStorage.setItem("products", JSON.stringify(products));
      }
    });
  displayProducts();
};

document.addEventListener("DOMContentLoaded", getProducts);
