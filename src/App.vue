<template>
  <div id="app">
    <div class="container">
      <div class="account">
        <div class="account__title">Учётная запись</div>
        <div class="account__fields">
          <div class="row">
            <label>Компания</label>
            <div>
              <input type="text" name="company" />
            </div>
          </div>
          <div class="row">
            <label>Логин</label>
            <div>
              <input type="text" name="login" />
            </div>
          </div>
          <div class="row">
            <label
              >Номер <br />
              телефона</label
            >
            <div>
              <input type="text" name="phone-number" />
            </div>
          </div>
          <div class="row">
            <label>Имя</label>
            <div>
              <input type="text" name="name" />
            </div>
          </div>
          <div class="row">
            <label>Фамилия</label>
            <div>
              <input type="text" name="last-name" />
              <small>* Не обязательно</small>
            </div>
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

<style></style>
