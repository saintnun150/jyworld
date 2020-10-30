<template>
  <div id="article-form-wrap">
    <div class="article-form">
      <div class="form-header">
        <h3>글 작성</h3>
      </div>
      <div class="form-group">
        <h4>내용</h4>
        <input class="form-input" type="text">
      </div>
      <div class="form-group">
        <h4>내용</h4>
        <ToastUIEditor ref="editor"></ToastUIEditor>
      </div>
      <button @click="saveArticle">저장</button>
    </div>
  </div>
</template>

<script>
import ToastUIEditor from "@/components/utils/ToastUI-Editor";

export default {
  name: "ArticleForm",
  components: {
    ToastUIEditor
  },
  methods: {
    saveArticle(){
      let sd = this.$refs.editor.$refs.toastuiEditor.invoke('getHtml');
      console.log('sd2', sd);
    }
  }
}
</script>

<style scoped lang="scss">
#article-form-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .article-form {
    width: 800px;
    background-color: #fafafa;
    padding: 1rem;

    .form-group {
      .form-input {
        height: calc(1.5em + .75rem + 2px);
        width: 100%;
        border: 1px solid #e5e5e5;
      }
    }
  }
}
</style>