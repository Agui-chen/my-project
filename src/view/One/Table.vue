<template>
  <div id="table">
    <el-row>
      <el-col :span="24">
        <div class="table-grid-content">
          <!-- <input
            :model="searchData"
            type="text"
            class="table-input"
            placeholder="姓名"
          />
          <el-button
            type="primary"
            @click="search()"
          >查询</el-button> -->
          <el-button
            type="primary"
            @click="addRow()"
          >新增</el-button>
        </div>
      </el-col>
    </el-row>

    <!-- 表格 -->
    <div class="Table-table">
      <el-table
        id="table"
        :data="tableform"
        ref="tableform"
        height="500"
        border
      >
        <el-table-column
          type="selection"
          width="55"
        >
        </el-table-column>
        <el-table-column
          type="index"
          width="50"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180"
          sortable
        >
        </el-table-column>
        <el-table-column
          prop="sex"
          label="性别"
          width="180"
          sortable
        >
        </el-table-column>
        <el-table-column
          prop="age"
          label="年龄"
          width="180"
          sortable
        >
        </el-table-column>
        <el-table-column
          prop="data"
          label="生日"
          width="180"
          sortable
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="240"
          sortable
        >
        </el-table-column>
        <el-table-column
          prop="opp"
          label="操作"
        >
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index,tableform )"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 编辑窗口 -->
    <el-dialog
      title="编辑"
      :visible.sync="editFormVisible"
    >
      <el-form
        :model="editForm"
        ref="editForm"
      >
        <el-form-item
          label="姓名"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="editForm.name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="性别"
          :label-width="formLabelWidth"
        >
          <template>
            <el-radio
              v-model="radio"
              label="1"
            >男</el-radio>
            <el-radio
              v-model="radio"
              label="2"
            >女</el-radio>
          </template>
        </el-form-item>
        <el-form-item
          label="年龄"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="editForm.age"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="生日"
          :label-width="formLabelWidth"
        >
          <el-date-picker
            v-model="editForm.data"
            type="date"
            placeholder="选择日期"
            format="MM 月 dd 日"
            value-format="MM-dd"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item
          label="地址"
          :label-width="formLabelWidth"
        >
          <el-input
            type="textarea"
            v-model="editForm.address"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div>
        <el-button @click="cancel()">取消</el-button>
        <el-button
          type="primary"
          v-on:click="sumbitEditRow()"
          :loading="addLoading"
        >确定</el-button>
      </div>

    </el-dialog>

    <!-- 新增窗口 -->
    <el-dialog
      title="新增"
      :visible.sync="addFormVisible"
    >
      <el-form
        :model="addForm"
        ref="addForm"
      >
        <el-form-item
          label="姓名"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="addForm.name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="性别"
          :label-width="formLabelWidth"
        >
          <template>
            <el-radio
              v-model="radio"
              label="1"
            >男</el-radio>
            <el-radio
              v-model="radio"
              label="2"
            >女</el-radio>
          </template>
        </el-form-item>
        <el-form-item
          label="年龄"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="addForm.age"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="生日"
          :label-width="formLabelWidth"
        >
          <el-date-picker
            v-model="addForm.data"
            type="date"
            placeholder="选择日期"
            format="MM 月 dd 日"
            value-format="MM-dd"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item
          label="地址"
          :label-width="formLabelWidth"
        >
          <el-input
            type="textarea"
            v-model="addForm.address"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div>
        <el-button @click="cancel()">取消</el-button>
        <el-button
          type="primary"
          @click="sumbitAddRow()"
          :loading="addLoading"
        >确定</el-button>
      </div>

    </el-dialog>

  </div>
</template>
<script>
import storage from '../../model/storage'
var _index; //定义一个全局变量，以获取行数据的行号
export default {
  data() {
    return {
      checked: true,
      tableform: [],
      formLabelWidth: '120px',
      editFormVisible: false,//是否显示编辑窗口
      editForm: [],
      addFormVisible: false,//是否显示新增窗口
      addLoading: false,
      addForm: [],
      radio: 1,
      //日期
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      //搜索
      searchData: '',
    }
  },
  methods: {
    //获取数据
    getData() {
      var url = 'static/table.json';
      this.$http.get(url).then((data) => {
        console.log(data)
        this.tableform = data.body;
      }).catch((err) => {
        console.log(err)
      })
    },

    //编辑数据
    handleEdit(index, row) {
      this.editFormVisible = true;
      this.editForm = Object.assign({}, row);
      _index = index;
      // console.log(index)
      // console.log(_index)
      //取到这一栏的值，也就是明白是在那一栏进行操作，从而将编辑后的数据存到表格中
    },
    //保存编辑
    sumbitEditRow() {
      var editData = _index;
      this.tableform[editData].name = this.editForm.name;
      this.tableform[editData].age = this.editForm.age;
      this.tableform[editData].radio = this.editForm.radio;
      this.tableform[editData].data = this.editForm.data;
      this.tableform[editData].address = this.editForm.address;
      this.editFormVisible = false;
    },

    //新增数据
    addRow() {
      this.addFormVisible = true;
      this.addForm = {
        name: '',
        age: '',
        radio: 1,
        data: '',
        address: ''
      }
    },
    //将新增的数据添加到表格中
    sumbitAddRow() {
      this.tableform = this.tableform || []
      this.tableform.push({
        name: this.addForm.name,
        age: this.addForm.age,
        radio: this.addForm.radio,
        data: this.addForm.data,
        address: this.addForm.address,
      })
      storage.set('url', this.url);
      this.addFormVisible = false
    },
    cancel() {
      this.addFormVisible = false;
      this.editFormVisible = false;
    },
    //删除数据
    handleDelete(index, row) {
      this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.tableform.splice(index, 1)
        storage.set('tableform', this.tableform)
        this.$message({
          type: 'success',
          message: '删除成功!',
        })
      }).catch((err) => {
        this.$message({
          type: 'error',
          message: err
        })
      })
    },
  },
  mounted() {
    this.getData();
  }
}
</script>
<style>
.table-grid-content {
  border-radius: 4px;
  height: 50 px;
  background: #ebeef5;
  padding: 10px;
}
.table-input {
  outline-style: none;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 200px;
  font-size: 14px;
  height: 30px;
}
.Table-table {
  padding: 5px;
}
.el-table td {
  padding: 0.01 0px;
}
.el-table th {
  padding: 0px;
}
</style>


