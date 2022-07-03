<template>
  <div>
    <div>
      timeProgress
    </div>
    <div>
      <Timeprogress :numValue="Value" />
    </div>
  </div>
</template>

<script>

import Timeprogress from './components/TimeProgressBar'
export default {
  data () {
    return {
      Value: 5000
    }
  },
  components: {
    Timeprogress
  }
}
</script>
<style lang='scss' scoped>
</style>
