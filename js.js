new Vue({
    el: "#app",
    data: {
        started: false,
        yourLife: 100,
        monsterLife: 100,
        hits: [],
        gameOver: false
    },
    methods: {
        attack() {
            function randomDamage() {
                return Math.floor(Math.random() * 50);
            }
            const damage1 = randomDamage();
            const damage2 = randomDamage();
            this.hits.unshift({ "Monster hits player for": damage1 });
            this.hits.unshift({ "Player hits monster for": damage2 });
            console.log(this.hits);
            let temp1 = 0;
            let temp2 = 0;
            if (this.yourLife && this.monsterLife > 0) {
                const cl1 = setInterval(() => {
                    this.yourLife -= 1;
                    temp1 += 1;
                    if (temp1 === damage1 || this.monsterLife === 0 || this.yourLife === 0) {
                        clearInterval(cl1);
                    }
                    if (this.yourLife === 0) {
                        this.gameOver = true;
                        this.started = false;
                        this.hits = [];
                    }

                }, 20);

                const cl2 = setInterval(() => {
                    this.monsterLife -= 1;
                    temp2 += 1;
                    if (temp2 === damage2 || this.monsterLife === 0 || this.yourLife === 0) {
                        clearInterval(cl2);
                    }
                    if (this.monsterLife === 0) {
                        this.gameOver = true;
                        this.started = false;
                        this.hits = [];
                    }
                }, 20);
            }
        },
        giveUp() {
            this.started = false;
            this.yourLife = 100;
            this.monsterLife = 100;
            gameOver = true;
            this.started = false;
            this.hits = [];
        },
        heal() {
            const plus = 10;
            let temp = 0;
            const cl1 = setInterval(() => {
                this.yourLife += 1;
                temp += 1;
                if (temp === plus) {
                    clearInterval(cl1);
                }

            }, 20);
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
        gameOver() {
            this.yourLife = 100;
            this.monsterLife = 100;
        }
    }
});