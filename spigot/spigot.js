function slide(){
    document.getElementById("left-panel").classList.toggle("slide");
    document.getElementById("cpPanel").classList.toggle("cp_slide");
}

function download(fileUrl, fileName) {
    console.log("Event `DOWNLOAD` called...");
    const a = document.createElement("a");
    a.href = fileUrl;
    a.setAttribute("download", fileName);
    a.click();
}

function downloadServerFile() {
    const verValue = document.getElementById("spigot").value;
    if(verValue === "1.19") {
        download('https://download.getbukkit.org/spigot/spigot-1.19.jar', 'server.jar');
    } else if(verValue === "1.18") {
        download('https://download.getbukkit.org/spigot/spigot-1.18.jar', 'server.jar');
    } else if(verValue === "1.17") {
        download('https://download.getbukkit.org/spigot/spigot-1.17.jar', 'server.jar');
    } else if(verValue === "1.16") {
        download('https://cdn.getbukkit.org/spigot/spigot-1.16.1.jar', 'server.jar');
    } else if(verValue === "1.15") {
        download('https://cdn.getbukkit.org/spigot/spigot-1.15.jar', 'server.jar');
    } else if(verValue === "1.14") {
        download('https://cdn.getbukkit.org/spigot/spigot-1.14.jar', 'server.jar');
    } else if(verValue === "1.13") {
        download('https://cdn.getbukkit.org/spigot/spigot-1.13.jar', 'server.jar');
    } else if(verValue === "1.12") {
        download('https://cdn.getbukkit.org/spigot/spigot-1.12.jar', 'server.jar');
    } else if(verValue === "1.11") {
        download('https://cdn.getbukkit.org/spigot/spigot-1.11.jar', 'server.jar');
    } else if(verValue === "1.10") {
        download('https://cdn.getbukkit.org/spigot/spigot-1.10.jar', 'server.jar');
    } else if(verValue === "1.9") {
        download('https://cdn.getbukkit.org/spigot/spigot-1.9.jar', 'server.jar');
    } else if(verValue === "1.8") {
        download('https://cdn.getbukkit.org/spigot/spigot-1.8.8.jar', 'server.jar');
    }
}