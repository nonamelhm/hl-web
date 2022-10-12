export default {
  data(){
    return{
      pageCurrent: 1, // 当前页
      pageSizes: [20, 50], // 页面条数
      pageSize: 20, // 每页条数
      pageCount: 0, // 列表总条数
    }
  },
  methods:{
    pageCurrentChange (val) { // 分页
      this.pageCurrent = val 
      //在引入页面监听pageCurrent变化就重新请求表格
    },
    pageSizeChange (val) { // 每页条数
      this.pageSize = val
       //在引入页面监听pageCurrent变化就重新请求表格
    },
  }
}