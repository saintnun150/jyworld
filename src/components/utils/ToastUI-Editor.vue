<template>
  <div>
    <Editor
        ref="toastUIEditor"
        initialEditType="wysiwyg"
        v-model="content"
    />
  </div>
</template>

<script>
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

import {Editor} from '@toast-ui/vue-editor';

export default {
  name: "ToastUI-Editor",
  components: {
    Editor
  },
  data() {
    return {
      content: ''
    }
  }
}
</script>

<style scoped lang="scss">
.form-button {
  margin-top: 1rem;
  height: 2rem;
  width: 100%;
  border: 1px solid #e5e5e5;
}
</style>