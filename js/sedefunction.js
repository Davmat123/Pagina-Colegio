const locationSelect = document.getElementById('location');
const ruralForm = document.getElementById('rural-form');
const urbanForm = document.getElementById('urbana-form');
                                      
locationSelect.addEventListener('change', () => {
    if (locationSelect.value === 'rural') {
        ruralForm.style.display = 'block';
        urbanForm.style.display = 'none';
    } else {
        ruralForm.style.display = 'none';
        urbanForm.style.display = 'block';
    }
});