<template>
  <a-layout-sider
    breakpoint="lg"
    collapsed-width="0"
    @collapse="onCollapse"
    @breakpoint="onBreakpoint"
  >
    <div id="sider-menu">
      <div class="logo"/>
      <a-menu
        mode="inline"
        :openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        style="width: 200px"
        theme="dark"
        @openChange="onOpenChange"
        v-on:click="showClickKey"
      >
        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <MailOutlined/>
              <span>Navigation One</span>
            </span>
          </template>
          <a-menu-item key="1">
            <router-link to="/about">about</router-link>
          </a-menu-item>
          <a-menu-item key="2">
            <router-link to="/itemList">itemList</router-link>
          </a-menu-item>
          <a-menu-item key="3">Option 3</a-menu-item>
          <a-menu-item key="4">Option 4</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
            <span>
              <AppstoreOutlined/>
              <span>Navigation Two</span>
            </span>
          </template>
          <a-menu-item key="5">Option 5</a-menu-item>
          <a-menu-item key="6">Option 6</a-menu-item>
          <a-sub-menu key="sub3" title="Submenu">
            <a-menu-item key="7">
              Option 7
            </a-menu-item>
            <a-menu-item key="8">
              Option 8
            </a-menu-item>
          </a-sub-menu>
        </a-sub-menu>
        <a-sub-menu key="sub4" @titleClick="titleClick">
          <template #title>
            <span>
              <SettingOutlined/>
              <span>Navigation Three</span>
            </span>
          </template>
          <a-menu-item key="9">Option 9</a-menu-item>
          <a-menu-item key="10">Option 10</a-menu-item>
          <a-menu-item key="11">Option 11</a-menu-item>
          <a-menu-item key="12">Option 12</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </div>
  </a-layout-sider>
</template>
<script>
  import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons-vue'

  export default {
    components: {
      MailOutlined,
      AppstoreOutlined,
      SettingOutlined
    },
    data () {
      return {
        rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
        openKeys: ['sub2'],
        selectedKeys: []
      }
    },
    methods: {
      onOpenChange (openKeys) {
        const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1)
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
          this.openKeys = openKeys
          console.log(this.openKeys)
        } else {
          this.openKeys = latestOpenKey ? [latestOpenKey] : []
          console.log(this.openKeys)
        }
      },
      titleClick: function (e) {
        console.log('titleClick', e)
      },
      showClickKey: function (e) {
        console.log('selectKey: ', e)
      }
    }
  }
</script>
<style>
  #sider-menu .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
</style>
