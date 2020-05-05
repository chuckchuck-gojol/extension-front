<template>
    <div class="container">
        <div v-for="(item, index) in json">
            <Comment v-bind="item"/>
        </div>
    </div>
</template>


<script>
    import Comment from './comment.vue'
    import jsonFile from './mock.json';

    export default {
        components: {
            Comment
        },
        created() { // 처음에 클릭했을 떄 index.vue 생성
            whale.webRequest.onBeforeRequest.addListener(
                function (details) {
                    return {cancel: true};
                },
                {urls: ["*://www.google.com/*"]},
                ["blocking"]);
            console.log(jsonFile)
        },
        data() {
            return {
              json: jsonFile
            };
        },
    };
</script>

<style lang="scss" scoped>
  .container{
    margin: 1em;
  }
</style>
