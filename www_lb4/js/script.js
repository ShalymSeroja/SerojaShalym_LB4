const dataSite = {
    proSoft: [
        "Firewall",
        "Antivirus",
        "VPN"
    ],
    whyUs: [
        "High quality",
        "Reliable",
        "Fast"
    ]
};

document.addEventListener("DOMContentLoaded", function() {
    // Сортуємо масив proSoft
    const sortedProSoft = dataSite.proSoft.sort();

    

    // Отримуємо контейнер списку
    const listContainer = document.getElementById('software-list');
    
    // Очищаємо поточний вміст списку
    listContainer.innerHTML = '';

    // Додаємо кожен елемент з відсортованого масиву
    sortedProSoft.forEach(function(software) {
        const listItem = document.createElement('li');
        listItem.textContent = software;
        listContainer.appendChild(listItem);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Сортуємо масив whyUs за абеткою без врахування регістру
    const sortedWhyUs = dataSite.whyUs.sort(function(a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });

    // Отримуємо контейнер списку
    const listContainer = document.getElementById('why-us-list');
    
    // Очищаємо поточний вміст списку
    listContainer.innerHTML = '';

    // Додаємо кожен елемент з відсортованого масиву
    sortedWhyUs.forEach(function(item) {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        listContainer.appendChild(listItem);
    });
});



  