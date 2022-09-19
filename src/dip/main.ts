/*
Módulos de alto nível não devme depender de módulos de baixo nível.
Ambos devem depender de abstrações. 
Dependa de abstrações, não de implementações.
Abstração não devem depender de detalhes. Detalhes devem depender
de abstrações. 

Classes de baixo nível são classes que executam tarefas (os detalhes)
Classes de alto nível são classes que gerenciam as classes de baixo nível


*/


import { Order } from "./classes/order";
import { Messaging } from "./services/messaging";
import { Persistency } from "./services/persistency";
import { ShoppingCart } from "./classes/shopping-cart";
import { Product } from "./classes/product";
import { FiftyPercentDiscount, NoDiscount } from "./classes/discount";
import { EnterpriseCustomer, IndividualCustomer } from "./classes/customer";

const noDiscount = new NoDiscount()
const fiftyPercentDiscount = new FiftyPercentDiscount()
const shoppingCart = new ShoppingCart(noDiscount)
const messaging = new Messaging()
const persistency = new Persistency()
const individualCustomer = new IndividualCustomer(
  'Felipe ',
  'Madureira ',
  '000.000.000-00',
);
const enterpriseCustomer = new EnterpriseCustomer(
  'TechCompany ',
  '11111111111111',
);
const order = new Order(
  shoppingCart, 
  messaging, 
  persistency,
  enterpriseCustomer,
);

shoppingCart.addItem(new Product('Camiseta', 49.9))
shoppingCart.addItem(new Product('Caderno', 9.9))
shoppingCart.addItem(new Product('Lápis', 2.50))


console.log(shoppingCart.items)
console.log(shoppingCart.total())
console.log(shoppingCart.totalWithDiscount())
console.log(order.orderStatus)
order.checkout()
console.log(order.orderStatus)
