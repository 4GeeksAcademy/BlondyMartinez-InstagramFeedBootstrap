function like(card) {
    var icon = card.querySelector('.icon');
    var likesCount = card.querySelector('.likes-count');
    var currentLikesCount = parseInt(likesCount.textContent);

    if(icon.classList.contains('fa-solid')) {
        icon.classList.remove('fa-solid');
        icon.style.color = 'black';
        likesCount.textContent = currentLikesCount - 1;
    } else {
        icon.classList.add('fa-solid');
        icon.style.color = 'red';
        likesCount.textContent = currentLikesCount + 1;
    }
}