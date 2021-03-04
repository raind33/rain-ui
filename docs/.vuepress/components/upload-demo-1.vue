<template>
  <div>
    <r-upload
      name="file"
      :action="host+'/upload'"
      :fileList.sync="fileList"
      :size-limit="sizeLimit"
      :before-remove="beforeRemove"
      :parseResponse="parseResponse"
    >
        <r-button>上传</r-button>
    </r-upload>
  </div>
</template>
<script>
  import Upload from '../../../packages/upload/'
  import Button from '../../../packages/button'
  export default {
    components: {
      'r-upload': Upload,
      'r-button': Button,
    },
    data () {
      return {
        fileList: [],
        sizeLimit: 2 * 1024 * 1024,
        host: 'https://node-image-serve.herokuapp.com'

      }
    },
    methods: {
      parseResponse (response) {
        return `${this.host}/preview/${response}`
      },
      beforeRemove (file, fileList) {
        return true
      }
    }
  }
</script>
