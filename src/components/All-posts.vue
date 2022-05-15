<template>
    <div>
        <h1>Мои посты</h1>
        <hr>
        <table v-if="$store.state.tasks.length" class="centered">
            <thead>
                <tr>
                    <th>Название</th>
                    <th>Описание</th>
                    <th>Комментарии</th>
                    <th>Перейти в пост</th>
                    <th>Удалить пост</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="task of $store.state.tasks" :key="task.id">
                    <td>{{task.title}}</td>
                     <td class="td">
                        <div class="text">{{task.description}}</div>
                    </td>
                    <td>Kомментариев: {{ task.comments.length }}</td>
                    <td>
                     <router-link tag="button" class="btn btn-small" :to="'/task/' + task.id">Открыть</router-link>
                    </td> 
                    <td> <i class="small material-icons" @click="$store.commit('deleteTask', task.id)">delete_forever</i></td>
                </tr>      
            </tbody>
        </table>
        <p v-else>Нет доступных постов</p>
    </div>
</template>

<script>
export default {
  
   computed: {
     tasks()  {
         return this.$store.getters.tasks
     }
   }
}
</script>

<style>
table {
    margin: 50px 300px 0 0;
}
td{
    padding: 20px 0 0 20px;
}
th,h1{
    font-size: 25px;
    font-weight: bold;
}
h1{
    margin-top: 70px;
}
.td {
    max-width: 300px;
}

.text {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.material-icons{
    position: absolute;
    cursor: pointer;
}


   
</style>