<script>
import axios from 'axios'
import { apiUrl } from '@/shared/config'
import { StarIcon, PhoneIcon, BackIcon } from '@/shared/icons'
import { getNormalizeAge, getNormalizeBirthday, getNormalizePhone } from '@/shared/helpers'
import { Defer } from '@/shared/mixins'

export default {
  name: 'DetailPage',
  components: { StarIcon, PhoneIcon, BackIcon },
  props: ['id'],
  data() {
    return {
      loading: false,
      user: null,
      error: null,
    }
  },
  mixins: [Defer()],
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
      return getNormalizeAge(birthday)
    },
    normalizePhone(phone) {
      return getNormalizePhone(phone)
    },
    normalizeBirthday(birthday) {
      return getNormalizeBirthday(birthday)
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
<template>
  <div v-if="loading" class="loading">
    <p class="loading__title">Загрузка...</p>
  </div>
  <div v-else class="detail">
    <div v-if="defer(1)" class="detail-head">
      <router-link :to="{ name: 'home-page' }" class="detail-head-link">
        <BackIcon class="header-head-link__icon" />
      </router-link>
      <img :src="user.avatarUrl" alt="" class="detail-head__photo" />
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
          <a :href="`tel:${user.phone}`" class="detail-body-list-item__title">
            {{ normalizePhone(user.phone) }}
          </a>
        </li>
      </ui>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import './index.module.scss';
</style>