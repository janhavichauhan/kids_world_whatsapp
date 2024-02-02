
var itemCountDisplay = document.getElementById("cart-value");
var checkoutButton = document.getElementById("cart");

var addButtonElements = document.getElementsByClassName("button");

var shoppingItems = [
  {
    name: "This was our pact",
    quantity: 0,
    dollars: 7,
    cents: 49,
  },

    {
      name:"This was our pact",
      quantity: 0,
      dollars:4,
      cents:49,

  },
  {
      name:"Stuffed toys",
      quantity: 0,
      dollars:15,
      cents:49,

  },
  
  {
      name:"Birthday Card",
      quantity: 0,
      dollars: 12,
      cents:49,

  },

  {
      name:"Bookmarks",
      quantity: 0,
      dollars: 12,
      cents: 49,

  },

  {
      name:"The famous five",
      quantity: 0,
      dollars: 4,
      cents:59,

  },

  {
      name:"Matilda",
      quantity: 0,
      dollars:6,
      cents:80,

  },
  
  {
      name:"Harry Potter",
      quantity: 0,
      dollars:10,
      cents:0,

  },

  {
      name:"For Young Readers",
      quantity: 0,
      dollars: 7,
      cents:29,

  },


  {
      name:"Wimpy kid-DIY",
      quantity: 0,
      dollars: 4,
      cents:99,

  },


  {
      name:"Monopoly",
      quantity: 0,
      dollars: 19,
      cents:49,

  },


  {
      name:"Jenga",
      quantity: 0,
      dollars: 20,
      cents:99,

  },


  {
      name:"Dart Board",
      quantity: 0,
      dollars:  17,
      cents: 49,

  },
  
];

function updateItemCount() {
  let itemCount = 0;
  for (let index = 0; index < shoppingItems.length; index++) {
    itemCount = itemCount + shoppingItems[index].quantity;
  }
  itemCountDisplay.innerHTML = itemCount;
}

for (let i = 0; i < addButtonElements.length; i++) {
  addButtonElements[i].onclick = (e) => {
    shoppingItems[i].quantity++;
    updateItemCount();
  };
}

var totalPriceDollars = 0;
var totalPriceCents = 0;

function updateTotalPrice() {
  let totalCents = 0;

  for (let index = 0; index < shoppingItems.length; index++) {
    totalCents =
      totalCents +
      shoppingItems[index].quantity *
        (shoppingItems[index].dollars * 100 + shoppingItems[index].cents);
  }
  totalPriceDollars = Math.floor(totalCents / 100);
  totalPriceCents = totalCents % 100;
}

var whatsappMessage =
  "https://api.whatsapp.com/send?phone=1234567890000&text=Order%20details";

function updateWhatsappMessage() {
  for (let index = 0; index < shoppingItems.length; index++) {
    if (shoppingItems[index].quantity !== 0) {
      whatsappMessage +=
        "%0A" +
        shoppingItems[index].name +
        "%20" +
        shoppingItems[index].quantity;
    }
  }
  whatsappMessage +=
    "%0A" + "Total%20Price:%20$" + totalPriceDollars + "%20" + totalPriceCents + "c";
}

checkoutButton.onclick = () => {
  updateTotalPrice();
  updateWhatsappMessage();
  window.open(whatsappMessage, "_blank");

  for (let index = 0; index < shoppingItems.length; index++) {
    if (shoppingItems[index].quantity !== 0) {
      console.log(
        "Item name: " +
          shoppingItems[index].name +
          " - Quantity: " +
          shoppingItems[index].quantity
      );
    }
  }

  console.log(
    "The total amount is " + totalPriceDollars + "$ and " + totalPriceCents + " cents"
  );
};

