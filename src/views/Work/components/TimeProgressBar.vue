<template>
  <div>
    <div>{{ numValue }}</div>
    <div class="cont_box">
      <div class="line_box">
        <!-- 弹窗 -->
        <div :style="{ marginLeft: widthVal }" class="popup_box">
          <div class="popup_top">成长值</div>
          <div class="popup_bottom">{{ numValue }}</div>
        </div>
        <!-- 进度条 -->
        <div class="line">
          <div class="colour_circular circular_pub" v-for="(itemColor, index) in colorCircular" :key="index">
            <div class="center_circular"></div>
          </div>
          <div class="circular circular_pub" v-for="itemNocolor in circular" :key="itemNocolor.topText"></div>
          <div :style="{ width: widthVal }" class="color_line"></div>
        </div>
      </div>
      <!-- 文字 -->
      <div class="timeBar_box">
        <div class="item" v-for="(i, index) in textData" :key="index">
          <div class="item_top">{{ i.topText }}</div>
          <div>{{ i.bottomText }}</div>
        </div>
      </div>
    </div>
    <!-- 文字 end -->
  </div>
</template>

<script>
export default {
  // numValue 当前值
  props: {
    numValue: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      textData: [
        {
          topText: 0,
          bottomText: '1星'
        }, {
          topText: 320,
          bottomText: '2星'
        }, {
          topText: 2500,
          bottomText: '3星'
        }, {
          topText: 8700,
          bottomText: '4星'
        }, {
          topText: 20000,
          bottomText: '5星'
        }, {
          topText: 40000,
          bottomText: '6星'
        }, {
          topText: 150000,
          bottomText: '7星'
        }
      ]
    }
  },
  computed: {
    val: function () {
      const val = this.textData.find(e => {
        return this.numValue < e.topText
      })
      return val
    },
    valIndex: function () {
      const val = this.textData.findIndex(e => {
        return this.numValue < e.topText
      })
      return val
    },
    widthProportion: function () {
      // 每个球占比 单位%
      const proportion = 100 / this.circularLength
      return `${proportion}%`
    },
    // 返回小球的个数
    circularLength: function () {
      return this.textData.length
    },
    // 返回带有颜色的小球个数
    colorCircular: function () {
      return this.valIndex
    },
    // 返回没有颜色小球的个数
    circular: function () {
      return this.textData.length - this.valIndex
    },
    // 进度条
    widthVal: function () {
      // 每个球占比 单位%
      const proportion = 100 / (this.circularLength - 1)
      // 左侧球距离
      const distance = (this.valIndex - 1) * proportion
      // 多余的百分比
      const lineInside = (this.textData[this.valIndex].topText - this.textData[this.valIndex - 1].topText) / 100
      const result = distance + this.numValue / lineInside * proportion / 100
      return `${result}%`
    }
  },
  created () {
  }
}
</script>
<style lang='scss' scoped>
.cont_box {
  height: 600px;
  padding-top: 100px;
  background-color: rgb(135, 135, 135);
  padding: 0 30px;
}

.line_box {
  padding: 0 10px;

  .popup_box {
    position: relative;
    background-color: rgb(34, 194, 31);
    width: 100px;
    height: 60px;
    transform: translateX(-50%);
    margin-bottom: 8px;

    .popup_top {
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
    }

    .popup_bottom {
      position: absolute;
      top: 30px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .line {
    background-color: #484b5a;
    width: 100%;
    height: 2px;
    display: flex;
    justify-content: space-between;
    position: relative;

    .colour_circular {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 15px;
      height: 15px;
      border-radius: 15px;
      transform: translateY(-50%);
      background-color: rgb(187, 169, 169);

      .center_circular {
        width: 10px;
        height: 10px;
        border-radius: 15px;
        background-color: rgb(175, 65, 65);
      }
    }

    .circular {
      width: 10px;
      height: 10px;
      border-radius: 10px;
      transform: translateY(-50%);
      background-color: rgb(105, 104, 104);
    }

    .color_line {
      position: absolute;
      top: 0;
      left: 3px;
      height: 2px;
      background-color: rgb(175, 65, 65);
    }
  }
}

.timeBar_box {
  display: flex;
  justify-content: space-between;
  color: #eee;
  padding-top: 10px;

  .item {
    position: relative;
    padding-top: 20px;

    .item_top {
      font-size: 12px;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>
