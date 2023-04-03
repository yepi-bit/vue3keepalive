<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="12">
        <TextOverflow class="content">这是一段文字,文字的效果是这样的，超出部分默认会被隐藏，如果点击展开会显示全部内容</TextOverflow>
      </el-col>
      <el-col :span="12">
        <div class="parentBox">
          <!-- 弹出内容 -->
          <div class="leftSlide" v-show="!hideLeft">
            <div class="item">
              <h6>2000</h6>
              <p>第一行的标题</p>
            </div>
            <div class="item">
              <h6>8463</h6>
              <p>第二行的标题</p>
            </div>
            <div class="item">
              <h6>2187</h6>
              <p>第三行的标题</p>
            </div>
          </div>
          <!-- 操作按钮 -->
          <div class="slideBtn" :class="hideLeft ? 'show' : 'hide'" @click="hideLeft = !hideLeft"></div>
        </div>
      </el-col>
    </el-row>
    <div class="maxBox">
      <!-- 左侧容器 -->
      <div class="leftBox" ref="leftNode">
        <div v-if="play">内容</div>
      </div>
      <!-- 点击容器 -->
      <div ref="btnNode" class="btnBox" @click="toggle" :title="title">
        <img v-if="play" src="https://i.postimg.cc/c4zMGwGj/sq.png" class="imageBox"/>
        <img v-else src="https://i.postimg.cc/c4zMGwGj/sq.png" class="imageBox"/>
      </div>
    </div>
  </div>
</template>

<script>
import TextOverflow from '../components/showComp.vue';

export default {
  components: {
    TextOverflow,
  },

  data() {
    return {
      hideLeft: true, //是否隐藏 slide
      play: true, //默认显示左侧容器
      title: "点击收起", //鼠标触摸提示文字
    };
  },
  methods: {
    async getData() {
    },
    toggle() {
      this.play = !this.play;
      //通过点击事件判断play的样式
      if (this.play) {
        this.$refs.btnNode.style =
            "transform:rotate(360deg);left:30%;transition:0.3s";
        this.$refs.leftNode.style = "width:30%;transition:0.3s";
        this.title = "点击收起";
      } else {
        this.$refs.btnNode.style =
            "transform:rotate(180deg);left:0px;transition:0.3s";
        this.$refs.leftNode.style = "width:0px;transition:0.3s";
        this.title = "点击展开";
      }
    },
  },

  created() {
    this.getData();
  },
};
</script>

<style scoped lang="scss">
.content {
  width: 300px;
  line-height: 20px;
  /* 设置为行高的整倍数，此处显示两行: 2 * 20px */
  max-height: 40px;
}

.parentBox {
  width: 100%;
  height: 50vh;
  background: rgb(0, 25, 46);
  color: #c8c8c8;

  .leftSlide {
    height: 45vh;
    width: 10vw;
    z-index: 999;
    // 自己用的时候换成本地图片
    background: url("https://i.postimg.cc/ZnbKZ0s5/bg-map-l.png");
    background-size: 100% 100%;
    background-color: rgba(11, 26, 62, 0.6);
    padding: 1vh 1vw 1vh 2vw;
    display: flex;
    flex-direction: column;

    .item {
      height: 7vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  .slideBtn {
    width: 1.3vw;
    height: 5.5vh;
    position: absolute;
    top: 19.8vh;
    z-index: 999;
    cursor: pointer;

    &.hide {
      // 自己用的时候换成本地图片
      background: url("https://i.postimg.cc/65TthkDg/sbtn.png");
      background-size: 100% 100%;
    }

    &.show {
      // 自己用的时候换成本地图片
      background: url("https://i.postimg.cc/zBD9GWN6/sbtn1.png");
      background-size: 100% 100%;
    }
  }
}

/* 最外层的盒子 */
.maxBox {
  width: 100%;
  height: 30vh;
  background: cornflowerblue;
  position: relative;
}

/* 左侧容器样式 */
.leftBox {
  position: absolute;
  width: 30%;
  height: 100%;
  background: cadetblue;
}

/* 点击容器样式 */
.btnBox {
  position: absolute;
  top: calc(50% - 40px);
  left: 30%;
  cursor: pointer;
  z-index: 999;
}

/* icon图片的样式 */
.imageBox {
  width: 35px;
  height: 80px;
}
</style>
