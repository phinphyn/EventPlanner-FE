export class Service {
    constructor(id, name, price, category) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.category = category;
    }
    formatPrice() {
      return this.price.toLocaleString() + " VND";
    }
  }