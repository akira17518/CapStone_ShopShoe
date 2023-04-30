getProductForCarousel = () => {
  let getProductForCarousel = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
  })
    .then((resp) => {
      let listShoes = resp.data.content;
      for (let i = 0; i < 5; i++) {
        let output = "";
        let shoe = listShoes[i];
        output = `
          <div class="container">
            <div class="product_img">
              <img src="${shoe.image}" alt="" />
            </div>
            <div class="product_detail">
              <h2>${shoe.name}</h2>
              <p>${shoe.description}</p>
              <button>
              <a href="./detail.html?productId=${shoe.id}">More Info</a>
              </button>
            </div>
          </div>
          `;

        document.querySelector(`.owl-carousel .item${i}`).innerHTML = output;
      }
    })
    .catch((err) => {
      document.querySelector(
        ".owl-carousel"
      ).innerHTML = `<h3 class="text-center mt-5">Oops ! Somethings Went Wrong <br> Please come back later !</h3>`;
    });
};

getProductForCarousel();

getAdidas = () => {
  let getProduct = axios({
    url: "https://shop.cyberlearn.vn/api/Product/getProductByCategory?categoryId=adidas",
    method: "GET",
  })
    .then((resp) => {
      let listAdidas = resp.data.content;
      let output = "";
      listAdidas.forEach((shoe) => {
        output += `            <div class="col-12 col-lg-4">
        <div class="container">
          <div class="card">
            <img src="${shoe.image}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title name">${shoe.name}</h5>
              <p class="card-text">
              ${shoe.shortDescription}
              </p>
              <h5 class="card-title price">$${shoe.price}</h5>
              <button class="more-info">
              <a href="./detail.html?productId=${shoe.id}">More Info</a>
              </button>

            </div>
          </div>
        </div>
      </div>`;
        document.querySelector(".adidas-row").innerHTML = output;
      });
    })
    .catch((err) => { });
};

getAdidas();

getNike = () => {
  let getProduct = axios({
    url: "https://shop.cyberlearn.vn/api/Product/getProductByCategory?categoryId=nike",
    method: "GET",
  })
    .then((resp) => {
      let listNike = resp.data.content;
      let output = "";
      listNike.forEach((shoe) => {
        output += `            <div class="col-12 col-lg-4">
        <div class="container">
          <div class="card">
            <img src="${shoe.image}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${shoe.name}</h5>
              <p class="card-text">
              ${shoe.shortDescription}
              </p>
              <h5 class="card-title price">$${shoe.price}</h5>
              <button class="more-info">
              <a href="./detail.html?productId=${shoe.id}">More Info</a>
              </button>

            </div>
          </div>
        </div>
      </div>`;
        document.querySelector(".nike-row").innerHTML = output;
      });
    })
    .catch((err) => { });
};

getNike();

getVans = () => {
  let getProduct = axios({
    url: "https://shop.cyberlearn.vn/api/Product/getProductByCategory?categoryId=VANS_CONVERSE",
    method: "GET",
  })
    .then((resp) => {
      let listVans = resp.data.content;
      let output = "";
      listVans.forEach((shoe) => {
        output += `            <div class="col-12 col-lg-4">
        <div class="container">
          <div class="card">
            <img src="${shoe.image}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${shoe.name}</h5>
              <p class="card-text">
              ${shoe.shortDescription}
              </p>
              <h5 class="card-title price">$${shoe.price}</h5>
              <button class="more-info">
              <a href="./detail.html?productId=${shoe.id}">More Info</a>
              </button>

            </div>
          </div>
        </div>
      </div>`;
        document.querySelector(".vans-row").innerHTML = output;
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
getVans();

