new Vue({
    el: "#app",
    data: {
        active: false,
        list: [
            { name: "a" },
            { name: "b" },
            { name: "c" },
        ],
        field: "",
        inp: "",
        activeGr: false,
        color: "",
        width: 0,
        howBig: 5
    },
    methods: {
        change(e) {
            this.field = e.target.value;
        },
        add() {
            console.log(this.field)
            this.list.push({ name: this.field });
            this.field = "";
        },
        del(name) {
            this.list = this.list.filter(item => {
                return item.name !== name;
            });
        },
        changeWidth() {
            const cl = setInterval(() => {
                if (this.width < 300) {
                    this.width += 5;
                }
            }, 50);
            if (this.width === 300) {
                clearInterval(cl);
            }
            console.log(this.width);
        }

    },
    computed: {
        size() {
            return {
                width: this.howBig + "px"
            }
        },
        changed() {
            return {
                width: this.width + "px"
            }
        },
        divClassed: function () {
            return {
                red: this.active
            }
        },
        progress() {
            return {
                width: this.width + "px"
            }
        },
        blueColor: function () {
            return {
                blue: !this.active
            }
        },
        greenCol: function () {
            return {
                green: this.activeGr
            }
        },
        orangeCol: function () {
            return {
                orange: !this.activeGr
            }
        }

    },
    watch: {
        active(val) {
            console.log(val);
        }
    }
});