import Iprojeto from '../interfaces/Iprojeto'
import { createStore, Store, useStore as vuexUseStore } from 'vuex'
import { InjectionKey } from 'vue'
interface Estado {
  projetos: Iprojeto[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
  state: {
    projetos: []
  },
  mutations: {
    ADICIONA_PROJETO(state, nomeDoProjeto: string) {
      const projeto = {
        id: new Date().toISOString(),
        nome: nomeDoProjeto
      } as Iprojeto
      state.projetos.push(projeto)
    }
  }
})

export function useStore(): Store<Estado> {
  return vuexUseStore(key)
}
