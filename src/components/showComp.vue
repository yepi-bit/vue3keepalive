<template>
  <div :class="{'overflow-hidden': !isShowMore}">
    <slot></slot>
    <span v-if="isShowMore" class="link" @click="handleHideMoreClick">收起</span>
    <span v-else class="show-more-btn" @click="handleShowMoreClick">
      <span>...</span>
      <span class="link">展开</span>
    </span>
  </div>

</template>

<script>
export default {
  data() {
    return {
      isShowMore: false,
    };
  },
  methods: {
    handleShowMoreClick() {
      this.isShowMore = true;
    },

    handleHideMoreClick() {
      this.isShowMore = false;
    },
  }
};
</script>

<style>
.overflow-hidden {
  position: relative;
  overflow: hidden;
}

.show-more-btn {
  position: absolute;
  display: block;
  right: 0;
  bottom: 0;
  width: 60px;
  text-align: right;
  /* 背景从透明到白色，过渡 */
  background-image: linear-gradient(to right, transparent, #ffffff 26.4%);
}

.link {
  color: #409eff;
  cursor: pointer;
}
</style>
