import api from "../../../src/api/base"

it('api test', () => {
  let promise = api.get("test", "test");
  console.log(promise)
})
