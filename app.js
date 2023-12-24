async function getFakeProducts() {
  let url = `https://fakestoreapi.com/products?limit=6`

  try {
    let response = await fetch(url)
    let products = await response.json()

    return products
  } catch (error) {
    console.log("some error occurred: ", error)
  }
}

async function getFakeUsers() {
  let url = `https://fakestoreapi.com/users?limit=6`

  try {
    let response = await fetch(url)
    let users = await response.json()

    return users
  } catch (error) {
    console.log("some error occurred: ", error)
  }
}


function displayFakeProducts(products) {
  const productsWrapper = document.querySelector(".products-wrapper")
  for (let i = 0; i < products.length; i++) {
    let currentProduct = products[i]
    productsWrapper.innerHTML += `
    <div class="product">
        <div class="product-cover">
          <img src="${currentProduct.image}" alt="">
        </div>
        <div class="product-detail">
          <h4>${currentProduct.title}</h4>
          <div class="category">
            <a href="#">${currentProduct.category}</a>
          </div>
          <div class="product-rating">
            <p>
              <ion-icon name="star"></ion-icon>
              <span id="rate">${currentProduct.rating.rate}</span>
            </p>

            <p class="vote">
              Vote(s):
              <span id="count">${currentProduct.rating.count}</span>
            </p>
          </div>
          <p>${currentProduct.description}</p>
        </div>
        <div class="product-price">
          <h2 class="price">$${currentProduct.price}</h2>
          <h5 class="shipping">Free Shipping</h5>
          <button class="btn btn-filled">DETAILS</button>
          <button class="btn">ADD TO WISHLIST</button>
        </div>
      </div>`
  }

}


function displayFakeUsers(users) {
  const usersWrapper = document.querySelector(".users-wrapper")

  for (let i = 0; i < users.length; i++) {
    let currentUser = users[i]
    usersWrapper.innerHTML += `
    <div class="user">
        <div class="user-profile">
          <ion-icon name="person-circle"></ion-icon>
        </div>
        <div class="user-detail">
          <h4>Username: ${currentUser.username}</h4>
          <h4>Email: ${currentUser.email}</h4>
          <h4>Phone: ${currentUser.phone}</h4>
          <h4>Address: ${currentUser.address.city} - ${currentUser.address.street}</h4>
          <h4>ZIP Code: ${currentUser.address.zipcode}</h4>
        </div>
    </div>`
  }

}




window.addEventListener("DOMContentLoaded", async () => {
  console.log("everything is running from here")

  let products = await getFakeProducts()
  displayFakeProducts(products)
  let users = await getFakeUsers()
  displayFakeUsers(users)

  // console.log("fake products", products)
  // console.log("fake users", users)




})