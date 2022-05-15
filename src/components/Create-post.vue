<template>
   <div class="row">
    <div class="col s6 offset-s3">
      <h1>Новый пост</h1>

      <form @submit.prevent="submitHandler">
        <div class="input-field">
          <input id="title" v-model="task.title" type="text" class="validate" required>
          <label for="title">Название поста</label>
          <span class="helper-text" data-error="Укажите название"></span>
        </div>

        <div class="input-field">
          <textarea v-model="task.description" id="description" class="materialize-textarea"></textarea>
          <label for="description">Текст поста</label>
          <span class="character-counter" style="float: right; font-size: 12px;">{{task.description.length}}/1000</span>
        </div>


        <button class="btn" type="submit">Добавить пост</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Create_post',
     data: () => ({
       task: {
         description: '',
          title: '',
          id: Date.now(),
          comments: []
       }
    
  }),
  
  methods: {
    submitHandler() {
    

      this.$store.dispatch('createTask', { ...this.task })
      this.$router.push('/list')
    }
  },
}
</script>

<style>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
}
.row{
    margin: 100px 0 0 0;
}

</style>