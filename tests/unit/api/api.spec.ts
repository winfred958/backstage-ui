import instance from '../../../src/api/base'

describe('ItemList.vue', () =>
  it('item mock', () => {
    instance.get('item-service/info/mock-list/10')
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error.config.baseURL)
        console.log(error)
      })
      .finally(() => {
        console.log('???')
      })
  })
)
