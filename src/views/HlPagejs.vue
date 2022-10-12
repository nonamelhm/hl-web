<template>
  <div class="HlPagejs">
    <h1>pagejs------涉及table表格中页码变化的操作</h1>
    <ul>
      <li>pageCurrent:当前页</li>
      <li>pageSizes:页面条数</li>
      <li>pageSize: 每页条数</li>
      <li>pageCount:列表总条数</li>
    </ul>
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