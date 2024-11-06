class Product {
  public name: string;
  public price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price
  }
}

class Transaction {
  private products: {product: Product; qty: number}[] = []
  private total: number = 0

  public addToCart(product: Product, qty: number): any{
    this.products.push({product, qty});
    this.total += product.price * qty
  }

  public showTotal(): number {
    return this.total
  }

  public checkout(): {total:number, items: {name:string, price:number;qty:number}[]} {
    const transaction = {
      total: this.total,
      items: this.products.map(({product, qty}) => ({
        name: product.name,
        price: product.price,
        qty: qty
      }))
    }
    this.total = 0
    this.products = []
    return transaction
  }
}

const product1= new Product("Lightsaber", 200);
const product2= new Product("Mask", 600);
const product3= new Product("venom", 100);

const transaction = new Transaction()

transaction.addToCart(product1, 1);
transaction.addToCart(product2, 2);
transaction.addToCart(product3, 3);

console.log("Current total", transaction.showTotal())
const transactionData = transaction.checkout();

console.log("Total", transactionData)