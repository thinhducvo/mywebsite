

// di chuyen qua lai
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})


// dong mo modal
const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')

function showBuyTickets() {
    modal.classList.add('open')
}
function hideBuyTickets() {
    modal.classList.remove('open')
}

for(const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}

modalClose.addEventListener('click', hideBuyTickets)




// reponsive dong mo menu-mobile
var header = document.getElementById('id-icon-mobile');
var mobileMenu = document.getElementById('mobile-menu');

mobileMenu.onclick = function() {
    var isClosed = header.clientHeight === 48; // neu bang 48
    if(isClosed) {
        header.style.height = 'auto';
    } else {
        header.style.height = '48px';
    }
}


// Get the modal
// var modal = document.getElementById('id01');

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }