const toggle = document.querySelector('.toggle');
const prices = document.querySelectorAll('.price-amount')

const pricing = [
  [
    '$19.99',
    '$199.99'
  ],
  [
    '$24.99',
    '$249.99',
  ],
  [
    '$39.99',
    '$399.99',
  ],
]

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  let i = 0;
  prices.forEach(price => {
    if(toggle.classList.contains('active')) {
      price.innerHTML = pricing[i][0]
    } else {
      price.innerHTML = pricing[i][1]
    } 
    i++;
  })
})