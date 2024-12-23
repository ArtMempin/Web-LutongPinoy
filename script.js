/*Dessert and Dsihes Dropdown*/
const dessertsButton = document.getElementById('dessertsButton');
const dropdownMenu = document.querySelector('.dropdown-menu');

// Toggle the dropdown menu
dessertsButton.addEventListener('click', () => {
  dropdownMenu.style.display =
    dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// Close the dropdown menu if clicked outside the drop down or button
window.addEventListener('click', (e) => {
  if (!e.target.matches('#dessertsButton')) {
    dropdownMenu.style.display = 'none';
  }
});


function thanks(){
  alert('Thank You!');  
}


