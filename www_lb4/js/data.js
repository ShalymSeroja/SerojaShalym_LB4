function updateDateTime() {
    const now = new Date();
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    const day = dayNames[now.getDay()];
    const month = monthNames[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    const timeString = `${day}, ${month} ${date}, ${year}  &nbsp; &nbsp; ${hours}:${minutes}:${seconds}`;
    
    document.getElementById('current-date-time').innerHTML = timeString;
}

// Оновлюємо дату та час кожну секунду
setInterval(updateDateTime, 1000);
updateDateTime(); // Відразу відобразити час
