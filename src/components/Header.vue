<template>
  <div class="header">
      <h3>表单管理</h3>
      <el-divider></el-divider>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-input
            placeholder="请输入姓名"
            v-model="addUser.name"
            clearable>
          </el-input>
        </el-col>
        <el-col :span="6">
          <el-input
            placeholder="请输入号码"
            v-model="addUser.tel"
            clearable>
          </el-input>
        </el-col>
        <el-col :span="6">
          <el-input
            placeholder="请输入备注"
            v-model="addUser.tips"
            clearable>
          </el-input>
        </el-col>
        <el-col :span="6">
          <el-date-picker
            v-model="addUser.time"
            type="date"
            placeholder="请选择日期"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd">
          </el-date-picker>
        </el-col>
      </el-row>
      <el-button class="add" type="primary" @click="add">添加表单</el-button>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="tel"
          label="号码"
          width="180">
        </el-table-column>
        <el-table-column
          prop="tips"
          label="备注">
        </el-table-column>
        <el-table-column
          prop="time"
          label="时间">
        </el-table-column>
      </el-table>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Header',
  data(){
    return{
      addUser:{
        name:'',
        tel:'',
        tips:'',
        time:''
      },
      tableData: [{
            name: '王小虎',
            tel:'13696551234',
            tips: '这是一段备注文字',
            time:'2020-5-12'
          }]
    }
  },
  methods:{
    add(){
      this.tableData.push(this.addUser)
      this.addUser=''
    }
  }
}
</script>

<style scoped>
h3{margin: 20px;}
.add{margin: 20px 0px;width: 100%;}
</style>
