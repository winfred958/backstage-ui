import instance from '@/api/base'

export default {
  getItemList: function () {
    return instance.get('item-service/info/mock-list/10')
  }
}
