let deportes = document.querySelector("#deportes");

fetch("../data.json")
.then((resp) => resp.json())
.then((data) => {
    console.log(data);

    data.map((item) => {
    let content = document.createElement("div");
    content.innerHTML = `
        <h4>${item.name}</h4>
        <img src="${item.img}" alt="${item.name}">
        <p>${item.description}</p>
    `;
    deportes.append(content);
    });
})
.catch((error) => {
    console.error("Error al cargar los datos:", error);
});
;

