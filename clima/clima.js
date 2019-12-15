const axios = require("axios");

const getClima = async(lat, lng) => {

    const resp = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=d7da1a803168fa92f64584efce15eff7&units=metric`

    );
    return resp.data.main.temp;


}

module.exports = {
    getClima
}