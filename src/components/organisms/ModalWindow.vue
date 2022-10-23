<template>
  <teleport to='#modals'>
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

<script>
import CloseIcon from '@/components/icons/CloseIcon'
import RadioList from "@/components/molecules/RadioList";
  export default {
    components: {RadioList, CloseIcon },
    computed: {
      showModal() {
        return this.$store.state.showModal
      }
    },
    methods: {
      closeModal() {
        this.$store.commit('updateShowModal', false)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(5, 5, 16, 0.16);
    cursor: pointer;
  }
  .modal {
    position: relative;
    z-index: 2;
    width: 372px;
    max-width: 100%;
    background: #FFFFFF;
    border-radius: 20px;
    padding: 24px 18px 8px 18px;
    &__title {
      margin-bottom: 16px;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      color: #050510;
    }
    &__close {
      position: absolute;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      top: 24px;
      right: 24px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: #F7F7F8;
    }
  }
</style>