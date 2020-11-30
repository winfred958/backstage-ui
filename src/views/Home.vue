<template>
  <a-layout id="components-layout-demo-responsive">
    <SiderMenu></SiderMenu>
    <a-layout>
      <a-layout-header :style="{ padding: 0 }">
        <router-link to="/">Home</router-link>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          content
          <MyContent></MyContent>
        </div>

      </a-layout-content>
      <a-layout-footer style="textAlign: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
  import SiderMenu from '@/components/layout/SiderMenu'
  import MyContent from '@/components/layout/Content'

  export default {
    data () {
      return {
        selectedKeys: ['4']
      }
    },
    components: {
      SiderMenu,
      MyContent
    },
    methods: {
      onCollapse (collapsed, type) {
        console.log(collapsed, type)
      },
      onBreakpoint (broken) {
        console.log(broken)
      }
    }
  }
</script>

<style>
  #components-layout-demo-responsive .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
</style>
