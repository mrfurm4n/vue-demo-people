<template>
  <ul class="radio-list">
    <RadioItem
        v-for="item in items"
        v-bind:title="item.title"
        v-bind:isActive="item.type === activeRadioType"
        v-bind:key="item.title"
        @click="changeRadioType(item.type)"
    />
  </ul>
</template>

<script>
  import RadioItem from '@/components/atoms/RadioItem'
  export default {
    components: { RadioItem },
    data() {
      return {
        items: [
          { title: 'По алфавиту', type: 'alphabet' },
          { title: 'По дню рождения', type: 'birthday' },
        ]
      }
    },
    computed: {
      activeRadioType() {
        return this.$store.state.activeSortType;
      }
    },
    methods: {
      changeRadioType (radioType) {
        this.$store.commit('updateActiveSortType', radioType);
      }
    }
  }
</script>