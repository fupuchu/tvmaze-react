let listResults = new Vue({
    el: '#v-for-object',
    data: {
      tvshows: results
    }
})


let searchBar = new Vue ({
    el: '#search',
    data: {
        params1 : "This is params 1"
    },
    computed : {
        paramsCaps: function () {
            return this.params1.split('').reverse().join('')
        }
    }
})

// var app6 = new Vue({
//     el: '#app-6',
//     data: {
//         message: ''
//     }
// })

Vue.component('click-me' , {
    data : function () {
        return{
            count: 0
        }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

new Vue({ el: '#v-for-object' })