document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".delete-account").addEventListener("click", function () {
        if (confirm("Are you sure you want to delete your account?")) {
            alert("Account deleted successfully.");
        }
    });
});
