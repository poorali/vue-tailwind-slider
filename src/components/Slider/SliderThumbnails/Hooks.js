export default {
    name: 'SliderThumbnails',
    props: {
        items: {required: true, type: Array},
        activeItem: {required: true, type: Number, default: null},
        orientation: {default: 'horizontal', type: String}
    },
    methods: {
        navigate(id) {
            this.$parent.$emit('navigate', {id: id})
        }
    },
    watch: {
        //Scroll to active thumbnail
        activeItem(value) {
            let activeThumbnail = this.$refs['thumbnails-' + value];
            if (activeThumbnail.constructor === Array) {
                activeThumbnail = activeThumbnail[0];
            }
            if (activeThumbnail) {
                let offset = null;
                if (this.orientation === 'vertical') {
                    offset = {top: activeThumbnail.offsetTop - (activeThumbnail.getBoundingClientRect().height * 3)}
                } else {
                    offset = {left: activeThumbnail.offsetLeft - (activeThumbnail.getBoundingClientRect().width * 3)}
                }
                this.$refs.thumbnailContainer.scrollTo({...{behavior: 'smooth'}, ...offset});
            }
        }
    }
}