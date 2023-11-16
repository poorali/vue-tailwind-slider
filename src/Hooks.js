import Slider from "./components/Slider/Slider.vue";
import SliderVideo from "./components/Slider/SliderVideo/SliderVideo.vue";
import SliderImage from "./components/Slider/SliderImage/SliderImage.vue";
import Header from "./Header.vue";
import Product from "./components/Product/Product.vue";

export default {
    name: 'App',
    components: {Product, Header, SliderImage, SliderVideo, Slider},
    created() {
        //Navigate to specific image with select colour in slider
        this.$on('navigate', function (to) {
            this.$refs.mySlider.navigate(to)
        }.bind(this))
    }
}