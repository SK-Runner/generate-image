<template>
  <div>
    <div id="yearMobile">
      <img class='image' :src='image'>
    </div>
    <button id="save-btn" @click="cycle">保存</button>
  </div>
</template>

<script>
import html2canvas from 'html2canvas'
export default {
  name: 'HelloWorld',
  data () {
    return {
      message: '',
      number: 1,
      image: require(`./../assets/image/pic1.png`)
    }
  },
  methods: {
    // 渲染图片
    Render (src, width, height, cb) {
      const img = new Image()
      img.src = src
      img.width = width
      img.height = height
      img.crossOrigin = '' // 图像跨域时配置
      cb && cb(img)
    },
    // 下载图片
    Download (url, name) {
      const target = document.createElement('a')
      target.href = url
      target.download = name
      const event = document.createEvent('MouseEvents')
      event.initEvent('click', true, true)
      target.dispatchEvent(event)
    },
    save () {
      const yearMobile = document.getElementById('yearMobile')
      // allowTaint: true, // 不能与useCORS共用
      const opts = {
        logging: false,
        scale: 2,
        useCORS: true
      }
      html2canvas(yearMobile, opts).then(res => {
        // const { height, width } = res
        const base64 = res.toDataURL('image/png', 1)
        this.Download(base64, 'yearMobile.png')
        // this.Render(base64, width, height, img => {
        //   document.body.appendChild(img)
        //   this.Download(base64, 'yearMobile.png')
        // })
      }, () => alert('截图失败，请重新尝试'))
    },
    cycle () {
      let interval = setInterval(() => {
        if (this.number >= 4) {
          clearInterval(interval)
        } else {
          this.image = require(`./../assets/image/pic${this.number}.png`)
          this.number++
          this.save()
        }
      }, 2000)
    }
  }
}
</script>

<style scoped>
#yearMobile {
  width: 750px;
  height: 1334px;
  background-image: url("./../assets/bg/bg1.jpg");
  background-size: 100% 100%;
  position: relative;
  margin: 0 auto;
}
.image {
  width: 260px;
  height: 260px;
  position: absolute;
  top: 976px;
  left: 56px;
}
</style>
