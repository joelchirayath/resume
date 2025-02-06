function openResumeModal() {
    document.getElementById("resumeModal").style.display = "flex";
    setTimeout(() => {
        document.getElementById("resumeModal").classList.add("show");
    }, 10);
}

function closeResumeModal(event) {
    if (event.target.id === "resumeModal") {
        document.getElementById("resumeModal").classList.remove("show");
        setTimeout(() => {
            document.getElementById("resumeModal").style.display = "none";
        }, 300);
    }
}
