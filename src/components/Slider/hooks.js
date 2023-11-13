import SliderNav from './SliderNav/SliderNav.vue'
import SliderDots from './SliderDots/SliderDots.vue'

export default {
    name: 'Slider',
    props: {
        autoplay: {default: false, type: Boolean},
        autoplayDelay: {default: 5000, type: Number},
        nav: {default: true, type: Boolean},
        dots: {default: true, type: Boolean}
    },
    data() {
        return {
            activeItem: 0,
            items: [],
            hasActiveAnimation: null,
            autoplayInterval: null
        }
    },
    components: {SliderNav, SliderDots},
    methods: {
        addItem(item) {
            this.items.push(item)
        },
        //Create Interval for autoplay and run navigate every a few seconds
        initializeAutoplay() {
            if (this.autoplay) {
                clearInterval(this.autoplayInterval)
                this.autoplayInterval = window.setInterval(this.navigate, this.autoplayDelay)
            }
        },
        //Main Navigate function
        navigate(to = 'next') {
            switch (to) {
                case 'next':
                    this.activeItem = this.items[this.activeItem + 1] ? this.activeItem + 1 : 0
                    break;
                case 'prev':
                    this.activeItem = this.items[this.activeItem - 1] ? this.activeItem - 1 : this.items.length - 1
                    break;
            }
            this.initializeAutoplay();
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
        this.$on('navigate', this.navigate)
        //Initialize slider autoplay if prop set true
        this.initializeAutoplay()
    }
}