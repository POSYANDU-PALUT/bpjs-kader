/* Alamat server (Google Apps Script). Diisi setelah penerapan web selesai. */
window.BK = { api: "https://script.google.com/macros/s/AKfycbwfURAot8XS8MG-Entx_O6Q1AzQNVWSThthc5dNvIZMa6UuPlaGOcMlUQ6C459rnt7t-A/exec" };
(function () {
  /* Hanya untuk uji di komputer sendiri: ?api=... dipakai bila alamat halaman localhost */
  try {
    var h = location.hostname;
    if (h === "localhost" || h === "127.0.0.1") {
      var q = new URLSearchParams(location.search).get("api");
      if (q) window.BK.api = q;
    }
  } catch (e) {}
})();
