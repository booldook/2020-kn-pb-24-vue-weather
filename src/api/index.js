import axios from 'axios'

const CITY_URL = '/json/city.json';

const axCity = async () => {
	try {
		const r = await axios.get(CITY_URL);
		return r.data.cities;
	}
	catch(e) {
		console.log(e);
		return e;
	}
}

export { axCity }