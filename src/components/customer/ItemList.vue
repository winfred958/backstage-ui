<template>

  <p>{{name}}</p>
  <ul>
    <transition-group name="list" tag="p">
      <li v-for="(item, index) of items" :key="item.item_sn">
        {{index}} - {{item.item_sn}}
      </li>
    </transition-group>
  </ul>
  <button @click="this.getItemList()">getItemList</button>
</template>

<script>
  import item from '../../api/item'

  export default {
    name: 'ItemList',
    data () {
      return {
        name: '列表测试',
        items: [
          {
            item_sn: ''
          }
        ]
      }
    },
    methods: {
      getItemList: function () {
        item.getItemList()
          .then(response => {
            console.log(response.data)
            this.$nextTick(() => {
              this.items = response.data
            })
          })
      }
    }
  }
</script>

<style scoped>

</style>
