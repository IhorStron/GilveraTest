document.addEventListener('DOMContentLoaded', function () {
   // Animation
   const fadeElements = document.querySelectorAll('.fade-in');

   fadeElements.forEach((element, index) => {
       setTimeout(() => {
           element.classList.add('show');
       }, index * 200);
   });

  
   // Search
   const searchInput = document.getElementById('search');
   const tableRows = document.querySelectorAll('#customers-table tbody tr');

   if (searchInput && tableRows.length > 0) {
       searchInput.addEventListener('keyup', function () {
           const searchValue = searchInput.value.toLowerCase();

           tableRows.forEach(row => {
               const cells = row.querySelectorAll('td');
               const rowText = Array.from(cells).map(cell => cell.textContent.toLowerCase()).join(' ');

               if (rowText.includes(searchValue)) {
                   row.style.display = '';
               } else {
                   row.style.display = 'none';
               }
           });
       });
   }
});
