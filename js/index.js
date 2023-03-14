const api_url = 'https://randomuser.me/api/?gender=male';

function inicializarBotones() {
    let botones = document.getElementsByClassName('btn_mas_info');
    let seccion_mas_info = document.getElementById('mas_info');

    Array.from(botones).forEach(function (boton) {
        boton.addEventListener('click', () => {
            seccion_mas_info.classList.remove('hidden');
            seccion_mas_info.scrollIntoView();
        })
    });

}

function escribirDatosPersona(persona) {
    const $nombre_apellido = Array.from(document.getElementsByClassName('nombre-apellido'));
    const $foto_perfil = document.getElementById('foto-perfil');
    const $email = document.getElementById('email');
    const $fecha_nacimiento = document.getElementById('fecha-nacimiento');
    const $direccion = document.getElementById('direccion');
    const $num_telefono = document.getElementById('num-telefono');
    const $num_celular = document.getElementById('num-celular');

    $nombre_apellido.forEach((e) => {
        e.textContent = persona.name.first + ' ' + persona.name.last;
    });
    $foto_perfil.src = persona.picture.large;
    $email.textContent = persona.email;
    $fecha_nacimiento.textContent = (persona.dob.date).substring(0, 10);
    // Medio quilombo el formato de las fechas lo dejo para otro dia
    $direccion.textContent = persona.location.street.name + ', ' + persona.location.street.number;
    $num_telefono.textContent = persona.phone;
    $num_celular.textContent = persona.cell;
    // Lo mismo del formato de numeros de telefono queda para el yo del maniana

}

async function initialize() {
    const respuesta = await fetch(api_url);
    const datos = await respuesta.json();
    const { results: { 0: persona } } = datos;

    inicializarBotones();
    escribirDatosPersona(persona);
}

initialize()