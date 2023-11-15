export default {
    name: 'SliderImage',
    props: {
        src: {required: true, type: String},
        thumbnail: String,
        largeImage: String,
        alt: String,
        customId: {default: null, type: Number},
        activeItem: Number
    },
    data() {
        return {
            isZooming: false,
            zoomX: null,
            zoomY: null,
            id: 0
        }
    },
    methods: {
        async addItem() {
            this.id = this.customId !== null ? this.customId : this.$parent.items.length
            const item = {...this.$props, ...{id: this.id, type: 'image'}}
            this.$parent.$emit('add-item', item)
        },
        zoomStarted() {
            if (window.innerWidth > 768 && this.$parent.zoom) {
                this.isZooming = true
            }

        },
        zooming(e) {
            if (window.innerWidth > 768 && this.$parent.zoom) {
                this.isZooming = true
                //Get SliderItem position
                const zoomBox = this.$refs.zoomBox.getBoundingClientRect();
                const sliderImage = this.$refs.sliderImage.getBoundingClientRect();
                // const sliderImage = this.$refs.sliderImage.getBoundingClientRect();
                this.zoomX = (e.clientX - sliderImage.left) - (zoomBox.width / 2);
                this.zoomY = (e.clientY - sliderImage.top) - (zoomBox.height / 2);
                this.$refs.zoomBox.style.left = this.zoomX + 'px';
                this.$refs.zoomBox.style.top = this.zoomY + 'px';
                if (e.clientX > (sliderImage.left + sliderImage.width) || e.clientX < sliderImage.left || e.clientY > (sliderImage.top + sliderImage.height) || e.clientY < sliderImage.top) {
                    this.zoomEnded()
                }
                //Show proper image in zoom container box based on hovered area
                if (this.$refs.zoomImage) {
                    this.$refs.zoomImage.style.marginLeft = `-${this.zoomX * 1.5}%`
                    this.$refs.zoomImage.style.marginTop = `-${this.zoomY * 1.5}%`
                }
            }

        },
        zoomEnded() {
            this.isZooming = false;
        }
    },
    async mounted() {
        await this.addItem();
    }
}