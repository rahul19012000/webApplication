const productColumns = document.querySelectorAll('.product-column');
productColumns.forEach(column => {
    column.addEventListener('mouseover', () => {
        column.style.filter = 'grayscale(0%)';
    });
    column.addEventListener('mouseout', () => {
        column.style.filter = 'grayscale(100%)';
    });
});