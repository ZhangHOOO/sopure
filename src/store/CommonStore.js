import { observable, set } from 'mobx'

export default observable({
  language: 'EN',
  isLoading: false,
  isModelLoading: false,
  set(params = {}) {
    set(this, { ...params })
  },
})
