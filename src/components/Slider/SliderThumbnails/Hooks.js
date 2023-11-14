export default {
    name: 'SliderThumbnails',
    props: {
        items: {required: true, type: Array},
        orientation: {default: 'horizontal', type: String}
    },
    methods: {
        navigate(id) {
            this.$parent.$emit('navigate', {id: id})
        }
    }
}