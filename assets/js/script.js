document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const pages = document.querySelectorAll(".page");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);

            // 1. Atur kelas aktif pada menu navigasi
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");

            // 2. Sembunyikan semua halaman, tampilkan yang dipilih
            pages.forEach(page => {
                page.classList.remove("active");
                if (page.getAttribute("id") === targetId) {
                    page.classList.add("active");
                }
            });

            window.location.hash = targetId;
        });
    });
});
