<template>
  <div class="container">
    <div class="d-flex flex-row justify-content-center">
      <div class="col-md-8">
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item" v-for="(todo, index) in todos" :key="index">
              <a href="#" @click="remove(todo, index)">
                {{ todo.todo }}
              </a>
            </li>
          </ul>

          <form @submit.prevent="sub()">
            <div class="form-group mt-5">
              <input
                type="text"
                placeholder="new todo"
                class="form-control"
                v-model="todo"
              />

              <button type="submit" class="btn btn-primary-outline mt-3">Add Todo</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as Firebase from "firebase/app";
import "firebase/firestore";

export default {
  data() {
    return {
      todo: "",
    };
  },

  mounted() {
    this.$fire.firestore
      .collection("todos")
      .get()
      .then((res) => {
        res.forEach((doc) => {
          this.$store.commit("setTodo", doc.data());
          console.log(doc.data());
        });
      });
  },
  // not sure why I have to name it as `todos()`. not sure where this is pointing to
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },

  methods: {
    sub() {
      if (this.todo) {
        this.$fire.firestore
          .collection("todos")
          .add({})
          .then((res) => {
            this.$fire.firestore
              .collection("todos")
              .doc(res.id)
              .set({
                todo: this.todo,
                id: res.id,
              })
              .then(() => {
                this.$store.commit("setTodo", { todo: this.todo, id: res.id });
                this.todo = "";
              });
          });
      }
    },

    remove(todo, index) {
      this.$fire.firestore
        .collection("todos")
        .doc(todo.id)
        .delete()
        .then(() => {
          this.$store.commit("removeTodo", index);
        });
    },
  },
};
</script>
