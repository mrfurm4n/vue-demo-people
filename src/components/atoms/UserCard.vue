<template>
  <router-link class="card" :to="{ name: 'detail', params: { id: user.id, user: user } }">
    <img :src="user.avatarUrl" :alt="user.name" class="card__photo">
    <div calss="card-info">
      <p class="card-info__name">{{ user.firstName }} {{ user.lastName }}</p>
      <p class="card-info__tag">{{ user.userTag }}</p>
      <p class="card-info__department">{{ department }}</p>
    </div>
    <p v-if="isBirthdayActive" class="card__birthday">{{ birthday }}</p>
  </router-link>
</template>

<script>
import {departmentsNames} from "@/config/deparments-names";
import { getNormalizeBirthday } from "@/helpers";

export default {
  props: ['user', 'isBirthdayActive'],
  computed: {
    department () {
      const departmentKey = this.user.department
      return departmentsNames[departmentKey]
    },
    birthday () {
      return getNormalizeBirthday(this.user.birthday);
    }
  }
}
</script>

<style lang="scss" scoped>
  .card {
    display: flex;
    align-items: center;
    padding: 6px 0;
    position: relative;
    &__photo {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      background: linear-gradient(90deg, #F3F3F6 0%, #FAFAFA 100%);
      margin-right: 16px;
    }
    &__birthday {
      position: absolute;
      right: 0;
      font-weight: 400;
      font-size: 15px;
      line-height: 20px;
      text-align: right;
      color: #55555C;
    }
    &-info {
      &__name {
        display: inline-block;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #050510;
        margin-right: 4px;
      }
      &__tag {
        display: inline-block;
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        color: #97979B;
      }
      &__department {
        margin-top: 3px;
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
        color: #55555C;
      }
    }
  }
</style>