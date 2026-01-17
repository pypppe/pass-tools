<script>
(function () {
    const faviconUrl = "https://ptools.astrarune.com/favicon.ico";

    function setFavicon() {
        document.querySelectorAll("link[rel*='icon']").forEach(el => el.remove());

        const link = document.createElement("link");
        link.rel = "icon";
        link.type = "image/x-icon";
        link.href = faviconUrl;

        document.head.appendChild(link);
    }

    setFavicon();

    window.addEventListener("load", setFavicon);

    const observer = new MutationObserver(setFavicon);
    observer.observe(document.head, { childList: true });
})();
</script>
