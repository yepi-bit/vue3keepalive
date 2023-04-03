<template>
  <div>
    <div class="module-list-wrap">
      <icon name="xiangzuojiantou" class="left-icon" @click="leftmove" >左箭头</icon>
      <ul class="module-list" :style="{width: itemlist.length * 100 + 'px','margin-left': xxx * 100 + 'px'}">
        <li v-for="(item, index) in itemlist" :key="index">{{ item.name }}</li>
      </ul>
      <icon class="right-icon" @click="rightmove" >右箭头</icon>
    </div>

  </div>
</template>
<script>
export default {
  data () {
    return {
      itemlist: [
        {name:'北京'},
        {name:'上海'},
        {name:'天津'},
        {name:'重庆'},
        {name:'河北'},
        {name:'山西'},
        {name:'内蒙古'},
        {name:'辽宁'},
        {name:'吉林'},
        {name:'黑龙江'},
        {name:'江苏'},
        {name:'浙江'},
        {name:'安徽'},
        {name:'福建'},
        {name:'江西'},
        {name:'山东'},
        {name:'河南'},
        {name:'湖北'},
        {name:'湖南'},
        {name:'广东'},
        {name:'广西'},
        {name:'海南'},
        {name:'四川'},
        {name:'贵州'},
        {name:'云南'},
        {name:'西藏'},
        {name:'陕西'},
        {name:'甘肃'},
        {name:'青海'},
        {name:'宁夏'},
        {name:'新疆'}
      ],
      xxx: 0,
    }
  },
  methods:{
    leftmove() {
      if (this.xxx < 0) {
        this.xxx += 1;
      }
    },
    rightmove() {
      if (this.xxx > -(this.itemlist.length + this.xxx)) {
        this.xxx -= 1;
      }
    },
  }
}
</script>

<style scoped>
.module-list-wrap{
  /*display: flex;*/
  width: 400px;
  overflow: hidden;
  overflow-x: scroll;
}
.module-list li{
  font-style: normal;
  display: inline-block;
  width: 20px;
}
</style>