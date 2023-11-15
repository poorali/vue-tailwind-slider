<template>
    <div id="app" class="w-full flex flex-col h-full">
        <Header/>
        <div class="flex flex-col md:flex-row justify-start md:justify-around items-center md:items-start">
            <Slider class="w-full md:w-5/12 mt-10 h-96 md:h-4/5" thumbnails-orientation="vertical" :autoplay="false" :autoplay-delay="5000">
                <SliderVideo class="w-10/12" src="/videos/video.mp4" key="video-1"/>
                <SliderImage src="/images/product-image.jpeg" thumbnail="/images/product-image-thumbnail.jpeg" large-image="/images/product-image-large.jpeg" key="image-1"/>
                <SliderImage src="/images/product-image-back.jpeg" thumbnail="/images/product-image-back-thumbnail.jpeg" large-image="/images/product-image-back-large.jpeg" key="image-2"/>
                <SliderImage src="/images/product-image-front.jpeg" thumbnail="/images/product-image-front-thumbnail.jpeg" large-image="/images/product-image-front-large.jpeg" key="image-3"/>
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