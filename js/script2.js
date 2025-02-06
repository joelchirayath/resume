document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("resumeModal").style.display = "none";
});

function openResumeModal() {
    let modal = document.getElementById("resumeModal");
    modal.style.display = "flex"; // Make modal visible
}

function closeResumeModal() {
    let modal = document.getElementById("resumeModal");
    modal.style.display = "none"; // Hide modal when clicking outside
}
