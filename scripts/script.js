
var cart = []

var products = [
    {
        "title": "Berserk vol 1",
        "description": "Nada que decir, de los mejores, si no el mejor manga de todos los tiempos.",
        "status": "En curso.",
        "price": 14900,
    },
    {
        "title": "Berserk vol 2",
        "description": "Nada que decir, de los mejores, si no el mejor manga de todos los tiempos.",
        "status": "En curso.",
        "price": 14900,
    },
    {
        "title": "Berserk vol 3",
        "description": "Nada que decir, de los mejores, si no el mejor manga de todos los tiempos.",
        "status": "En curso.",
        "price": 14900,
    },
    {
        "title": "Berserk vol 4",
        "description": "Nada que decir, de los mejores, si no el mejor manga de todos los tiempos.",
        "status": "En curso.",
        "price": 14900,
    },
    {
        "title": "Berserk vol 5",
        "description": "Nada que decir, de los mejores, si no el mejor manga de todos los tiempos.",
        "status": "En curso.",
        "price": 14900,
    },
    {
        "title": "Berserk vol 6",
        "description": "Nada que decir, de los mejores, si no el mejor manga de todos los tiempos.",
        "status": "En curso.",
        "price": 14900,
    },
    {
        "title": "Berserk vol 7",
        "description": "Nada que decir, de los mejores, si no el mejor manga de todos los tiempos.",
        "status": "En curso.",
        "price": 14900,
    },
    {
        "title": "Berserk vol 8",
        "description": "Nada que decir, de los mejores, si no el mejor manga de todos los tiempos.",
        "status": "En curso.",
        "price": 14900,
    },
]

var title = "Berserk"

var description = "Nada que decir, de los mejores, si no el mejor manga de todos los tiempos."

var status = "En curso."

// Loading data

for (var i in products) {

    var index = 'title' + (parseInt(i) + 1)

    console.log(index)

    document.getElementById(index).innerHTML = products[i].title
}


function viewDetail(index) {
    // alert("Estamos trabajando en la vista con el detalle de este producto")
    console.log(cart)

    cart.push(products[index])
    console.log(cart)
    alert("añadido al carro")

}


// script para carro, no lo muevo de aqui para tener los objetos y la lista.

function upadateCaseNumber(product, price, isIncreasing) {
    const caseInput = document.getElementById(product + '-number');
    let caseNumber = caseInput.value;
    if (isIncreasing) {
        caseNumber = parseInt(caseNumber) + 1;
    }

    else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }

    caseInput.value = caseNumber;
    // update case total 
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = caseNumber * price;
    calculateTotal();
}


function getInputvalue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal() {
    const phoneTotal = getInputvalue('phone') * 1219;
    const caseTotal = getInputvalue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;

    // update on the html 
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;

}

document.getElementById('case-plus').addEventListener('click', function () {
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) + 1;
    upadateCaseNumber('case', 59, true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    // const caseInput = document.getElementById('case-number');
    //     const caseNumber = caseInput.value;
    //    if(caseInput.value > 1){
    //         caseInput.value = parseInt(caseNumber) - 1;
    //    }
    upadateCaseNumber('case', 59, false);
});

// phone prcie update using add event linstner 
document.getElementById('phone-plus').addEventListener('click', function () {
    upadateCaseNumber('phone', 1219, true);
});


document.getElementById('phone-minus').addEventListener('click', function () {
    upadateCaseNumber('phone', 1219, false);
});

console.log(cart)

function goToPay() {
    alert("paying!")
}