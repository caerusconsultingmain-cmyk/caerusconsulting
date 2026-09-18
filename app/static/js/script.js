document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("project-form");
    const status = form?.querySelector(".form-status");

    if (!form) {
        return;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (status) {
            status.textContent = "Project enquiry submission will be connected before launch.";
        }
    });
});
