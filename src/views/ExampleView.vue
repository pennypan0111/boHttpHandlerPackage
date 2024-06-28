<script>
export default {
  data() {
    return {
      date: '',
      timeZone: ''
    }
  },
  created() {
    this.initData()
  },
  methods: {
    async initData() {
      const data = await this.$BOHttpHandler.get('/api/timezone/Asia/Taipei')

      const year = data.utc_datetime.slice(0, 4)
      const month = data.utc_datetime.slice(5, 7)
      const day = data.utc_datetime.slice(8, 10)

      const zone = data.timezone.slice(5, 11)

      this.date = `${year} / ${month} / ${day}`
      this.timeZone = zone
    }
  }
}
</script>

<template>
  <div>Use World Time Open API to Test Customization Axios Package</div>
  <div>----------------------------------------------------</div>
  <div>Get Today：{{ date }}</div>
  <div>Get TimeZone：{{ timeZone }}</div>
</template>
