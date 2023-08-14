function showDescription(id) {
    const description = document.getElementById(`desc${id}`);
    if (description.style.display === 'block') {
        description.style.display = 'none';
    } else {
        description.style.display = 'block';
    }
}
