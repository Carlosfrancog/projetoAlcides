function clickMenu() {
  if (itens.style.display == 'block') {
    itens.style.display = 'none'
  } else {
    itens.style.display = 'block'
  }
}


const itens = document.querySelectorAll('.item');

itens.forEach((item) => {
  item.addEventListener('mouseover', () => {
    item.innerHTML += '<div class="add-to-cart">Adicionar ao carrinho</div>';
  });

  item.addEventListener('mouseout', () => {
    item.querySelector('.add-to-cart').remove();
  });

  item.addEventListener('click', () => {
    const itemName = item.querySelector('.item-name').textContent;
    addItemToCart(itemName);
  });
});

function addItemToCart(itemName) {
  const cart = document.querySelector('#carrinho');
  const item = document.createElement('li');
  item.textContent = itemName;
  cart.appendChild(item);
}

const cartItems = document.querySelectorAll('#carrinho li');

cartItems.forEach((item) => {
  const addButton = document.createElement('button');
  addButton.textContent = '+';
  addButton.addEventListener('click', () => {
    // Adicionar mais um item ao carrinho
  });

  const removeButton = document.createElement('button');
  removeButton.textContent = '-';
  removeButton.addEventListener('click', () => {
    // Remover um item do carrinho
  });

  item.appendChild(addButton);
  item.appendChild(removeButton);
});

const buyButton = document.createElement('button');
buyButton.textContent = 'Comprar';
buyButton.addEventListener('click', () => {
  // Finalizar a compra
});

const cart = document.querySelector('#carrinho');
cart.appendChild(buyButton);
