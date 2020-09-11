
var shop = {
    item1: {
        name: "Gansta Dog Coat",
        cost: 100
    },
    item2: {
        name: "Mini Cat Scratcher",
        cost: 70
    }
    item3: {
        name: "Doggie 'Cloud' Bed",
        cost: 50
    }
}



var cart = {}

function addToCart(itemID) {
    console.log(["adding item to cart", shop[itemID]]);

    if (itemID in cart) {
        cart[itemID]++;
    }   else {
        cart[itemID] = 1;
    }

    console.log(["cart is now", cart]);

    printCart();
}



function printCart() {
    var html = "<h3>Cart</h3>";
  
    html += "<table>";
    html += "<thead>";
    html += "<tr>";
    html += "<th>Item</th>";
    html += "<th>Qty</th>";
    html += "<th>Cost</th>";
    html += "<th>Total</th>";
    html += "</tr>";
    html += "</thead>";
    html += "<tbody>";
  
    var total = 0;
  
    for (var i in cart) {
      html += "<tr>";
      html += "<td>" + shop[i].name + "</td>";
      html += "<td>" + cart[i] + "</td>";
      html += "<td>$" + shop[i].cost + "</td>";
      html += "<td>$" + cart[i] * shop[i].cost + "</td>";
      html += "</td>";
  
      total += cart[i] * shop[i].cost;
    }
  
    html += "</tbody>";
    html += "<tfoot>";
  
    html += "<tr>";
    html += "<th colspan=3></th>";
    html += "<th>$" + total + "</th>";
    html += "</tr>";
    html += "</tfoot>";
  
    html += "</table>";
    html += '<br><br><button onclick="emptyCart()">empty cart</button>';
  
    document.getElementById("cart").innerHTML = html;
  }
  