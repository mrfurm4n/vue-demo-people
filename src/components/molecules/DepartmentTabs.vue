<template>
  <div class="department-tabs">
    <DepartmentTab
        v-for="key in Object.keys(departmentsNames)"
        v-bind:title="departmentsNames[key]"
        v-bind:isActive="key === activeTabKey"
        v-bind:tabKey="key"
        v-bind:key="key"
    />
  </div>
</template>

<script>
  import DepartmentTab from "@/components/atoms/DepartmentTab";

  export default {
    props: ['departmentsNames', 'activeTabKey'],
    components: {
      DepartmentTab
    },
  }
</script>

<style lang="scss" scoped>
  .department-tabs {
    display: flex;
    overflow-x: scroll;
    width: 100%;
  }
</style>