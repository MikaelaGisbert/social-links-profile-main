document.addEventListener('DOMContentLoaded', function() {
  const createCardNode = () => {
    const container = document.createElement("div");
    container.className = "container";
    
    const cabeza = document.createElement("div");
    cabeza.className = "cabeza";
    
    const imagen = document.createElement("img");
    imagen.src = `./avatar-jessica.jpeg`;

    const medio = document.createElement("div");
    medio.className = "medio";

    const nombre = document.createElement("h2");
    nombre.className = "nombre";
    nombre.textContent = 'Jessica Randall';

    const nacionalidad = document.createElement("h4");
    nacionalidad.className = "nacionalidad";
    nacionalidad.textContent = 'London, United Kingdom';

    const descripcion = document.createElement("h5");
    descripcion.className = "descripcion";
    descripcion.textContent = '"Front-end developer and avid reader".';

    const inferior = document.createElement("div");
    inferior.className = "inferior";

    const buttons = document.createElement('div');
    buttons.className = "buttons";

    const button1 = document.createElement("button");
    button1.className = "botones";
    button1.textContent = 'GitHub';

    const button2 = document.createElement("button");
    button2.className = "botones";
    button2.textContent = 'Frontend Mentor';

    const button3 = document.createElement("button");
    button3.className = "botones";
    button3.textContent = 'LinkedIn';

    const button4 = document.createElement("button");
    button4.className = "botones";
    button4.textContent = 'Twitter';

    const button5 = document.createElement("button");
    button5.className = "botones";
    button5.textContent = 'Instagram';

    container.appendChild(cabeza); 
    cabeza.appendChild(imagen);
    medio.appendChild(nombre);
    medio.appendChild(nacionalidad);
    medio.appendChild(descripcion);
    inferior.appendChild(button1);
    inferior.appendChild(button2);
    inferior.appendChild(button3);
    inferior.appendChild(button4);
    inferior.appendChild(button5);

    container.appendChild(medio);
    container.appendChild(inferior);

    const card = document.createElement("div");
    card.className = "card";
    card.appendChild(container);
    
    return card;
  }

  const mountNode = document.querySelector("#app")
  const addCardButton = document.querySelector('button')
  const addCard = () => {
    mountNode.appendChild(createCardNode())
}

addCardButton.addEventListener('click', addCard)
});