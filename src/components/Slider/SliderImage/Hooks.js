import {isMobile} from "@/utils";

export default {
    name: 'SliderImage',
    props: {
        alt: String,
        activeItem: {default: null, type: Number},
        customId: {default: null, type: Number},
        largeImage: String,
        src: {required: true, type: String},
        thumbnail: String,
        tag: {default: null, type: String},
        zoom: {default: 'hover', type: String}//Zoom type accepts hover,tap and disabled
    },
    data() {
        return {
            isZooming: false,
            isTapping: false,
            zoomX: null,
            zoomY: null,
            tapCount: 0,
            id: 0
        }
    },
    methods: {
        async addItem() {
            this.id = this.customId !== null ? this.customId : this.$parent.items.length
            const item = {...this.$props, ...{id: this.id, type: 'image', isHidden: false}}
            this.$parent.$emit('add-item', item)
        },
        zoomStarted() {
            if (!isMobile() && this.zoom === 'hover') {
                this.isZooming = true
            }
        },
        zooming(e) {
            if (!isMobile() && this.zoom === 'hover') {
                this.isZooming = true
                //Get SliderItem position
                const zoomBox = this.$refs.zoomBox.getBoundingClientRect();
                const sliderImage = this.$refs.sliderImage.getBoundingClientRect();
                const zoomImage = this.$refs.zoomImage.getBoundingClientRect();
                this.zoomX = (e.clientX - sliderImage.left) - (zoomBox.width / 2);
                this.zoomY = (e.clientY - sliderImage.top) - (zoomBox.height / 2);
                this.$refs.zoomBox.style.left = this.zoomX + 'px';
                this.$refs.zoomBox.style.top = this.zoomY + 'px';
                if (e.clientX > (sliderImage.left + sliderImage.width) || e.clientX < sliderImage.left || e.clientY > (sliderImage.top + sliderImage.height) || e.clientY < sliderImage.top) {
                    this.zoomEnded()
                }
                //Show proper image in zoom container box based on hovered area
                const cx = zoomImage.width / zoomBox.width;
                const cy = zoomImage.height / zoomBox.height;
                this.$refs.zoomImage.style.backgroundSize = (sliderImage.width * cx) + "px " + (sliderImage.height * cy) + "px";
                this.$refs.zoomImage.style.backgroundPosition = "-" + (this.zoomX * cx) + "px -" + (this.zoomY * cy) + "px";

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
            //Handle double tap in mobile
            if (this.tapCount >= 0 && this.tapCount < 2) {
                this.tapCount += 1;
            }
            window.setTimeout(function () {
                this.tapCount = 0
            }.bind(this), 450)
            if (isMobile() && this.tapCount !== 2) {
                return false;
            }
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
            if (isMobile() && this.tapCount !== 2) {
                return false;
            }
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