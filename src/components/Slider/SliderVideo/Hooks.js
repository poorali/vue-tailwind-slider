export default {
    name: 'SliderVideo',
    props: {
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
            this.id = this.$parent.items.length
            const item = {...this.$props, ...{id: this.id, type: 'video'}}
            this.$parent.$emit('add-item', item)
        }
    },
    async mounted() {
        await this.addItem();
    }
}