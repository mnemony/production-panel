// set basisc
let cardboxes = document.querySelectorAll('.basic-box')
const addNewCard = document.querySelector('form')
const cadVal = document.querySelector('#card-title')
const cadValTxt = document.querySelector('#other-info')
let lastValue = 0;

// remove additional card
const deleteCurrrentCard = (e) => {
    e.target.parentNode.remove();
    cardboxes = document.querySelectorAll('.basic-box')
}

// make doubleclicked card first 

const makeMeFirst = function () {
    cardboxes = document.querySelectorAll('.basic-box')
    orderList = []
    cardboxes.forEach((x) => {
        x.style.order++;
        x.classList.remove("prime");
        orderList.push(x.style.order)
    })
    this.style.order = -1;
    this.classList.add('prime');
    return lastValue = Math.max(...orderList);
}

// set order number to other cards

let orderIt = function () {
    for (const x of cardboxes) {
        x.addEventListener('dblclick', makeMeFirst);
    }
}

// create extra card to panel

const genNew = function () {
    if (cardboxes.length > 12) {
        return alert('Too much cases ongoing. Solve them first.')
    }
    if (cadVal.value.length === 0) {
        return alert('Empty form? It is forbidden!')
    }


    let node = document.createElement('div');
    let title = document.createElement('h3');
    let textInCard = document.createElement('p');
    textInCard.textContent = `${cadValTxt.value}`;
    title.textContent = `${cadVal.value}`;
    let newButton = document.createElement('button')
    newButton.textContent = 'Delete Card';

    textInCard.classList.add('inside-card')
    newButton.classList.add('task-killer');

    node.appendChild(title);
    node.appendChild(textInCard);
    node.appendChild(newButton);


    node.classList.add('basic-box', 'removable');

    node.style.order = lastValue + 1;
    document.querySelector('#section-two').appendChild(node);

    cadValTxt.value = '';
    cadVal.value = '';

    return cardboxes = document.querySelectorAll('.basic-box'),
        document.querySelectorAll('.task-killer').forEach(item => item.addEventListener('click', deleteCurrrentCard)),
        orderIt();

}

addNewCard.addEventListener('submit', genNew);
orderIt()