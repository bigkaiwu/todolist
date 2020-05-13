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
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%">
        <el-table-column
          label="序号"
          width="180">
          <template slot-scope="scope">{{ scope.$index +1}}</template>
        </el-table-column>
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
          label="备注"
          width="280">
        </el-table-column>
        <el-table-column
          prop="time"
          label="时间">
        </el-table-column>
        <el-table-column>
          <template slot="header" slot-scope="scope">
            <el-input
              v-model="search"
              size="mini"
              placeholder="输入姓名搜索"/>
          </template>
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" @click="edit(scope.row,scope.$index)" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" @click="del(scope.$index)" circle></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog
        title="编辑用户信息"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <div>
          <el-form ref="form" :model="editUser" label-width="40px">
            <el-form-item label="姓名">
              <el-input v-model="editUser.name"></el-input>
            </el-form-item>
            <el-form-item label="号码">
              <el-input v-model="editUser.tel"></el-input>
            </el-form-item>
            <el-form-item label="备注">
              <el-input v-model="editUser.tips"></el-input>
            </el-form-item>
            <el-form-item label="时间">
              <el-date-picker
                v-model="editUser.time"
                type="date"
                placeholder="请选择日期"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd">
              </el-date-picker>
            </el-form-item>
          </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="confirm">确 定</el-button>
        </span>
      </el-dialog>
  </div>
</template>

<script>
import Vue from 'vue'
import { MessageBox } from 'element-ui'
export default {
  name: 'Header',
  data(){
    return{
      addUser:{ //添加用户信息
        name:'',
        tel:'',
        tips:'',
        time:''
      },
      tableData: [{ 
        name: '王小虎',
        tel:'13696551234',
        tips: '这是一段备注文字1',
        time:'2020-05-12'
      },{ 
        name: '汪小帅',
        tel:'13523568547',
        tips: '这是一段备注文字2',
        time:'2020-05-13'
      }],
      dialogVisible: false, //编辑弹框显示
      editUser:{ //添加用户信息
        name:'',
        tel:'',
        tips:'',
        time:''
      },
      userIndex:0,
      search: ''
    }
  },
  methods:{
    add(){
      if(!this.addUser.name){
        this.$message({
          message: '请输入姓名',
          type: 'warning'
        });
        return;
      }
      if(!this.addUser.tel){
        this.$message({
          message: '请输入号码',
          type: 'warning'
        });
        return;
      }
      if(!/^1[3456789]\d{9}$/.test(this.addUser.tel)){
        this.$message({
          message: '请输入正确的号码',
          type: 'warning'
        });
        return;
      }
      if(!this.addUser.time){
        this.$message({
          message: '请选择日期',
          type: 'warning'
        });
        return;
      }
      this.tableData.push(this.addUser)
      this.addUser=''
    },
    del(idx){
      MessageBox.confirm('此操作将永久删除该表单, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.tableData.splice(idx,1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    handleClose() {
      this.dialogVisible = false
    },
    edit(item,idx){
      this.userIndex = idx
      this.editUser = {
        name:item.name,
        tel:item.tel,
        tips:item.tips,
        time:item.time
      }
      this.dialogVisible = true
    },
    confirm(){
      this.dialogVisible = false
      //this.tableData[this.userIndex] = this.editUser   由于 JavaScript 的限制，Vue 不能检测数组和对象的变化。深入响应式原理
      Vue.set(this.tableData,this.userIndex, this.editUser)
    }
  }
}
</script>

<style scoped>
h3{margin: 20px;}
.add{margin: 20px 0px;width: 100%;}
</style>
