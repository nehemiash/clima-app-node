const lugar = require('./lugar/lugar');
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la Ciudad para obtener el clima',
        demand: true
    }

}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima
//     .getClima(-25.420000, -54.630001)
//     .then(console.log)
//     .catch(console.log)

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El La temperatura en ${ coords.direccion} es de ${ temp }ºC.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }


}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)