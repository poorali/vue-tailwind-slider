export default {
    name: 'SliderThumbnails',
    props: {
        items: {required: true, type: Array},
        activeItem:{required: true, type: Number,default: null},
        orientation: {default: 'horizontal', type: String}
    },
    methods: {
        navigate(id) {
            this.$parent.$emit('navigate', {id: id})
        }
    }
}