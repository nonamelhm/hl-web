<template>
 <div class="hl-breadcrumbs">
   <div class="hl-left">
    <div v-for="(item,index) in leftTitle" :key="index">
      <span :class="{'hl-blod':index===leftTitle.length-1}">{{item}}</span>
      <span v-if="index !== leftTitle.length - 1">{{separator}}</span>
    </div>
   </div>
   <div class="hl-right" v-if="isClose" @click="$emit('close')">
     <img src="@/assets/images/hl-icon-close.png" alt="" >
   </div>
 </div>
</template>

<script>
export default {
  name:'HlBreadCrumbs',
  props:{
    leftTitle:{
      type:Array,
      default:function(){
        return []
      }
    },
    separator:{
      type: String,
      default:'/'
    },
    isClose:{
      type:Boolean,
      default: false
    }
  }
}
</script>

<style lang="less" scoped>
@import  '../../../src/assets/less/hl-components.less';
@import  '../../../src/assets/less/hl-common.less';
</style>