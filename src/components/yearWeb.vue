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
      imageIndex: 0,
      image: '',
      imageArray: []
    }
  },
  mounted () {
    const files = require.context('@/assets/year', false, /.jpg$/).keys()
    this.imageArray = files.map(item => item.replace('./', ''))
    this.image = require(`./../assets/year/${this.imageArray[this.imageArray.length - 1]}`)
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
      this.cycle()
    },
    save (num) {
      console.log('here')
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
        this.Download(base64, `yearWeb${num}.png`)
      }, () => {
        alert('截图失败，请重新尝试')
      })
    },
    cycle () {
      // var interval = setInterval(() => {
      if (this.imageArray.length <= 0) {
        return 0
        // clearInterval(interval)
      } else {
        let imageName = this.imageArray.pop()
        this.image = require(`./../assets/year/${imageName}`)
        this.save(imageName)
      }
      // }, 1500)
    }
  }
}
</script>

<style scoped>
#yearWeb {
  width: 1024px;
  height: 376px;
  background-image: url("./../assets/bg/bg2.jpg");
  background-size: 100% 100%;
  position: relative;
  margin: 0 auto;
}
.image {
  width: 136px;
  height: 136px;
  position: absolute;
  top: 185px;
  right: 117px;
}
</style>
