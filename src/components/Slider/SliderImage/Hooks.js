export default {
    name: 'SliderImage',
    props: {
        src: {required: true, type: String},
        customId: {default: null, type: Number},
        zoom: {default: 'hover', type: String},//Zoom type accepts hover,tap and disabled
        thumbnail: String,
        largeImage: String,
        alt: String,
        activeItem: {default: null, type: Number}
    },
    data() {
        return {
            isZooming: false,
            isTapping: false,
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
            if (window.innerWidth > 768 && this.zoom === 'hover') {
                this.isZooming = true
            }
        },
        zooming(e) {
            if (window.innerWidth > 768 && this.zoom === 'hover') {
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
        },
        calcTapOrigin(e) {
            const rect = this.$refs.sliderItem.getBoundingClientRect();
            const sliderImage = this.$refs.sliderImage.getBoundingClientRect();
            if (e.clientX > sliderImage.left && e.clientY > sliderImage.top) {
                // Get the coordinates of the click relative to the sliderImage
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                // Calculate the percentage position based on the click position
                const originX = (x / rect.width) * 100;
                const originY = (y / rect.height) * 100;

                // Set the transform origin and scale
                this.$refs.sliderItem.style.transformOrigin = `${originX}% ${originY}%`;
            }
        },
        //Tap Zoom
        tap(e) {
            if (this.zoom === 'tap') {
                //Tap Zoom functionality here
                this.isTapping = !this.isTapping;
                if (this.isTapping) {
                    this.$refs.sliderItem.classList.add('w-full');
                    this.calcTapOrigin(e)
                    this.$refs.sliderItem.style.transform = 'scale(3)';
                } else {
                    this.$refs.sliderItem.style.transform = 'scale(1)'
                    this.$refs.sliderItem.classList.remove('w-full');
                }
            }
        },
        tapping(e) {
            if (this.zoom === 'tap' && this.isTapping) {
                this.calcTapOrigin(e)
            }
        }
    },
    async mounted() {
        await this.addItem();
    },
    watch: {
        activeItemStatus(value) {
            if (this.zoom === 'tap' && !value) {
                this.isTapping = false;
                this.$refs.sliderItem.style.transform = 'scale(1)'
                this.$refs.sliderItem.classList.remove('w-full');
            }
        }
    },
    computed: {
        activeItemStatus() {
            return (this.activeItem !== null ? (this.activeItem === this.id) : (this.$parent.activeItem === this.id))
        }
    }
}