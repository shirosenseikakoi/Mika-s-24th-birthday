
document.addEventListener('DOMContentLoaded', function () {
    const giftButton = document.getElementById('giftButton');
    const giftBox = document.getElementById('giftBox');
    

    giftButton.addEventListener('click', function () {
        giftBox.classList.toggle('hidden');
    });
    


});
