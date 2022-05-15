<template>
    <div class="row">
        <div v-if="task" class="col s6 offset-s3">
       <form @submit.prevent="submitHandler">
        <div class="input-field">
          <input id="title" v-model="task.title" type="text" class="validate" required>
          <label class="one_post" for="title">Название поста</label>
          <span class="helper-text" data-error="Укажите название"></span>
        </div>

        <div class="input-field">
          <textarea style="min-height: 150px" v-model="task.description" id="description" class="materialize-textarea"></textarea>
          <label class="one_post" for="description">Текст поста</label>
          <span class="character-counter" style="float: right; font-size: 12px;">{{task.description.length}}/1000</span>
        </div>


        <button style="margin-right: 1rem" class="btn" type="submit">Изменить пост</button>
        <button  class="btn red" type="button" @click="openComment">Добавить комментарий</button>

        <form @submit.prevent="addComment" v-if="commentForm" class="comments">
            <div class="input-field">
          <input id="name" v-model="comment.title" type="text" class="validate" required>
          <label class="one_post" for="name">Ваше имя</label>
          <span class="helper-text" data-error="Укажите имя"></span>
        </div>

        <div class="input-field ">
          <textarea id="text" v-model="comment.description" class="materialize-textarea"></textarea>
          <label class="one_post" for="text">Комментарий</label>
        </div>
        <button class="btn" type="submit">Отправить</button>
        </form>
        <h2 v-if="displayComment" class="head">Все комментарии</h2>
        <div v-if="displayComment" class="comments">
            <div v-for="comment of task.comments" :key="comment.id" class="top">
            <p>Имя: {{comment.title}}</p>
            <p>Комментарий:{{comment.description}}</p>
            <button class="btn btn-small custom" @click="deleteComment(comment.id)">delete</button>
            </div>
           
        </div>
      </form>
        </div>
        <p v-else>Задача не найдена</p>
        
    </div>
</template>

<script>

const initialComment = {
  title: '',
  description: ''
}

export default {
  
  data: () => ({
    task: {},
    comment: { ...initialComment },
    commentForm: false,
    displayComment: true,
  }),
  created(){
     this.task = { ...this.$store.getters.taskById(+this.$route.params.id)}
  },
  
  methods: {
    submitHandler() {
      this.$store.dispatch('updateTask', { ...this.task })
      this.$router.push('/list')
    },
    openComment(){
        this.commentForm = true
    },
    addComment(){
        this.comment.id = Date.now();
        this.task.comments.push({ ...this.comment });
        this.commentForm = false;
        this.displayComment = true;
        this.comment = { ...initialComment };
        this.$store.dispatch('updateTask', { ...this.task });
    },
    deleteComment(id)
    {
      this.task.comments = this.task.comments.filter((el) => el.id != id);
      this.$store.dispatch('updateTask', { ...this.task });
    }
  
  },
}
</script>

<style>
.one_post{
    margin-top: -10px;
}
.comments{
    margin: 50px 0 50px 0; 
    display: flex;
    flex-direction: column;
}
.top{
  margin-top: 30px;
  position: relative;
}
.custom{
  display: block;
  position: absolute;
  left: 330px;
  top: 5px;
}
.head{
  margin: 30px 0 -20px 0;
}


</style>