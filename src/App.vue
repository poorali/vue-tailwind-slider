<template>
    <div id="app" class="w-full flex flex-col">
        <Header/>
        <div class="flex flex-col md:flex-row justify-start md:justify-around items-center md:items-start">
            <Slider class="w-full md:w-5/12 mt-10 h-80 md:h-4/5" :autoplay="true" :autoplay-delay="4000">
                <SliderVideo class="w-10/12" src="/videos/video.mp4" key="video-1"/>
                <SliderImage src="/images/product-image.jpeg" key="image-1"/>
                <SliderImage src="/images/product-image-back.jpeg" key="image-2"/>
                <SliderImage src="/images/product-image-front.jpeg" key="image-3"/>
            </Slider>
            <Product/>
        </div>
    </div>
</template>

<script>
import Slider from "./components/Slider/Slider.vue";
import SliderVideo from "./components/Slider/SliderVideo/SliderVideo.vue";
import SliderImage from "./components/Slider/SliderImage/SliderImage.vue";
import Header from "./Header.vue";
import Product from "./components/Product/Product.vue";

export default {
    name: 'App',
    components: {Product, Header, SliderImage, SliderVideo, Slider},
}
</script>