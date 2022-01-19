<template>
  <div>
    <div class="btn" @click="changeType(2)">年卡</div>
    <div class="btn" @click="changeType(1)">季卡</div>
    <div class="btn" @click="changeType(0)">月卡</div>
    <p>操作：</p>
    <div class="btn" @click="cycle">保存</div>
    <div id="mobile" :class="{'year':type==2,'quarter':type==1,'month':type==0}">
      <span class="number">{{No}}</span>
      <img class='image' :src='image'>
    </div>
  </div>
</template>

<script>
import html2canvas from 'html2canvas'
export default {
  name: 'HelloWorld',
  data () {
    return {
      number: 0,
      imageIndex: 0,
      image: '',
      imageArray: [],
      type: 2
    }
  },
  mounted () {
    this.changePath()
  },
  watch: {
    type () {
      this.changePath()
    }
  },
  computed: {
    No () {
      let num = this.number
      if (num < 10) {
        return `1-000${num}`
      } else if (num < 100) {
        return `1-00${num}`
      } else if (num < 1000) {
        return `1-0${num}`
      } else {
        return `1-${num}`
      }
    },
    filePath () {
      let result = ''
      let type = this.type
      switch (type) {
        case 0:
          result = 'month'
          break
        case 1:
          result = 'quarter'
          break
        case 2:
          result = 'year'
          break
      }
      return result
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
      this.cycle()
    },
    save () {
      const mobile = document.getElementById('mobile')
      // allowTaint: true, // 不能与useCORS共用
      const opts = {
        logging: false,
        scale: 1,
        useCORS: true
      }
      html2canvas(mobile, opts).then(res => {
        // const { height, width } = res
        const base64 = res.toDataURL('image/png', 1)
        this.Download(base64, `${this.filePath}-${this.number}`)
      }, () => {
        alert('截图失败，请重新尝试')
      })
    },
    cycle () {
      if (this.imageArray.length <= 0) {
        return 0
      } else {
        this.number += 1
        let imageName = this.imageArray.pop()
        this.image = require(`./../assets/${this.filePath}/${imageName}`)
        this.save(imageName)
      }
    },
    // 切换会员卡类型
    changeType (type) {
      switch (type) {
        case 0:
          this.type = type
          break
        case 1:
          this.type = type
          break
        case 2:
          this.type = type
          break
      }
    },
    changePath () {
      let path = this.filePath
      if (path === 'year') {
        const files = require.context(`@/assets/year`, false, /.jpg$/).keys()
        this.imageArray = files.map(item => item.replace('./', ''))
        this.image = require(`./../assets/year/${this.imageArray[this.imageArray.length - 1]}`)
      } else if (path === 'quarter') {
        const files = require.context(`@/assets/quarter`, false, /.jpg$/).keys()
        this.imageArray = files.map(item => item.replace('./', ''))
        this.image = require(`./../assets/quarter/${this.imageArray[this.imageArray.length - 1]}`)
      } else if (path === 'month') {
        const files = require.context(`@/assets/month`, false, /.jpg$/).keys()
        this.imageArray = files.map(item => item.replace('./', ''))
        this.image = require(`./../assets/month/${this.imageArray[this.imageArray.length - 1]}`)
      }
    }
  }
}
</script>

<style scoped>
#mobile {
  width: 750px;
  height: 1334px;
  background-size: 100% 100%;
  position: relative;
  margin: 0 auto;
}
.year {
  background-image: url("./../assets/bg/wx-year.jpg");
}
.quarter {
  background-image: url("./../assets/bg/wx-quarter.jpg");
}
.month {
  background-image: url("./../assets/bg/wx-month.jpg");
}
.number {
  position: absolute;
  right: 10px;
  bottom: 10px;
  text-align: left;
  color: rgba(255, 255, 255, 0.6);
  font-size: 10px;
}
.image {
  width: 210px;
  height: 210px;
  position: absolute;
  top: 918px;
  left: 62px;
}
</style>
