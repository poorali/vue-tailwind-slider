
# Vue-Tailwind-Slider

A simple slider developed using Vue 2 and TailwindCSS


## Features

- Simple slide navigation
- Supports both images and videos
- Shows thumbnails
- Slide navigation on mobile
- Image zoom
- Popup viewer for better user experience
- Thumbnails on Popup
- Zoom on popup by tapping or clicking
- Separate tabs for videos and images in popup
- Autoplay
- Filter Items and navigate to specific color or size by using global Navigate API



## Demo

https://slider.illuteam.com/


## Installation

You can clone and use the slider by running below commands in Terminal

```bash
  npm install
```

```bash
  npm run serve
```


## Simple Example

```html
<template>
    <div id="app">
            <Slider>
                <SliderVideo class="w-10/12" src="/videos/video.mp4" key="video-1"/>
                <SliderImage tag="silver" src="/images/product-image.jpeg" thumbnail="/images/product-image-thumbnail.jpeg" large-image="/images/product-image-large.jpeg" key="image-1"/>
            </Slider>
    </div>
</template>

<script>
import Slider from './components/Slider/Slider.vue'  
import SliderImage from './components/Slider/SliderImage/SliderImage.vue'
import SliderVideo from './components/Slider/SliderVideo/SliderVideo.vue'  
export default {name:'App',components:{Slider,SliderImage,SliderVideo}}
</script>
```

## Manual Navigation using global Navigate method
```html
<template>
    <div id="app" class="w-full flex flex-col h-full">
        <Slider ref="mySlider">
            <SliderImage tag="red" src="/images/product-image.jpeg" thumbnail="/images/product-image-thumbnail.jpeg" large-image="/images/product-image-large.jpeg" key="image-1"/>
            <SliderImage tag="silver" src="/images/product-image-back.jpeg" thumbnail="/images/product-image-back-thumbnail.jpeg" large-image="/images/product-image-back-large.jpeg" key="image-2"/>
        </Slider>
        <div class="mt-10">
            <button class="bg-white" @click="() => this.$refs.mySlider.navigate({tag:'red'})">Navigate to red image</button>
            <button class="bg-white ml-10" @click="() => this.$refs.mySlider.navigate({tag:'silver'})">Navigate to Silver image</button>
        </div>
    </div>
</template>

<script>
import Slider from './components/Slider/Slider.vue'
import SliderImage from './components/Slider/SliderImage/SliderImage.vue'
export default {
    name: 'App',
    components:{Slider,SliderImage}
}
</script>
```
## API Reference (Props)

#### Slider.vue
Main slider vue component

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `autoplay` | `Boolean` | **Default: false**. Enables auto navigation |
| `autoplayDelay` | `Number` | **Default: 5000**. Sets auto navigation delay (ms) |
| `dots` | `Boolean` | **Default: true**. Shows dots on the bottem of slider |
| `features` | `String` | **Default: ''**. Shows an extra text in popup dialog |
| `nav` | `Boolean` | **Default: true**. Shows navigation arrows on the slider |
| `popup` | `Boolean` | **Default: true**. Enables popup dialog |
| `title` | `String` | **Default: ''**. Shows a title in popup dialog |
| `thumbnails` | `Boolean` | **Default: true**. Shows thumbnails at the bottem or side of the slider |
| `thumbnailsOrientation` | `String: ['horizontal','Vertical']` | **Default: horizontal**. Determines the position of thumbnails |

#### SliderImage.vue
You can use it as a slot inside Slider component to show images

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `alt`      | `String` | **Default: ''**. Alt of the rendered image |
| `largeImage`      | `String` | **Default: ''**. Used as a source for image zoom  |
| `src`      | `String` | **Required**. Used as the main source of the image  |
| `thumbnail`      | `String` | **Default: ''**. Used as a source for image thumbnail  |
| `tag`      | `String` | **Default: null**. Used as a specific image's tag for manual navigation  |
| `zoom`      | `String ['hover','tap', 'disabled']` | **Default: hover**. Controls image zoom behaviour  |


#### SliderVideo.vue
You can use it as a slot inside Slider component to show your videos

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `src`      | `String` | **Required**. Used as the main source of the video  |
| `thumbnail`      | `String` | **Default: ''**. Used as a source for video thumbnail  |
| `play`      | `Boolean` | **Default: false**. Enables video autoplay  |


## Tech Stack

Vue 2, TailwindCSS 2

