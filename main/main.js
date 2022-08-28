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
    const verValue = document.getElementById("vanilla").value;
    if(verValue === "1.19") {
        download('https://launcher.mojang.com/v1/objects/e00c4052dac1d59a1188b2aa9d5a87113aaf1122/server.jar', 'server.jar');
    } else if(verValue === "1.18") {
        download('https://launcher.mojang.com/v1/objects/3cf24a8694aca6267883b17d934efacc5e44440d/server.jar', 'server.jar');
    } else if(verValue === "1.17") {
        download('https://launcher.mojang.com/v1/objects/0a269b5f2c5b93b1712d0f5dc43b6182b9ab254e/server.jar', 'server.jar');
    } else if(verValue === "1.16") {
        download('https://launcher.mojang.com/v1/objects/a412fd69db1f81db3f511c1463fd304675244077/server.jar', 'server.jar');
    } else if(verValue === "1.15") {
        download('https://launcher.mojang.com/v1/objects/e9f105b3c5c7e85c7b445249a93362a22f62442d/server.jar', 'server.jar');
    } else if(verValue === "1.14") {
        download('https://launcher.mojang.com/v1/objects/f1a0073671057f01aa843443fef34330281333ce/server.jar', 'server.jar');
    } else if(verValue === "1.13") {
        download('https://launcher.mojang.com/mc/game/1.13/server/d0caafb8438ebd206f99930cfaecfa6c9a13dca0/server.jar', 'server.jar');
    } else if(verValue === "1.12") {
        download('https://launcher.mojang.com/mc/game/1.12/server/8494e844e911ea0d63878f64da9dcc21f53a3463/server.jar', 'server.jar');
    } else if(verValue === "1.11") {
        download('https://launcher.mojang.com/mc/game/1.11/server/48820c84cb1ed502cb5b2fe23b8153d5e4fa61c0/server.jar', 'server.jar');
    } else if(verValue === "1.10") {
        download('https://launcher.mojang.com/mc/game/1.10/server/a96617ffdf5dabbb718ab11a9a68e50545fc5bee/server.jar', 'server.jar');
    } else if(verValue === "1.9") {
        download('https://launcher.mojang.com/mc/game/1.9/server/b4d449cf2918e0f3bd8aa18954b916a4d1880f0d/server.jar', 'server.jar');
    } else if(verValue === "1.8") {
        download('https://launcher.mojang.com/mc/game/1.8.9/server/b58b2ceb36e01bcd8dbf49c8fb66c55a9f0676cd/server.jar', 'server.jar');
    }

        /*
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

         */
}