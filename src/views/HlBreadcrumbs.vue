<template>
  <div class="HlBreadCrumbs">
    <h1 class="hl-textC">面包屑导航栏</h1>
    <Hl-Bread-Crumbs :leftTitle="leftTitle2" :isClose=isClose2 :separator="separator2"></Hl-Bread-Crumbs>
    <Hl-Bread-Crumbs :leftTitle="leftTitle" :isClose=isClose :separator="separator"  @close="close"></Hl-Bread-Crumbs>
  </div>
</template>
<script>
export default {
  data(){
    return{
      leftTitle:['位置管理','位置记录','位置'],//标题
      separator:'/', //分隔符
      isClose: true, //是否打开关闭按钮
      leftTitle2:['预警管理','预警信息'],//标题
      separator2:'/', //分隔符
      isClose2: false, //是否打开关闭按钮
    }
  },
  methods:{
    close(){
      alert("点击了关闭调用的操作")
    }
  }
}
</script>
<style>
@import url('../assets/less/hl-common.less');
</style>