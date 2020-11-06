const axios = require('axios');


const getClima = async(latitud, longitud) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=034c35ed0525859a302f978d32da12c3&units=metric`);
    if (resp.data.length === 0) {
        throw new Error(`No hay resultados para ${latitud} ${longitud}`);
    }
    Temperatura = resp.data.main.temp;
    Temperatura_Min = resp.data.main.temp_min;
    Temperatura_Max = resp.data.main.temp_max;

    return {
        Temperatura,
        Temperatura_Max,
        Temperatura_Min
    }
}

module.exports = {
    getClima
}