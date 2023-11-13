<template>
    <div id="app" class="h-full w-full flex flex-col md:flex-row">
        <Slider class="h-screen w-full md:w-5/12 overflow-hidden" :autoplay="true" :autoplay-delay="4000">
            <SliderVideo class="w-10/12" src="/videos/video.mp4" key="video-1"/>
            <SliderImage src="/images/product-image.jpeg" key="image-1"/>
            <SliderImage src="/images/product-image-back.jpeg" key="image-2"/>
            <SliderImage src="/images/product-image-front.jpeg" key="image-3"/>
        </Slider>
        <div>
            Product
        </div>
    </div>
</template>

<script>
import Slider from "./components/Slider/Slider.vue";
import SliderVideo from "./components/Slider/SliderVideo/SliderVideo.vue";
import SliderImage from "./components/Slider/SliderImage/SliderImage.vue";

export default {
    name: 'App',
    components: {SliderImage, SliderVideo, Slider},
}
</script>