<template>
  <div>
    <!-- <CityHeader></CityHeader> -->
    <!-- <CityPopular :city_Choice_list = 'city_Choice_list'></CityPopular> -->
    <CitySwitch :city_Choice_list = 'city_Choice_list'></CitySwitch>
    <!-- <CitySwitch :Abroad_City_list = 'Abroad_City_list'></CitySwitch> -->
    <CityLocation :cities = 'cities' @chenge = 'chengeLocation'></CityLocation>
    <CityAddress :cities = 'cities'></CityAddress>
  </div>
</template>
<script>
import axios from 'axios'
import CitySwitch from './components/City-switch'
import CityAddress from './components/City-Address'
// import CityHeader from './components/City-Header'
import CityLocation from './components/City-Location'
// import CityPopular from './components/City-Popular'
export default {
  name: 'City',
  data () {
    return {
      city_Choice_list: [],
      cities: {}
    }
  },
  components: {
    // CityHeader,
    CityAddress,
    CityLocation,
    // CityPopular,
    CitySwitch
  },
  methods: {
    getCityList () {
      axios.get('/api/city.json')
        .then(this.getCityRendering)
    },
    getCityRendering (rse) {
      rse = rse.data
      if (rse.data) {
        const data = rse.data
        this.city_Choice_list = data.city_Choice_list
        this.cities = data.cities
      }
    },
    chengeLocation (location) {
      console.log(location)
    }
  },
  mounted () {
    this.getCityList()
  }
}
</script>
<style lang="stylus" scoped>
</style>
