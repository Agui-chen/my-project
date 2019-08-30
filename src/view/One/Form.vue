<template>
  <div id="form">
    <el-row>
      <el-col :span="24">
        <div class="grid-content">
          <input
            type="text"
            class="form-input"
            v-model="msg"
            @keydown="addList($event)"
          />
          <el-button @click="addToList()">+增加</el-button>
        </div>
      </el-col>
    </el-row>
    <h2>进行中</h2>
    <template v-for="(item,index) in list">
      <ul :key="index">
        <li v-if="!item.checked">
          <input
            type="checkbox"
            v-model="item.checked"
            @change="saveChange()"
          />
          {{item.title}}---------
          <el-button @click="deleteList(index)">-删除</el-button>
        </li>
      </ul>
    </template>

    <h2>完成时</h2>
    <template v-for="(item,index) in list">
      <ul :key="item.title">
        <!-- 两个key的值不能相同，但是这是两个不同的template模块，纳闷 -->
        <li v-if="item.checked">
          <input
            type="checkbox"
            v-model="item.checked"
            @change="saveChange()"
          />
          {{item.title}}---------
          <el-button @click="deleteList(index)">-删除</el-button>
        </li>
      </ul>
    </template>
  </div>
</template>
<script>
import storage from '../../model/storage'
export default {
  data() {
    return {
      msg: '',
      list: []
    }
  },
  methods: {
    addList(e) {
      console.log(e.keyCode)
      if (e.keyCode == 13) {
        this.list.push({
          title: this.msg,
          checked: false,
        })
        this.msg = ''
      }

      storage.set('list', this.list)
    },
    addToList() {
      this.list.push({
        title: this.msg,
        checked: false
      })
      this.msg = ''
      storage.set('list', this.list)
    },
    deleteList(num) {
      // alert(num)
      this.list.splice(num, 1)
      storage.set('list', this.list)
    },
    saveChange() {
      storage.set('list', this.list)
    }
  },
  mounted() {
    var list = storage.get('list')
    if (list) {
      this.list = list
    }
  }
}
</script>
<style>
.grid-content {
  border-radius: 4px;
  height: 50 px;
  background: #ebeef5;
  padding: 10px;
}
.form-input {
  outline-style: none;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 200px;
  font-size: 18px;
  height: 30px;
}
ul {
  padding: 0 15px;
}
ul li {
  list-style: none;
}
</style>

