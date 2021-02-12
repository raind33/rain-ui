<template>
  <div style="margin: 20px;">
    {{error}}
    <br>
    {{fileList}}
    <div>只能上传 300kb 以内的 png、jpeg 文件</div>
    <r-uploader accept="image/*" method="POST" action="https://node-image-serve.herokuapp.com/upload" name="file"
      @upload:fileList="y"
      :parseResponse="parseResponse" :file-list.sync="fileList" @error="error=$event" :size-limit="1024*1024*1024">
      <r-button icon="upload">上传</r-button>
    </r-uploader>
  </div>
</template>

<script>
import RUploader from './uploader'
import RButton from './button/button'

export default {
  name: 'demo',
  components: { RUploader, RButton },
  data () {
    return {
      fileList: [],
      error: ''
    }
  },
  methods: {
    alert (error) {
      window.alert(error || '上传失败')
    },
    parseResponse (response) {
      // const object = JSON.parse(response)
      const url = `https://node-image-serve.herokuapp.com/preview/${response}`
      return url
    },
    y (newFileList) {
      this.fileList = newFileList
    }
  }
}

</script>
<style>
  * {margin: 0; padding: 0; box-sizing: border-box;}
  body {background: white;}
</style>
<style scoped lang="scss">
</style>
