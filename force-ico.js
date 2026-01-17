document.addEventListener("DOMContentLoaded", () => {
    const faviconUrl = "https://ptools.astrarune.com/favicon.ico";

    document.querySelectorAll("link[rel*='icon']").forEach(el => el.remove());

    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/x-icon";
    link.href = faviconUrl;

    document.head.appendChild(link);
});
