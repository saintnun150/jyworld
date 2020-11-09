<template>
  <div id="article-form-wrap">
    <div class="article-form">
      <div class="form-header">
        <h3>글 수정</h3>
      </div>
      <div class="form-group">
        <h4>제목</h4>
        <input class="form-input" type="text" v-model="title">
      </div>
      <div class="form-group">
        <h4>내용</h4>
        <Viewer v-if="content != null" :initialValue="content"></Viewer>
      </div>
      <button>수정</button>
    </div>
  </div>

</template>

<script>
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import {Viewer} from '@toast-ui/vue-editor'
import firebase from "@/firebase";

let database = firebase.firestore();

export default {
  name: "ArticleViewer",
  components: {
    Viewer
  },
  data() {
    return {
      content: null,
      title: null
    }
  },
  created() {
    let docRef = database.collection("articles").doc("DSt1Vyo99MAWcHT2Moh8");
    let tempTitle = null;
    let tempContent = null;
    let vueThis = this;

    async function fetchData() {
      await getArticle();
      await changeData(vueThis);
    }
    function getArticle() {
      return new Promise(function (resolve) {
        let article = docRef.get()
            .then(
                function (doc) {
                  if (doc.exists) {
                    tempTitle = doc.data().title;
                    tempContent = doc.data().content;
                  } else {
                    console.log("No such document!");
                  }
                })
            .catch(function (error) {
              console.log("Error getting document:", error);
            });
        resolve(article);
      });
    }
    function changeData(vueThis) {
      vueThis.title = tempTitle;
      vueThis.content = tempContent;
    }
    fetchData();
  },
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