<template>
  <div v-if="loading" class="loading">
    <p class="loading__title">Загрузка...</p>
  </div>
  <div v-else class="detail">
    <div v-if="defer(1)" class="detail-head">
      <router-link :to="{name: 'home'}" class="detail-head-link">
        <BackIcon class="header-head-link__icon" />
      </router-link>
      <img :src="user.avatarUrl" alt="" class="detail-head__photo">
      <div class="detail-head-row">
        <p class="detail-head-row__name">{{ user.firstName }} {{ user.lastName }}</p>
        <p class="detail-head-row__tag">{{ user.userTag }}</p>
      </div>
      <p class="detail-head__status">{{ user.department }}</p>
    </div>
    <div v-if="defer(2)" class="detail-body">
      <p class="detail-body__age">{{ getAge(user.birthday) }}</p>
      <ui class="detail-body-list">
        <li class="detail-body-list-item">
          <StarIcon class="detail-body-list-item__icon" />
          <p class="detail-body-list-item__title">{{ normalizeBirthday(user.birthday) }}</p>
        </li>
        <li class="detail-body-list-item">
          <PhoneIcon class="detail-body-list-item__icon" />
          <a :href="`tel:${user.phone}`" class="detail-body-list-item__title">{{ normalizePhone(user.phone) }}</a>
        </li>
      </ui>
    </div>
  </div>
</template>

<script>
import { apiUrl } from "@/config";
import axios from 'axios';
import { getNormalizeAge, getNormalizeBirthday, getNormalizePhone } from "@/helpers";
import StarIcon from '@/components/icons/StarIcon'
import PhoneIcon from '@/components/icons/PhoneIcon'
import BackIcon from '@/components/icons/BackIcon'
import Defer from '@/mixins/Defer';

export default {
  props: ['id'],
  components: { StarIcon, PhoneIcon, BackIcon },
  data() {
    return {
      loading: false,
      user: null,
      error: null,
    }
  },
  mixins: [
    Defer()
  ],
  created() {
    this.$watch(
        () => this.id,
        () => {
          this.fetchUser()
        },
        { immediate: true }
    )
  },
  methods: {
    getAge(birthday) {
      return getNormalizeAge(birthday);
    },
    normalizePhone(phone) {
      return getNormalizePhone(phone);
    },
    normalizeBirthday(birthday) {
      return getNormalizeBirthday(birthday);
    },
    fetchUser() {
      this.error = this.user = null
      this.loading = true

      axios
        .get(`${apiUrl}?id=${this.id}`)
        .then((response) => {
          this.loading = false
          this.user = response.data.items[0]
          console.log(response)
        })
        .catch((error) => {
          this.loading = false
          this.error = error.toString()
        })
    },
  },
}
</script>

<style lang="scss" scoped>
  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    &__title {
      font-weight: 600;
      font-size: 17px;
      line-height: 22px;
      text-align: center;
      color: #050510;
    }
  }
  .detail {
    display: flex;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    &-head {
      position: relative;
      padding-top: 72px;
      padding-bottom: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: #F7F7F8;
      &-link {
        position: absolute;
        display: inline-block;
        top: 22px;
        left: 24px;
        &__icon {
          width: 24px;
          height: 24px;
        }
      }
      &__photo {
        width: 104px;
        height: 104px;
        margin-bottom: 24px;
        object-fit: cover;
        filter: drop-shadow(0px 1px 5px rgba(22, 30, 52, 0.039)) drop-shadow(0px 8px 12px rgba(22, 30, 52, 0.08));
        border-radius: 50%;
      }
      &-row {
        &__name {
          display: inline-block;
          margin-right: 4px;
          font-weight: 700;
          font-size: 24px;
          line-height: 28px;
          color: #050510;
        }
        &__tag {
          display: inline-block;
          font-weight: 400;
          font-size: 17px;
          line-height: 22px;
          color: #97979B;
        }
      }
      &__status {
        margin-top: 12px;
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
        color: #55555C;
      }
    }
    &-body {
      position: relative;
      padding: 8px 16px;
      &__age {
        position: absolute;
        top: 26px;
        right: 20px;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        text-align: right;
        color: #97979B;
      }
      &-list {
        list-style: none;
        &-item {
          padding: 18px 0;
          display: flex;
          align-items: center;
          &__icon {
            width: 24px;
            height: 24px;
            margin-right: 12px;
          }
          &__title {
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
            color: #050510;
          }
        }
      }
    }
  }
</style>