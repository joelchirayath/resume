// Function to open the modal with fade-in effect
function openModal() {
    const modal = document.getElementById('certModal');
    modal.classList.add('show'); // Add the 'show' class to make it visible
}

// Function to close the modal with fade-out effect
function closeModal() {
    const modal = document.getElementById('certModal');
    modal.classList.remove('show'); // Remove the 'show' class to hide it
}

// Optional: Close the modal if escape key is pressed
window.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});
