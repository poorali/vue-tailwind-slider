export default {
    name: 'SliderNav',
    methods: {
        navigate(type) {
            this.$parent.$emit('navigate', type)
        }
    }
}