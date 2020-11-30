<template>
  <a-layout-header :style="{ padding: 0 }">
    <a-row type="flex">
      <a-col flex="100px">
        <router-link to="/">Home</router-link>
      </a-col>
      <a-col flex="auto">
      </a-col>
      <a-col flex="100px">
        <a-popover placement="bottomRight">
          <template #content>
            <p>Content</p>
            <p>Logout</p>
          </template>
          <template #title>
            <span>个人中心</span>
          </template>
          <a-avatar :size="50">
            <template #icon>
              <UserOutlined/>
            </template>
          </a-avatar>
        </a-popover>
      </a-col>
    </a-row>
  </a-layout-header>
</template>

<script>
  import { UserOutlined } from '@ant-design/icons-vue'

  export default {
    name: 'Header',
    components: {
      UserOutlined
    }
  }
</script>

<style scoped>

</style>
