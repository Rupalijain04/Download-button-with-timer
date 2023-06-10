const downloadBtn = document.querySelector(".download-btn");
// google drive's file link
const fileLink = "https://docs.google.com/spreadsheets/d/14cvKhW4xLb-z0vYGVWxkj6LKFihgkugya_cgp2T9Adw/edit?usp=share_link";

const initTimer = () => {
    // if downloadBtn contains disable-timer class then only if conditional code will run
    if(downloadBtn.classList.contains("disable-timer")){
        return (location.href = fileLink);
    }


    //  getting data-timer attribute from HTML
    let timer = downloadBtn.dataset.timer;
    downloadBtn.classList.add("timer");
    // replacing downloadBtn's html by following text
    downloadBtn.innerHTML = `Your file will download in <b>${timer}</b> seconds`;

    // creating initCounter variable with setInterval function
    const initCounter = setInterval(() => {
        if(timer > 0){
            timer--
            return downloadBtn.innerHTML = `Your file will download in <b>${timer}</b> seconds`;
        }
        clearInterval(initCounter);
        location.href = fileLink;
        downloadBtn.textContent = "Your file is downloading...";

        setTimeout(() => {
            downloadBtn.classList.replace("timer", "disable-timer");
            downloadBtn.innerHTML = `<span class="icon material-symbols-outlined">download</span>
            <span class="text">Download Again</span>`;
        }, 2000)
    }, 1000)    //1000 milliseconds = 1s
};

downloadBtn.addEventListener("click", initTimer)