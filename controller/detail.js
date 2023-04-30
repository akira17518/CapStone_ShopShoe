window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const paramProduct = urlParams.get("productId");
  getSelectedItem = () => {
    let getProduct = axios({
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${paramProduct}`,
      method: "GET",
    })
      .then((resp) => {
        let product = resp.data.content;
        let buttonSize = ``;
        product.size.forEach((size) => {
          buttonSize += `<button class="button-size">${size}</button>`;
        });
        document.querySelector(".img_selected").innerHTML = `
          <img src="${product.image}" alt="" />
          `;
        document.querySelector(
          ".item_info"
        ).innerHTML = `<h2 class="item_name">${product.name}</h2>
            <p class="item_desc">
              ${product.description}
            </p>
            <div class="size">
              <p>Available Size</p>
                ${buttonSize}
            </div>
            <div class="price">
              <p>$${product.price}</p>
            </div>
            <div class="quantity">
            <button class="btnMinus">-</button>
            <input type="number" value="1" id="input"/>
            <button class="btnPlus">+</button>
            </div>
            <div class="addToCart">
              <a href="/register.html">
              <button class="add">Add to cart</button>
              </a>
            </div>`;
        // Tăng giảm item
        const minusButton = document.querySelector(".btnMinus");
        const plusButton = document.querySelector(".btnPlus");
        const inputField = document.querySelector("input");

        minusButton.addEventListener("click", (event) => {
          event.preventDefault();
          const currentValue = Number(inputField.value) || 0;
          if (currentValue > 1) {
            inputField.value = currentValue - 1;
          }
        });

        plusButton.addEventListener("click", (event) => {
          event.preventDefault();
          const currentValue = Number(inputField.value) || 0;
          if (currentValue >= 1 && currentValue <= product.quantity)
            inputField.value = currentValue + 1;
        });
        // Highlight size giày được chọn
        const listSizeButton = document.querySelectorAll(".button-size");
        listSizeButton.forEach((size) => {
          size.addEventListener("click", function () {
            listSizeButton.forEach((size) => {
              size.classList.remove("activeButton");
            });
            size.classList.add("activeButton");
          });
        });
      })
      .catch((err) => {
        document.querySelector(
          ".selectedItem .container"
        ).innerHTML = `<h3 class="text-center mt-5">Oops ! Somethings Went Wrong <br> Please come back later !</h3>`;
      });
  };

  getSelectedItem();

  getRelatedItem = () => {
    let getRelated = axios({
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${paramProduct}`,
      method: "GET",
    })
      .then((resp) => {
        let product = resp.data.content.relatedProducts;
        let output = ``;
        product.forEach((item) => {
          output += `          <div class="col-12 col-lg-4">
          <div class="container">
            <div class="card">
              <img src="${item.image}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title name">${item.name}</h5>
                <p class="card-text">
                ${item.shortDescription}
                </p>
                <h5 class="card-title price">$${item.price}</h5>
                <button class="more-info">
                <a href="./detail.html?productId=${item.id}">More Info</a>
                </button>
              </div>
            </div>
          </div>
        </div>`;
        });
        document.querySelector(".item-row").innerHTML = output;
      })
      .catch((err) => {
        document.querySelector(
          ".related .container"
        ).innerHTML = `<h3 class="text-center mt-5">Oops ! Somethings Went Wrong <br> Please come back later !</h3>`;
      });
  };
  getRelatedItem();
};
