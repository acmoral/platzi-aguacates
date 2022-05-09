/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector('#app')
// api de internacionalización para darle formato al precio
const formatPrice = (price) =>{
    const newPrice = new window.Intl.NumberFormat('en-En',{
        style: "currency",
        currency :"USD"
    }).format(price);
    return newPrice
};
//web api
// connect to server
window
    .fetch(`${baseUrl}/api/avo`)
    //procesar la respuesta y convertirla a json
    .then((respuesta) => respuesta.json())
    // JSON -> Data -> renderizar info browser
    .then(responseJson => {
        const todosLosItems =[];
        responseJson.data.forEach((item) => {
            //crear imagen
            const imagen =  document.createElement('img');
            imagen.src = `${baseUrl}${item.image}`;
            // crear titulo
            const titulo = document.createElement('h2');
            titulo.textContent = item.name;
            titulo.className ="text-3xl text-green-500";
            //crear precio
            const price = document.createElement('div');
            price.textContent=formatPrice(item.price);
            // contenedor por aguacate
            const container = document.createElement('div');
            container.append(imagen,titulo,price);
            todosLosItems.push(container);
            container.className = "w-96 justify-self-center"
        });
        appNode.append(...todosLosItems);
    });

