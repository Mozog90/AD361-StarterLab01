const ITEMS = [
  { name: "paper towels", price: 21.99 },
  { name: "sandwich", price: 8.75 },
  { name: "eggs", price: 6.75 },
  { name: "avocado oil", price: 10.0 },
];

export function addItem(name: string, price: number) {
  const newItem = { name: name, price: price };
  ITEMS.push(newItem);
}

export function deleteItem(name: string) {
  for (let i = 0; i < ITEMS.length; i++) {
    if (ITEMS[i].name === name) {
      ITEMS.splice(i, 1);
      break;
    }
  }
  return ITEMS;
}

export function total() {
  let subtotal = 0;

  for (const item of ITEMS) {
    subtotal += item.price;
  }

  return subtotal;
}

export function tax(taxRate: number) {
  const totalWithTax = total() + (total() * taxRate);
  return totalWithTax;
}

export function printReceipt(taxRate: number) {
  console.log("************************");

  for (const item of ITEMS) {
    console.log(`${item.name} : $${item.price.toFixed(2)}`);
  }

  console.log("************************");
  console.log(`Subtotal: $${total().toFixed(2)}`);
  console.log(`Tax: $${(total() * taxRate).toFixed(2)}`);
  console.log(`Total: $${tax(taxRate).toFixed(2)}`);
}
