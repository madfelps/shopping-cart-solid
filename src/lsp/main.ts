/*
Liskov substitution principle (Princípio da substituição de Liskov) -
Se φ(x) é uma propriedade demonstrável dos objetos x de tipo T, então φ(y)
deve ser verdadeiro para objetos y de tipo S onde S é um subtipo de T.

Ou seja, subtipos precisam ser substituíveis por seus tipos de base.
*/

import { Order } from "./classes/order";
import { Messaging } from "./services/messaging";
import { Persistency } from "./services/persistency";
import { ShoppingCart } from "./classes/shopping-cart";
import { Product } from "./classes/product";
import { FiftyPercentDiscount, NoDiscount } from "./classes/discount";

const noDiscount = new NoDiscount()
const fiftyPercentDiscount = new FiftyPercentDiscount()
const shoppingCart = new ShoppingCart(noDiscount)
const messaging = new Messaging()
const persistency = new Persistency()
const order = new Order(shoppingCart, messaging, persistency)

shoppingCart.addItem(new Product('Camiseta', 49.9))
shoppingCart.addItem(new Product('Caderno', 9.9))
shoppingCart.addItem(new Product('Lápis', 2.50))


console.log(shoppingCart.items)
console.log(shoppingCart.total())
console.log(shoppingCart.totalWithDiscount())
console.log(order.orderStatus)
order.checkout()
console.log(order.orderStatus)
