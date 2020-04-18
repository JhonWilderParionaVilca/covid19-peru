import axios from "axios";
import moment from "moment";

const URL_BASE = "https://covid19.mathdro.id/api";

export default {
  async fetchNameCountries() {
    try {
      const {
        data: { countries },
      } = await axios.get(`${URL_BASE}/countries`);

      return countries.map((country) => country.name);
    } catch (error) {
      return error;
    }
  },

  async fetchData(country) {
    let url_change = URL_BASE;

    if (country) {
      url_change = `${URL_BASE}/countries/${country}`;
    }

    try {
      const {
        data: { confirmed, recovered, deaths, lastUpdate },
      } = await axios.get(url_change);

      const formatDate = moment(lastUpdate).format("LLL");
      return {
        confirmed: confirmed.value,
        recovered: recovered.value,
        deaths: deaths.value,
        lastUpdate: formatDate,
      };
    } catch (error) {
      return error;
    }
  },

  async fetchDailyData() {
    try {
      const { data } = await axios.get(`${URL_BASE}/daily`);

      const modifiedData = data.map((dailyData) => ({
        confirmed: dailyData.confirmed.total,
        deaths: dailyData.deaths.total,
        date: dailyData.reportDate,
      }));

      return modifiedData;
    } catch (error) {
      return error;
    }
  },
};
