const axios = require('axios');

const getLugarLatLong = async(direccion) => {

    const encodedURL = encodeURI(direccion);


    const resp = await axios.get(`https://geocode.xyz/,+758785699555866869761x119703+"${ encodedURL }"?json=1`)

    if (resp.data.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`)
    }
    lon = resp.data.longt;
    lat = resp.data.latt;
    return {
        lon,
        lat
    }
    //.then(resp => {
    //console.log(resp.data.long);
    //console.log(resp.data.latt);
    //})

    //.catch(err => {
    //console.log('Error', err)
    //})
}

module.exports = {
    getLugarLatLong
}