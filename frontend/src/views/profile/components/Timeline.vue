<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item
        v-for="(item, index) of timeline"
        :key="index"
        :timestamp="item.timestamp"
        placement="top"
      >
        <el-card>
          <h4>{{ item.title }}</h4>
          <p>{{ item.content }}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeline: [
        {
          timestamp: "2023/8/21",
          title: "Create frontend template",
          content: "Zhongjie Pan committed 2023/8/21 10:05",
        },
        {
          timestamp: "2023/8/22",
          title: "Update frontend template",
          content: "Zhongjie Pan committed 2023/8/22 9:34",
        },
        {
          timestamp: "2023/8/23",
          title: "Create backend Apis",
          content: "Zhongjie Pan committed 2023/8/23 13:40",
        },
        {
          timestamp: "2023/8/24",
          title: "Update backend template",
          content: "Zhongjie Pan committed 2023/8/24 15:27",
        },
        {
          timestamp: "2023/8/25",
          title: "Connection between frontend and backend",
          content: "Zhongjie Pan committed 2023/8/25 10:36",
        },
        {
          timestamp: "2023/8/27",
          title: "Complete compile",
          content: "Zhongjie Pan committed 2023/8/27 18:00",
        },
      ],
    };
  },
};
</script>
