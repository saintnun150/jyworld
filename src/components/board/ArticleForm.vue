<template>
  <div id="article-form-wrap">
    <div class="article-form">
      <div class="form-header">
        <h3>글 작성</h3>
      </div>
      <div class="form-group">
        <h4>제목</h4>
        <input class="form-input" type="text" v-model="title">
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
import firebase from "@/firebase";

let database = firebase.firestore();
export default {
  name: "ArticleForm",
  components: {
    ToastUIEditor
  },
  data() {
    return {
      title: null
    }
  },
  methods: {
    saveArticle() {
      let focusEditor = this.$refs.editor.$refs.toastUIEditor;
      let getTitle = this.title;
      let getContent = focusEditor.invoke('getHtml');
      let dt = new Date();
      let createDate = dt.toLocaleString();
      let uuid = createUUID();

      database.collection("articles").add({
        uuid : uuid,
        title: getTitle,
        content: getContent,
        date: createDate
      })
          .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
          })
          .catch(function (error) {
            console.error("Error adding document: ", error);
          });

      function createUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }
    },
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