import SliderImage from "@/components/Slider/SliderImage/SliderImage.vue";
import SliderThumbnails from "@/components/Slider/SliderThumbnails/Hooks";
import SliderVideo from "@/components/Slider/SliderVideo/Hooks";

export default {
    name: 'SliderPopup',
    components: {SliderVideo, SliderThumbnails, Slider: () => import('../Slider.vue'), SliderImage},
    props: {
        items: {required: true, type: Array},
        activeItem: {required: true, type: Number},
        title: {type: String}
    },
    data() {
        return {
            activeTab: 'image' //Can be images or videos
        }
    },
    methods: {
        navigate(to) {
            this.$parent.$emit('navigate', to)
        },
        toggleTab(tab) {
            this.activeTab = tab;
            this.navigate({id: this.activeTabItems[0].id})
        },
        handleTabResize() {
            if (window.innerWidth < 768 && this.activeTab === 'video') {
                this.toggleTab('image')
            }
        }
    },
    created() {
        this.$on('navigate', (to) => {
            this.navigate(to)
        })
        window.addEventListener('resize', this.handleTabResize)
    },
    computed: {
        activeTabItems() {
            return this.items.filter(item => item.type === this.activeTab)
        }
    },
    mounted() {
        if (this.activeTab === 'image' && this.items.find(item => item.id === this.activeItem).type === 'video') {
            this.activeTab = 'video';
        }
    },
    destroyed() {
        window.removeEventListener('resize', this.handleTabResize)
    }
}