<script>
import { CloseIcon } from '@/shared/icons'
import { RadioList } from '@/shared/ui/molecules'
export default {
  name: 'ModalWindow',
  components: { RadioList, CloseIcon },
  computed: {
    showModal() {
      return this.$store.state.showModal
    },
  },
  methods: {
    closeModal() {
      this.$store.commit('updateShowModal', false)
    },
  },
}
</script>
<template>
  <teleport to="#modals">
    <transition name="fade">
      <div v-show="showModal" class="container">
        <div class="overlay" @click="closeModal"></div>
        <div class="modal">
          <button class="modal__close" @click="closeModal">
            <CloseIcon />
          </button>
          <p class="modal__title">Сортировка</p>
          <RadioList />
        </div>
      </div>
    </transition>
  </teleport>
</template>
<style lang="scss" scoped>
@import './index.module.scss';
</style>