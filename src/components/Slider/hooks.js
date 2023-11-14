import SliderNav from './SliderNav/SliderNav.vue'
import SliderDots from './SliderDots/SliderDots.vue'
import SliderThumbnails from './SliderThumbnails/SliderThumbnails.vue'

export default {
    name: 'Slider',
    props: {
        autoplay: {default: false, type: Boolean},
        autoplayDelay: {default: 5000, type: Number},
        nav: {default: true, type: Boolean},
        dots: {default: true, type: Boolean},
        thumbnails: {default: true, type: Boolean},
        thumbnailsOrientation: {default: 'horizontal', type: String}
    },
    data() {
        return {
            activeItem: 0,
            items: [],
            hasActiveAnimation: null,
            autoplayInterval: null
        }
    },
    components: {SliderNav, SliderDots, SliderThumbnails},
    methods: {
        addItem(item) {
            this.items.push(item)
        },
        //Create Interval for autoplay and run navigate every a few seconds
        initializeAutoplay() {
            if (this.autoplay) {
                this.pauseNavigation();
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
            if (typeof to === 'object') {
                if (to.id !== undefined) {
                    this.activeItem = to.id;
                }
            }
            this.handleTransition();
        },
        //Pause Navigation
        pauseNavigation() {
            clearInterval(this.autoplayInterval)
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