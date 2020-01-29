new Vue({
    el: "#app",
    data: {
        started: false,
        yourLife: 80,
        monsterLife: 50,
        hits:[]
    },
    methods: {

    },
    computed: {
        yLife() {
            return {
                width: this.yourLife + "%"
            }
        },
        mLife() {
            return {
                width: this.monsterLife + "%"
            }
        }
    },
    watch: {

    }
});