const app = Vue.createApp({
    data() {
      return {
        counter: 0,
        name: '',
        lastName: '',
        confirmedName: ''
      };
    },
    watch: {
        counter(value) {
            if (value > 50) {
                this.counter = 0;   //reset counter to 0 once it hits 50
            }
        },
    },
    computed: {                       //used only for outputs, more raccomended
        fullname() {
            if (this.name === '') {
                return '';
            }
            return this.name + ' ' + this.lastName;
        },
    },
    methods: {
        confirmInput() {
            this.confirmedName = this.name;
        },
        submitForm(event) {
           // event.preventDefault();   //prevent page from reloading before form is submited. add in html prevent, it does same function
            alert('submitted!');
        },
        setName(event) {
            this.name = event.target.value;   //to read what user entered
        },
        add(num) {
            //this.counter++;
            this.counter = this.counter + num;
        },
        reduce(num) {
            //this.counter--;
            this.counter = this.counter - num;
        },
        resetInput() {
            this.name = '';
        },
    }
  });
  
  app.mount('#events');
  

 //modifiers!!!
  //<button v-on:click.right="reduce(5)">Remove</button>  only react to a right click on mouse,left is a default. then u can add middle
  //v-on:keyup="confirmInput" once user hit any key on keyboard then name will be displayed/confirmed
  //v-on:keyup.enter="confirmInput">  once he press ENTER key name will be dispplayed
  //v-model is a shortcut for this v-bind:value="name" v-on:input="setName" v-on:keyup.enter="confirmInput"
  //v-on:click = @click
  //v-bind:value = :value
