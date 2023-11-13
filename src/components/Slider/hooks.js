export default {
    name: 'Slider',
    props: {
        autoplay: {default: false, type: Boolean},
        autoplayDelay: {default: 5000, type: Number}
    },
    data() {
        return {
            activeItem: 0,
            items: [],
            hasActiveAnimation: null,
            autoplayInterval: null
        }
    },
    methods: {
        addItem(item) {
            this.items.push(item)
        },
        //Create Interval for autoplay and run navigate every a few seconds
        initializeAutoplay() {
            clearInterval(this.autoplayInterval)
            this.autoplayInterval = window.setInterval(this.navigate, this.autoplayDelay)
        },
        //Main Navigate function
        navigate(to = 'next') {
            switch (to) {
                case 'next':
                    this.activeItem = this.items[this.activeItem + 1] ? this.activeItem + 1 : 0
                    break;
            }
            this.handleTransition();
        },
        //Handle Transition
        handleTransition() {
            this.hasActiveAnimation = true;
            window.setTimeout(function () {
                this.hasActiveAnimation = false;
            }.bind(this), 1)
        }
    },
    created() {
        this.$on('add-item', this.addItem)
        //Initialize slider autoplay if prop set true
        if (this.autoplay) {
            this.initializeAutoplay()
        }
    }
}