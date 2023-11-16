export default {
    name: 'SliderVideo',
    props: {
        activeItem: {default: null, type: Number},
        customId: {default: null, type: Number},
        play: {default: false, type: Boolean},
        src: {required: true, type: String},
        thumbnail: String,
    },
    data() {
        return {
            id: 0
        }
    },
    methods: {
        async addItem() {
            this.id = this.customId !== null ? this.customId : this.$parent.items.length
            const item = {...this.$props, ...{id: this.id, type: 'video', isHidden: false}}
            this.$parent.$emit('add-item', item)
        }
    },
    async mounted() {
        await this.addItem();
    },
    watch: {
        activeItemStatus(value) {
            if (this.play) {
                if (!value) {
                    this.$refs.video.pause();
                    this.$refs.video.currentTime = 0;
                } else {
                    this.$refs.video.play();
                }
            }
        }
    },
    computed: {
        activeItemStatus() {
            return (this.activeItem !== null ? (this.activeItem === this.id) : (this.$parent.activeItem === this.id))
        }
    }
}