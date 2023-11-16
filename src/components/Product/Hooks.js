export default {
    name: 'product',
    data() {
        return {
            activeColour: 'silver',
        }
    },
    watch: {
        activeColour(value) {
            this.$parent.$emit('navigate', {tag: value})
        }
    }
}