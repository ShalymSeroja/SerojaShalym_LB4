// Додаємо обробник події на кнопку для зміни зображення
document.getElementById('changeImageBtn').addEventListener('click', function() {
    // Знаходимо елемент <img> за id
    var imgElement = document.getElementById('image1');
    imgElement.src = 'images/bg-soft.png';
});


