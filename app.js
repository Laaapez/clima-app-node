const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const axios = require('axios');
const { getLugarLatLong } = require('./lugar/lugar');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad a obtener el clima',
        demand: true
    }
}).argv

const encodedURL = encodeURI(argv.direccion);
//clima.getClima(40.68908, -73.95861)
//.then(console.log);

const getInfo = async(direccion) => {
    try {
        const coordenadas = await lugar.getLugarLatLong(direccion);
        const Temp = await clima.getClima(coordenadas.lat, coordenadas.lon);
        return `El clima en ${argv.direccion} es de ${Temp.Temperatura} la maxima fue ${Temp.Temperatura_Max} y la minima es ${Temp.Temperatura_Min}`;
    } catch (err) {
        return `No se pudo encontrar el clima de ${argv.direccion}`
    }
}

getInfo(encodedURL)
    .then(console.log)
    .catch(console.log)


//axios.get(`https://geocode.xyz/,+758785699555866869761x119703+"${ encodedURL }"?json=1`)
//.then(resp => {
//console.log(resp.data.longt);
//console.log(resp.data.latt);
//})

//.catch(err => {
//console.log('Error', err)
//})

//argv.direccion