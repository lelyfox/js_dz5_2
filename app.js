function receipt() {
    const arrayReceipt = [{
        'Lavash': {
            info: 'Big Cheese',
            price: 15000
        }, 'Hot-dog': {
            info: 'mini',
            price: 8500
        }, 'Cola': {
            info: '1.5 L',
            price: 9000
        }
    }, {
        'Milk': {
            info: '1 L',
            price: 8500
        },
        'Sugar': {
            info: '1 kg',
            price: 7000
        }
    }, {
        'Cola': {
            info: '1 L',
            price: 6500
        },
        'Fanta': {
            info: '1.5 L',
            price: 9000
        },
        'Lipton': {
            info: '1.2 L',
            price: 5000
        }, 
        'Nestle': {
            info: '10 L',
            price: 8500
        }
    }]
    const count = Math.floor(Math.random() * arrayReceipt.length)
    return arrayReceipt[count]    
}

let cart = receipt()
console.log(cart);

let result = "";
let delivery = 9000;
let sum = 0;

for (let key in cart){    
    sum += cart[key]['price']
    result += `${key} ${cart[key]['info']}, `
}

let end = result + `| Общая стоимость: ${delivery + sum} сумм c доставкой (${delivery})`
// result += `| Общая стоимость: ${delivery + sum} сумм c доставкой (${delivery})` 

console.log(`Вы заказали ${end} `); 