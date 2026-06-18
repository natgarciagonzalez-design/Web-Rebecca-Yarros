// ==========================================
// MODAL
// ==========================================
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
function openModal(type){
    modal.style.display = "flex";
    if(type === "rebecca"){
        modalTitle.innerHTML = "Rebecca Yarros";
        modalText.innerHTML = `
        <p>
        Rebecca Yarros es una autora estadounidense reconocida
        internacionalmente por sus novelas de romance,
        ficción contemporánea y fantasía.
        Durante años construyó una sólida carrera literaria,
        pero alcanzó fama mundial gracias a la saga
        <strong>The Empyrean</strong>.
        Con Fourth Wing revolucionó el fenómeno BookTok,
        convirtiéndose rápidamente en una de las escritoras
        más vendidas del mundo.
        Sus historias destacan por:
        </p>
        <ul>
        <li>Personajes emocionalmente complejos.</li>
        <li>Romance intenso.</li>
        <li>Construcción de mundos fantástica.</li>
        <li>Dragones y criaturas mágicas.</li>
        <li>Intriga política.</li>
        <li>Conflictos militares.</li>
        </ul>
        <p>
        Rebecca ha expresado en numerosas ocasiones
        su amor por las historias protagonizadas por
        mujeres fuertes que desafían expectativas.
        El éxito de Fourth Wing fue inmediato,
        alcanzando listas de best sellers internacionales
        y generando una enorme comunidad de lectores.
        Actualmente es considerada una de las figuras
        más importantes del género Romantasy.
        </p>
        `;
    }
    else if(type === "fourthwing"){
        modalTitle.innerHTML = "Fourth Wing";
        modalText.innerHTML = `
        <p>
        Violet Sorrengail siempre soñó con convertirse
        en escriba.
        Sin embargo, su madre, una poderosa general,
        la obliga a ingresar en el temido
        Basgiath War College para convertirse
        en jinete de dragones.
        Allí deberá sobrevivir a pruebas mortales,
        compañeros dispuestos a matarla y dragones
        que podrían rechazarla.
        A medida que avanza en la academia,
        descubre secretos capaces de cambiar
        el destino de todo su reino.
        Fourth Wing combina:
        </p>
        <ul>
        <li>Romance.</li>
        <li>Acción militar.</li>
        <li>Magia.</li>
        <li>Dragones.</li>
        <li>Intriga política.</li>
        </ul>
        `;
    }
    else if(type === "ironflame"){
        modalTitle.innerHTML = "Iron Flame";
        modalText.innerHTML = `
        <p>
        Tras los acontecimientos de Fourth Wing,
        Violet enfrenta una realidad mucho más peligrosa.
        Las verdades ocultas comienzan a salir a la luz
        y la guerra amenaza con consumir el continente.
        Mientras intenta proteger a quienes ama,
        deberá enfrentarse a nuevos enemigos,
        traiciones inesperadas y decisiones imposibles.
        Iron Flame amplía enormemente el universo
        de The Empyrean.
        </p>
        `;
    }
    else if(type === "onyxstorm"){
        modalTitle.innerHTML = "Onyx Storm";
        modalText.innerHTML = `
        <p>
        El conflicto alcanza una escala sin precedentes.
        Violet y sus aliados deberán enfrentarse
        a amenazas que ponen en peligro
        el futuro de su mundo.
        Onyx Storm continúa desarrollando
        los misterios, las alianzas
        y las consecuencias de las decisiones
        tomadas anteriormente.
        </p>
        `;
    }
    else if(type === "riders"){
        modalTitle.innerHTML = "Riders Quadrant";
        modalText.innerHTML = `
        <p>
        El cuadrante más prestigioso de Basgiath.
        Aquí entrenan los futuros jinetes de dragones,
        enfrentando pruebas extremadamente peligrosas.
        </p>
        `;
    }
    else if(type === "scribes"){
        modalTitle.innerHTML = "Scribes Quadrant";
        modalText.innerHTML = `
        <p>
        Los escribas conservan la historia,
        recopilan conocimiento y registran
        los acontecimientos del reino.
        </p>
        `;
    }
    else if(type === "healers"){
        modalTitle.innerHTML = "Healers Quadrant";
        modalText.innerHTML = `
        <p>
        Encargados de la medicina,
        el cuidado de los heridos
        y la investigación sanitaria.
        </p>
        `;
    }
    else if(type === "infantry"){
        modalTitle.innerHTML = "Infantry Quadrant";
        modalText.innerHTML = `
        <p>
        La fuerza terrestre del ejército.
        Sus integrantes son soldados entrenados
        para combatir sin vínculo con dragones.
        </p>
        `;
    }
}
// ==========================================
// CERRAR MODAL
// ==========================================
function closeModal(){
    modal.style.display = "none";
}
window.onclick = function(event){
    if(event.target == modal){
        closeModal();
    }
}
// ==========================================
// PARTICULAS MAGICAS
// ==========================================
function createParticle(){
    const particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.left =
        Math.random() * window.innerWidth + "px";
    particle.style.top =
        window.innerHeight + "px";
    particle.style.width =
        Math.random() * 6 + 2 + "px";
    particle.style.height =
        particle.style.width;
    document.body.appendChild(particle);
    setTimeout(() => {
        particle.remove();
    }, 10000);
}
setInterval(createParticle, 250);
// ==========================================
// RUNAS MAGICAS
// ==========================================
const runes = ["✦","✧","✩","✪","⚜","☽"];
function createRune(){
    const rune = document.createElement("div");
    rune.classList.add("rune");
    rune.innerHTML =
        runes[Math.floor(Math.random() * runes.length)];
    rune.style.left =
        Math.random() * window.innerWidth + "px";
    rune.style.top =
        window.innerHeight + "px";
    document.body.appendChild(rune);
    setTimeout(() => {
        rune.remove();
    }, 12000);
}
setInterval(createRune, 2000);
console.log("The Empyrean Project Loaded");
