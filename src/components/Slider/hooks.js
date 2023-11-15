import SliderNav from './SliderNav/SliderNav.vue'
import SliderDots from './SliderDots/SliderDots.vue'
import SliderThumbnails from './SliderThumbnails/SliderThumbnails.vue'
import SliderPopup from './SliderPopup/SliderPopup.vue'

export default {
    name: 'Slider',
    props: {
        autoplay: {default: false, type: Boolean},
        autoplayDelay: {default: 5000, type: Number},
        nav: {default: true, type: Boolean},
        dots: {default: true, type: Boolean},
        thumbnails: {default: true, type: Boolean},
        popup: {default: true, type: Boolean},
        thumbnailsOrientation: {default: 'horizontal', type: String},
    },
    data() {
        return {
            activeItem: 0,
            items: [],
            hasActiveAnimation: null,
            autoplayInterval: null,
            startDragX: null,
            currentDragX: null,
            showPopup: false,
        }
    },
    components: {SliderNav, SliderDots, SliderThumbnails, SliderPopup},
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
            if (this.items[this.activeItem].isHidden) {
                this.navigate('next');
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
        },
        dragStart(e) {
            //Enable dragging only for mobile devices
            if (window.innerWidth < 768) {
                this.startDragX = e.touches[0].clientX;
            }
        },
        dragging(e) {
            if (e.touches[0].clientX !== 0 && this.startDragX !== null) {
                this.currentDragX = e.touches[0].clientX;
            }
        },
        dragEnd() {
            if (this.currentDragX !== null) {
                if (this.currentDragX > this.startDragX) {
                    this.navigate('next')
                }
                if (this.currentDragX < this.startDragX) {
                    this.navigate('prev')
                }
            }
            this.startDragX = null;
            this.currentDragX = null;
        },
        //TogglePopup
        togglePopup() {
            if (this.popup) {
                this.showPopup = !this.showPopup;
            }
        },
        hideVideos() {
            this.items = this.items.map(item => {
                if (item.type === 'video') {
                    item.isHidden = window.innerWidth < 768;
                }
                return item;
            })
            if (this.items[this.activeItem].isHidden) {
                this.navigate('next')
            }
        }
    },
    mounted() {
        this.hideVideos();
    },
    created() {
        this.$on('add-item', this.addItem)
        this.$on('navigate', this.navigate)
        this.$on('toggle-popup', this.togglePopup)
        //Initialize slider autoplay if prop set true
        this.initializeAutoplay()
        window.addEventListener('resize', this.hideVideos)
    }
}