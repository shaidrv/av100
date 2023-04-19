<template>
  <div id="app">
    <div class="container">
      <div class="account">
        <div class="account__title title">Учётная запись</div>
        <div class="account__content">
          <div class="account__fields">
            <div class="row" v-for="field in profileFields" :key="field.name">
              <label>{{ field.label }}</label>
              <div>
                <input
                  type="text"
                  :name="field.name"
                  class="input-field"
                  v-model="user[field.name]"
                />
                <small v-if="field.required === false">* Не обязательно</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="notification-settings">
        <div class="notification-settings__title title">
          Оповещения о новых подборках
        </div>
        <div class="notification-settings__content">
          <p class="notification-settings__description">
            Выберите, куда будут приходить уведомления при появлении
            автомобилей, которые подходят под критерии вашей подборки.
          </p>
          <div class="notification-settings__fields">
            <div class="notification-settings__caption">Уведомления</div>
            <div class="notification-settings__field">
              <div class="notification-settings__radio">
                <input
                  type="radio"
                  checked
                  name="notification"
                  class="input-radio"
                  v-model="user.notifytype"
                  value="off"
                  id="is-notification-off"
                />
                <label for="is-notification-off" class="label-radio"
                  >Выкл</label
                >
              </div>
            </div>
            <div class="notification-settings__field">
              <div class="notification-settings__radio">
                <input
                  type="radio"
                  name="notification"
                  class="input-radio"
                  v-model="user.notifytype"
                  value="Email"
                  id="is-notification-email"
                />
                <label for="is-notification-email" class="label-radio"
                  >Email</label
                >
              </div>
              <div class="notification-settings__input">
                <input type="text" class="input-field" v-model="user.email" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="bottom__heading"></div>
        <div class="bottom__body">
          <div class="bottom__button">
            <button @click="updateProfile">Сохранить</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      profileFields: [
        { label: 'Компания', name: 'company', required: true },
        {
          label: 'Логин',
          name: 'login',
          required: true,
        },
        {
          label: 'Номер телефона',
          name: 'phone',
          required: true,
        },
        {
          label: 'Имя',
          name: 'firstName',
          required: true,
        },
        {
          label: 'Фамилия',
          name: 'lastName',
          required: false,
        },
      ],
    }
  },
  computed: {
    user() {
      return this.$store.getters.profile
    },
  },

  methods: {
    async updateProfile() {
      await this.$store.dispatch('updateUserData', this.user.email)
    },
  },

  async mounted() {
    await this.$store.dispatch('login')
    await this.$store.dispatch('getUser')
  },
}
</script>

<style></style>
