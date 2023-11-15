export default {
    name: 'SliderThumbnails',
    props: {
        items: {required: true, type: Array},
        activeItem:{required: true, type: Number},
        orientation: {default: 'horizontal', type: String}
    },
    methods: {
        navigate(id) {
            this.$parent.$emit('navigate', {id: id})
        }
    }
}