<template>
  <div class="app-container">
    <div class="header-num">
      <span>总数量：{{ total }}</span>
      <span>在线数量：{{ onlineTotal }}</span>
      <span>离线数量：{{ offlineTotal }}</span>
    </div>
    <div class="filter-container">
      <div>
        <span class="show-font">在线状态：</span>
        <el-select
          v-model="listQuery.type"
          placeholder="请选择"
          clearable
          class="filter-item"
          style="width: 130px"
        >
          <el-option
            v-for="item in calendarTypeOptions"
            :key="item.key"
            :label="item.display_name + '(' + item.key + ')'"
            :value="item.key"
          />
        </el-select>
      </div>
      <div>
        <span class="show-font">房号：</span>
        <el-input
          v-model="listQuery.title"
          placeholder="请输入房号"
          style="width: 200px"
          class="filter-item"
          @keyup.enter.native="handleFilter"
        />
      </div>
      <div>
        <span class="show-font">房间名称：</span>
        <el-input
          v-model="listQuery.title"
          placeholder="请输入房间名称"
          style="width: 200px"
          class="filter-item"
          @keyup.enter.native="handleFilter"
        />
      </div>
      <div>
        <el-button
          v-waves
          class="filter-item"
          type="primary"
          icon="el-icon-search"
          @click="handleFilter"
        >
          查询
        </el-button>
        <el-button
          class="filter-item"
          style="margin-left: 10px"
          type="primary"
          icon="el-icon-refresh"
        >
          重置
        </el-button>
      </div>
    </div>

    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%"
      @sort-change="sortChange"
    >
      <el-table-column
        label="设备编号"
        prop="id"
        align="center"
        width="80"
        :class-name="getSortClass('id')"
      >
        <template slot-scope="{ row }">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column label="房号" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.roomID }}</span>
        </template>
      </el-table-column>

      <el-table-column label="房间名称" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.roomName }}</span>
        </template>
      </el-table-column>

      <el-table-column label="在线状态" class-name="status-col">
        <template slot-scope="{ row }">
          <div>
            <div v-if="row.status === 'online'">
              <span style="color: green">●</span>
              在线
            </div>
            <div v-else-if="row.status === 'offline'">
              <span style="color: red">●</span>
              离线
            </div>
          </div>
        </template>
      </el-table-column>

      <el-table-column label="状态持续时间" align="center">
        <template slot-scope="{ row }">
          <span>{{
            row.keepTime.replace("d", "天").replace("h", "小时")
          }}</span>
        </template>
      </el-table-column>

      <el-table-column label="空调状态" class-name="status-col">
        <template slot-scope="{ row }">
          <div>
            <div v-if="row.acstatus === 'run'">
              <span style="color: green">●</span>
              运行中
            </div>
            <div v-else-if="row.acstatus === 'offline'">
              <span style="color: red">●</span>
              关闭
            </div>
            <div v-else>--</div>
          </div>
        </template>
      </el-table-column>

      <el-table-column label="空调模式" align="center">
        <template slot-scope="{ row }">
          <span v-if="row.type">{{ row.type }}</span>
          <span v-else>--</span>
        </template>
      </el-table-column>

      <el-table-column label="当前室温" align="center">
        <template slot-scope="{ row }">
          <span v-if="row.curTem">{{ row.curTem }}℃</span>
          <span v-else>--</span>
        </template>
      </el-table-column>

      <el-table-column label="空调设置温度" align="center">
        <template slot-scope="{ row }">
          <span v-if="row.setTem">{{ row.setTem }}℃</span>
          <span v-else>--</span>
        </template>
      </el-table-column>
    </el-table>
    <pagination
      class="pag"
      v-show="total > 0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getList"
    />
  </div>
</template>

<script>
import { fetchList, fetchNum } from "@/api/article";
import waves from "@/directive/waves"; // waves directive
import Pagination from "@/components/Pagination"; // secondary package based on el-pagination

const calendarTypeOptions = [
  { key: "CN", display_name: "China" },
  { key: "US", display_name: "USA" },
  { key: "JP", display_name: "Japan" },
  { key: "EU", display_name: "Eurozone" },
];

// arr to obj, such as { CN : "China", US : "USA" }
const calendarTypeKeyValue = calendarTypeOptions.reduce((acc, cur) => {
  acc[cur.key] = cur.display_name;
  return acc;
}, {});

export default {
  name: "ComplexTable",
  components: { Pagination },
  directives: { waves },
  filters: {
    typeFilter(type) {
      return calendarTypeKeyValue[type];
    },
  },
  data() {
    return {
      tableKey: 0,
      list: null,
      total: 0,
      onlineTotal: 0,
      offlineTotal: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 9,
        title: undefined,
        type: undefined,
      },
      calendarTypeOptions,
    };
  },
  created() {
    this.getList();
    this.getNum();
  },
  methods: {
    getNum() {
      this.listLoading = true;
      fetchNum().then((response) => {
        this.total = response.data.total;
        this.onlineTotal = response.data.onlineTotal;
        this.offlineTotal = this.total - this.onlineTotal;
      });
    },
    getList() {
      this.listLoading = true;
      fetchList(this.listQuery).then((response) => {
        this.list = response.data.list;
        this.listLoading = false;
      });
    },
    handleFilter() {
      this.listQuery.page = 1;
      this.getList();
    },
    sortChange(data) {
      const { prop, order } = data;
      if (prop === "id") {
        this.sortByID(order);
      }
    },
    sortByID(order) {
      if (order === "ascending") {
        this.listQuery.sort = "+id";
      } else {
        this.listQuery.sort = "-id";
      }
      this.handleFilter();
    },

    getSortClass: function (key) {
      const sort = this.listQuery.sort;
      return sort === `+${key}` ? "ascending" : "descending";
    },
  },
};
</script>

<style lang="scss" scoped>
.pag {
  float: right;
}
.header-num {
  color: green;
  margin-bottom: 30px;
  margin-top: 10px;
  font-size: 15px;
  span {
    margin-right: 30px;
  }
}
.filter-container {
  display: flex;
  div:nth-of-type(n) {
    flex: 2;
    padding-left: 10px;
  }
  div:nth-of-type(4) {
    flex: 1;
    button:nth-of-type(n) {
      float: left;
    }
    button:nth-of-type(2n) {
      float: right;
    }
  }
}
</style>
