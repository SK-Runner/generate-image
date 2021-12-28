<template>
  <div>
    <div id="yearWeb">
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
      const yearWeb = document.getElementById('yearWeb')
      // allowTaint: true, // 不能与useCORS共用
      const opts = {
        logging: false,
        scale: 1,
        useCORS: true
      }
      html2canvas(yearWeb, opts).then(res => {
        // const { height, width } = res
        const base64 = res.toDataURL('image/png', 1)
        this.Download(base64, 'yearWeb.png')
        // this.Render(base64, width, height, img => {
        //   document.body.appendChild(img)
        //   this.Download(base64, 'yearWeb.png')
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
#yearWeb {
  width: 1024px;
  height: 376px;
  background-image: url("./../assets/bg/bg2.png");
  background-size: 100% 100%;
  position: relative;
  margin: 0 auto;
}
.image {
  width: 130px;
  height: 130px;
  position: absolute;
  top: 188px;
  right: 121px;
}
</style>
