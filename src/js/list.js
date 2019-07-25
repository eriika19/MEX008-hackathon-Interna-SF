let listUser = localStorage.getItem("list");
let addBtn;
let balanceResult = 0;

const printBalance = (arr) => {
  for (i = 0; i < arr.length; i++) {
    balanceResult = -arr[i];
  }
  console.log(balanceResult);
  document.getElementById('balance-result').innerHTML = `<strong>Balance:</strong> $'${balanceResult}'`;
};

const balance = (listUser) => {
  let valueArr = [];
  for (let i=0; i < listUser.length; i++) {
    
  let element = listUser[i];
  let values = element.split(" ");
  for(let counter=0; counter < values.length; counter++) {
    let item = values[counter];
      if(!(58>item.charCodeAt(0) && item.charCodeAt(0)>47)) {continue;}
  let value = '';
  for (let index=0; index < item.length; index++) {
    if(item.charCodeAt(index) == 46) {value += item[index];
      console.log(value);}
    if (58>item.charCodeAt(index) && item.charCodeAt(index)>47) {
    value += item[index];
  }}
  let num = parseFloat(value);
  valueArr.push(num);
  }}
  console.log(valueArr);
  printBalance (valueArr);
  };

/* text input for adding item to checklist */





Vue.component('list-input', {
  data: function () {
    return {
      userInput: ""
    }
  },
  template: `
      <div id="add-input" class="item">
      <div id="select-transaction">
        <label for="transaction-type"> Agregar:</label>
        <select name="transaction-type" id="transaction-type">
        <option value="gasto">Gasto</option>
        <option value="ingreso">Ingreso</option>
    </select>
    </div>
    <div>
    <label for="reason"> Razón:</label>
    <input id="reason" type="text"  @keydown.enter="addTodoItem"></input>
    </div>
    <div>
    <label for="amount"> Cantidad:</label>
        <input id="amount" type="text" v-model="userInput" @keydown.enter="addTodoItem"></input>
        </div>
        <div id="add-btn" class="plus-circle-svg svg-wrapper" @click="addTodoItem">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
        </div>
      </div>
    `,
  methods: {
    addTodoItem: function () {
      if (this.userInput !== "") {
        reason = document.getElementById('reason')
        localStorage.setItem("list", this.todos);
        this.todos.push(reason.value + ' $' + this.userInput);
        listUser = this.todos;
        this.userInput = "";
        reason.value = "";
        balance(this.todos);
        console.log(listUser);
      }
    },
  },
  props: {
    todos: Array
  }
});

/* shows length array*/
Vue.component('list-stats', {
  template: `
    <div id="list-stats" class="item">
    <p id="income">Ingresos: 0</p> <p id="expense">Gastos: {{ todos.length }}</p>
    </div>`,
  props: {
    todos: Array
  }
})

/* each item in checklist */
Vue.component('list-item', {
  data: function () {
    return {
      isChecked: false
    }
  },
  template: `
    <section class="item">
      <div id="checkbox" @click="isChecked = !isChecked">
        <div v-if="!isChecked" class="circle-svg svg-wrapper"> 
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
        </div>
        <div v-if="isChecked" class="check-circle-svg svg-wrapper">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        </div>   
      </div>
      <div id="item">
        <p>{{ todo }}</p>
      </div>
      <div class="trash-svg svg-wrapper" @click="removeItem(todo)">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
      </div>
    </section>`,
  methods: {
    removeItem: function (todo) {
      let trashedItemIndex = this.todos.indexOf(todo)
      this.todos.splice(trashedItemIndex, 1)
      console.log(this.todos);
    }
  },
  props: {
    todo: String,
    todos: Array
  }
})

/* list components */

Vue.component('list', {
  data: function () {
    return {
      todos: ['Comida -$80', 'Transporte -$20', 'Educación -$150']
    }
  },

  template: `
      <div id="list-items-wrapper">
        <list-input :todos="todos"></list-input>
        <list-stats :todos="todos"></list-stats>
        <list-item
          v-for="todo in todos"
          :key="todo"
          :todo="todo"
          :todos="todos"
        >
        </list-item>
        <balance></balance>
      </div>`
})

/* shows balance */
Vue.component('balance', {

  methods: {
    balance: function (listUser) {
      let valueArr = [];
      for (let i = 0; i < listUser.length; i++) {
        let element = listUser[i];
        let values = element.split(" ");
        for (let counter = 0; counter < values.length; counter++) {
          let item = values[counter];
          if (!(58 > item.charCodeAt(0) && item.charCodeAt(0) > 47)) {
            continue;
          }
          let value = '';
          for (let index = 0; index < item.length; index++) {
            if (item.charCodeAt(index) == 46) {
              value += item[index]
            }
            if (58 > item.charCodeAt(index) && item.charCodeAt(index) > 47) {
              value += item[index];
            }
          }
          let num = parseFloat(value);
          valueArr.push(num);
        }
      }
      console.log(valueArr);
      return valueArr;
    }
  },

  template: `
    <div class="item">
    <p id="balance-result"><strong>Balance:</strong> $200</p>
    </div>`,
  props: {
    todos: Array
  }
})

let vm = new Vue({
  el: '#list'
})