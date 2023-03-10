let products = {
    data: [
      {
        productName: "Nitro",
        price: "249,99",
        image: "img/drink azul CA.png",
      },
      {
        productName: "Alecrim albino",
        price: "459,99",
        image: "img/drink alecrim CA.png",
      },
      {
        productName: "Mojito de Limão",
        price: "399,99",
        image: "img/mojito limao CA.png",
      },
      {
        productName: "Black Orange",
        price: "329,99",
        image: "img/drink laranja CA.png",
      },
      {
        productName: "Caipirinha de Limão",
        price: "329,99",
        image: "img/capirinha limao CA.png",
      },
      {
        productName: "Saquerinha de Morango",
        price: "299,99",
        image: "img/saquerinha de morango CA.png",
      },
      {
        productName: "RED Cherry",
        price: "129",
        image: "img/drink de cereja SA.jpg",
      },
      {
        productName: "Khaos",
        price: "499,99",
        image: "img/drink de laranja SA.jpg",
      },
      {
        productName: "Lagoa Azul",
        price: "139,90",
        image: "img/drink lagoa azul SA.jpg",
      },
      {
        productName: "Milk Shake",
        price: "139,99",
        image: "img/drink milk shake SA.jpg",
      },
      {
        productName: "Turned",
        price: "Gratuito",
        image: "img/drink pina coloda SA.jpg",
      },
      {
        productName: "Pink Flod",
        price: "299,99",
        image: "img/drink rosa SA.jpg",
      }, 
    ],
  };
  
  for (let i of products.data) {
    //Cria o card
    let card = document.createElement("div");
    card.classList.add("card", i.category, "hide");
    //DIV Image
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "R$ " + i.price;
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parâmetro passado do botão (parâmetro igual à categoria)
  function filterProduct(value) {
    //Código de classe do botão
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //verifique se o valor é igual ao innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    
  }
  
  //Evento de click no botão de pesquisa
  document.getElementById("search").addEventListener("click", () => {
    //inicializações
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //percorrer todos os elementos
    elements.forEach((element, index) => {
      //verifica se o texto inclui o valor de pesquisa
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //exibir cartão correspondente
        cards[index].classList.remove("hide");
      } else {
        //oculta outros elementos
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Exibe todos os produtos inicialmente
  window.onload = () => {
    filterProduct("todos");
  };