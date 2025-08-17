const container = document.getElementById("container");

    const makeGrid = (size) => {
        container.style.setProperty("--size", size);
        container.innerHTML= "";
    
        for(let i = 0; i < size * size; i++) {
            const divs = document.createElement("div");
            divs.classList.add("square");
            container.appendChild(divs);
        };

        const divs = document.querySelectorAll(".square");
        const darkBtn = document.getElementById("dark");
            darkBtn.addEventListener("click", () => darkFunc());

    const darkFunc = () => {
        divs.forEach(div => {
            div.hoverCount = 0;
            div.addEventListener("mouseover", () => {
                if(div.hoverCount < 10) {
                    div.hoverCount += 1;
                    const count = div.hoverCount / 10;
                    div.style.background = `rgba(0,0,0,${count})`;
                };
            }); container.appendChild(div);
        });  
    };  
    // Black button

        const blackBtn = document.getElementById("black");
        blackBtn.addEventListener("click", () => blackFunc());

    const blackFunc = () => {
        const divs = document.querySelectorAll(".square");
            divs.forEach(div => {
                div.addEventListener("mouseover", () => {
                div.style.background = "black";
            });
        });
    };
    // Rainbow button
        
        const rgbBtn = document.getElementById("rgb");
        rgbBtn.addEventListener("click", () => rgbFunc());
        
    const rgbFunc = () => {
        const divs = document.querySelectorAll(".square");
            divs.forEach(div => {
                div.hoverCount = 0;
                div.baseColor = null;

                div.addEventListener("mouseover", () => {
                    if(div.hoverCount < 10) {
                        div.hoverCount += 1;
                         if (!div.baseColor) {
                                const r = Math.floor(Math.random() * 256);
                                const g = Math.floor(Math.random() * 256);
                                const b = Math.floor(Math.random() * 256);
                                div.baseColor = { r, g, b };
                            } const opacity = div.hoverCount / 10;
                                div.style.backgroundColor = 
                                    `rgba(${div.baseColor.r}, ${div.baseColor.g}, ${div.baseColor.b}, ${opacity})`;
                    };
                });
            });
    };
    // Reset button
    
        const resetBtn = document.getElementById("reset");

        resetBtn.addEventListener("click", () => {
        makeGrid(64); });
    
    };                 

    


makeGrid(64);
