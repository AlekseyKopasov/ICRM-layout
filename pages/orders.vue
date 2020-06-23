<template>
  <main class="orders">
    <div class="contaiter">
      <h1 class="title title-large">Заказы</h1>
      <ul class="orders__status">
        <li class="orders__status-item">
          <p class="orders__status-text">Готово</p>
          <span class="orders__status-color orders__status-color--green"></span>
        </li>
        <li class="orders__status-item">
          <p class="orders__status-text">Срок сдачи прошел</p>
          <span class="orders__status-color orders__status-color--red"></span>
        </li>
        <li class="orders__status-item">
          <p class="orders__status-text">
            До даты сдачи осталось менее 14 дней
          </p>
          <span
            class="orders__status-color orders__status-color--yellow"
          ></span>
        </li>
        <li class="orders__status-item">
          <p class="orders__status-text">В работе</p>
          <span class="orders__status-color orders__status-color--blue"></span>
        </li>
      </ul>
      <div class="orders__filter">Filter</div>
      <table class="orders__table responsive-table highlight">
        <thead>
          <tr>
            <th>№</th>
            <th>Название</th>
            <th>Категория</th>
            <th>Дата сдачи</th>
            <th>Стоимость расходинков</th>
            <th>Цена</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Свадебное платье №3</td>
            <td>Ателье</td>
            <td>20.20.2020</td>
            <td>500 000 р</td>
            <td>9 999 999 р</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Свадебное платье №3</td>
            <td>Ателье</td>
            <td>20.20.2020</td>
            <td>500 000 р</td>
            <td>9 999 999 р</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Свадебное платье №3</td>
            <td>Ателье</td>
            <td>20.20.2020</td>
            <td>500 000 р</td>
            <td>9 999 999 р</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Свадебное платье №3</td>
            <td>Ателье</td>
            <td>20.20.2020</td>
            <td>500 000 р</td>
            <td>9 999 999 р</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Свадебное платье №99</td>
            <td>Себе</td>
            <td>20.20.2020</td>
            <td>500 000 р</td>
            <td>9 999 999 р</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Свадебное платье №007</td>
            <td>Курсы</td>
            <td>20.20.2020</td>
            <td>500 000 р</td>
            <td>9 999 999 р</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Свадебное платье №3</td>
            <td>Ателье</td>
            <td>20.20.2020</td>
            <td>500 000 р</td>
            <td>9 999 999 р</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Свадебное платье №3</td>
            <td>Ателье</td>
            <td>20.20.2020</td>
            <td>500 000 р</td>
            <td>9 999 999 р</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Orders',
  layout: 'main-layout',
}
</script>
