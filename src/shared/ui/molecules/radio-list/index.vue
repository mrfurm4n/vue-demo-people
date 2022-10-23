<script>
import { RadioItem } from '@/shared/ui/atoms'

export default {
  name: 'RadioList',
  components: { RadioItem },
  data() {
    return {
      items: [
        { title: 'По алфавиту', type: 'alphabet' },
        { title: 'По дню рождения', type: 'birthday' },
      ],
    }
  },
  computed: {
    activeRadioType() {
      return this.$store.state.activeSortType
    },
  },
  methods: {
    changeRadioType(radioType) {
      this.$store.commit('updateShowModal', false)
      this.$store.commit('updateActiveSortType', radioType)
    },
  },
}
</script>
<template>
  <ul class="radio-list">
    <RadioItem
      v-for="item in items"
      :key="item.title"
      :title="item.title"
      :is-active="item.type === activeRadioType"
      @click="changeRadioType(item.type)"
    />
  </ul>
</template>
<style lang="scss" scoped>
@import './index.module.scss';
</style>