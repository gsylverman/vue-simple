new Vue({
    el: "#app",
    data: {
        started: false,
        yourLife: 100,
        monsterLife: 100,
        hits: [],
    },
    methods: {
        attack() {
            if (this.yourLife > 0 && this.monsterLife > 0) {
                function randomDamage() {
                    return Math.floor(Math.random() * 20);
                }
                const damage1 = randomDamage();
                const damage2 = randomDamage();
                this.hits.unshift({ "Monster hits player for": damage1 });
                this.hits.unshift({ "Player hits monster for": damage2 });
                console.log(this.hits);
                if (this.yourLife && this.monsterLife > 0) {
                    this.yourLife -= damage1;
                    this.monsterLife -= damage2;
                }
                if (this.yourLife <= 0 || this.monsterLife <= 0) {
                    alert("game over");
                    this.started = false;
                    this.hits = [];
                    this.yourLife = 100;
                    this.monsterLife = 100;
                }
            }
        },
        giveUp() {
            this.started = false;
            this.yourLife = 100;
            this.monsterLife = 100;
            this.hits = [];
        },
        heal() {

            this.yourLife += 10;
        }
    },
    computed: {
        gameOverr() {
            return this.yourLife === 0 || this.monsterLife === 0 ? true : false;
        },
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