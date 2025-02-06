document.addEventListener("DOMContentLoaded", function () {
    const getStartedBtn = document.querySelector("#getStartedBtn");

    if (getStartedBtn) {
        getStartedBtn.addEventListener("click", function () {
            alert("Thank you for your interest! We will contact you soon.");
        });
    } else {
        console.error("Button with ID 'getStartedBtn' not found.");
    }
});
