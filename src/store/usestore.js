import { MobXProviderContext } from 'mobx-react'
import React from 'react'

export const useStores = () => {
  return React.useContext(MobXProviderContext)
}
