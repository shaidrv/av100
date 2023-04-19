<template>
  <div id="app">
    <div class="container">
      <div class="account">
        <div class="account__title title">Учётная запись</div>
        <div class="account__content">
          <div class="account__fields">
            <div class="row">
              <label>Компания</label>
              <div>
                <input type="text" name="company" class="input-field" />
              </div>
            </div>
            <div class="row">
              <label>Логин</label>
              <div>
                <input type="text" name="login" class="input-field" />
              </div>
            </div>
            <div class="row">
              <label
                >Номер <br />
                телефона</label
              >
              <div>
                <input type="text" name="phone-number" class="input-field" />
              </div>
            </div>
            <div class="row">
              <label>Имя</label>
              <div>
                <input type="text" name="name" class="input-field" />
              </div>
            </div>
            <div class="row">
              <label>Фамилия</label>
              <div>
                <input type="text" name="last-name" class="input-field" />
                <small>* Не обязательно</small>
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
                />
                <label class="label-radio">Выкл</label>
              </div>
            </div>
            <div class="notification-settings__field">
              <div class="notification-settings__radio">
                <input type="radio" name="notification" class="input-radio" />
                <label class="label-radio">Email</label>
              </div>
              <div class="notification-settings__input">
                <input type="text" class="input-field" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="bottom__heading"></div>
        <div class="bottom__body">
          <div class="bottom__button">
            <button>Сохранить</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  async mounted() {
    await this.$store.dispatch('login')
    await this.$store.dispatch('getUser')
  },
}
</script>

<style>
button {
  font-size: 13px;
}
</style>
