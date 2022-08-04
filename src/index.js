function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки


orderedItems.forEach(function (number, index) {
totalPrice += orderedItems[index];
}
      );
  // Пиши код выше этой строки
  return totalPrice;
}


