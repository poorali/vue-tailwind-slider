<template>
    <div id="app" class="w-full flex flex-col h-full">
        <Header/>
        <div class="flex flex-col md:flex-row justify-start md:justify-around items-center md:items-start">
            <Slider ref="mySlider" title="Samsung Galaxy S23 Plus 5G" features="Colour: Lavender" class="w-full md:w-5/12 mt-10 h-96 md:h-4/5" thumbnails-orientation="horizontal" :autoplay="true" :autoplay-delay="5000">
                <SliderVideo class="w-10/12" src="/videos/video.mp4" key="video-1"/>
                <SliderImage tag="silver" src="/images/product-image.jpeg" thumbnail="/images/product-image-thumbnail.jpeg" large-image="/images/product-image-large.jpeg" key="image-1"/>
                <SliderImage tag="silver" src="/images/product-image-back.jpeg" thumbnail="/images/product-image-back-thumbnail.jpeg" large-image="/images/product-image-back-large.jpeg" key="image-2"/>
                <SliderImage tag="silver" src="/images/product-image-front.jpeg" thumbnail="/images/product-image-front-thumbnail.jpeg" large-image="/images/product-image-front-large.jpeg" key="image-3"/>
                <SliderImage tag="red" src="/images/red-product-image-back.jpg" thumbnail="/images/red-product-image-back-thumbnail.jpg" large-image="/images/red-product-image-back-large.jpg" key="image-4"/>
                <SliderImage tag="blue" src="/images/blue-product-image-back.jpg" thumbnail="/images/blue-product-image-back-thumbnail.jpg" large-image="/images/blue-product-image-back-large.jpg" key="image-5"/>
            </Slider>
            <Product/>
        </div>
    </div>
</template>

<script>
export {default} from './Hooks'
</script>