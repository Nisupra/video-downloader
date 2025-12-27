function download() {
    const platform = document.getElementById("platform").value;
    const url = document.getElementById("url").value;
    const result = document.getElementById("result");

    if (!url) {
        result.innerHTML = "Masukkan URL terlebih dahulu.";
        return;
    }

    let api = "";

    if (platform === "tiktok") {
        api = "https://tikwm.com/api/?url=";
    } 
    else if (platform === "ytmp3") {
        api = "https://api.vevioz.com/api/button/mp3?url=";
    } 
    else if (platform === "instagram") {
        api = "https://snapinsta.app/action.php?url=";
    }

    result.innerHTML = `
        <p>Jika tidak otomatis, klik link di bawah:</p>
        <a href="${api + url}" target="_blank">Download Sekarang</a>
    `;
}