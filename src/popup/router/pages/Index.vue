<template>
  <div id="app">
    <p>Hello world! {{ title }}</p>
    <p>Page {{ page }}</p>

    <div v-for="(item, index) in json">
      <Comment v-bind="item"/>
    </div>
  </div>
</template>


<script>
  import Comment from './comment.vue'

export default {
  components: {
    Comment
  },
  created() { // 처음에 클릭했을 떄 index.vue 생성
    whale.webRequest.onBeforeRequest.addListener(
            function(details) { return {cancel: true}; },
            {urls: ["*://www.google.com/*"]},
            ["blocking"]);
  },
  data() {
    return {
      title: 'minjeong',
      items: [1,2,3],
      page: 'hello',
      json: [{user_channel: '/channel/UCqPEgHpMCNIMOKdwfFXRSbw', user_text: 'S_H', user_image: 'https://yt3.ggpht.com/a/AATXAJwEqu-XdQqv2qXQxtDd7F8LZIdZlR2abnCa6A=s48-c-k-c0xffffffff-no-rj-mo', user_time: '1개월전', user_comment_good_count: '2', user_comment: '<div class="style-scope ytd-expander" id="content"><yt-formatted-string class="style-scope ytd-comment-renderer" disable-upgrade="" hidden="" id="voted-option" slot="content"></yt-formatted-string><yt-formatted-string class="style-scope ytd-comment-renderer" id="content-text" slot="content" split-lines="">다행이야 아노유노 기타 소리가 너무 좋아서 정말 좋아합니다 이런 잔잔하고 이쁜 곡들을 모아주셨군요! 복받으십셔ㅠㅠ 잘때 틀어놓고 자면 되겠군요ㅠㅠ 우로파들 목소리 너무 좋아ㅜㅜ</yt-formatted-string></div>'},
        {user_channel: '/channel/UCPZaejhrCz6PkH3663wrlBQ', user_text: '최성유', user_image: 'https://yt3.ggpht.com/a/AATXAJw3aT6Zvm7MFUarM7REn6Jb5Gtm0ZsqXtG-mQ=s48-c-k-c0xffffffff-no-rj-mo', user_time: '6일전', user_comment_good_count: '1', user_comment: '<div class="style-scope ytd-expander" id="content"><yt-formatted-string class="style-scope ytd-comment-renderer" disable-upgrade="" hidden="" id="voted-option" slot="content"></yt-formatted-string><yt-formatted-string class="style-scope ytd-comment-renderer" id="content-text" slot="content" split-lines=""><span class="style-scope yt-formatted-string" dir="auto">노래넘 좋아요!</span><span class="style-scope yt-formatted-string" dir="auto"></span><span class="style-scope yt-formatted-string" dir="auto">다음에도 좋은 노래해주세요</span><span class="style-scope yt-formatted-string" dir="auto"></span><span class="style-scope yt-formatted-string" dir="auto">그럼 끄적!</span></yt-formatted-string></div>'},
        {user_channel: '/channel/UC9iwwCfDUuwHymkbQ3PU_Sw', user_text: '무갓.', user_image: 'https://yt3.ggpht.com/a/AATXAJzrXolB1M2rb9HEMmc2ulFu8MJcYU4dus3l=s48-c-k-c0xffffffff-no-rj-mo', user_time: '1개월전(수정됨)', user_comment_good_count: '1', user_comment: '<div class="style-scope ytd-expander" id="content"><yt-formatted-string class="style-scope ytd-comment-renderer" disable-upgrade="" hidden="" id="voted-option" slot="content"></yt-formatted-string><yt-formatted-string class="style-scope ytd-comment-renderer" id="content-text" slot="content" split-lines="">공부할때 들었습니다&gt;&lt; 공부할때 쭉 이노래 들을거 같네요! 감사합니다// ⭐</yt-formatted-string></div>'},
        {user_channel: '/channel/UC0EOx6d1fcSGbkSSCpq3_yw', user_text: '신서아', user_image: 'https://yt3.ggpht.com/a/AATXAJzVAnTjJ9HlrCA1PiiAQA7puGhR54Mr3pvdRg=s48-c-k-c0xffffffff-no-rj-mo', user_time: '1일전', user_comment_good_count: '0', user_comment: '<div class="style-scope ytd-expander" id="content"><yt-formatted-string class="style-scope ytd-comment-renderer" disable-upgrade="" hidden="" id="voted-option" slot="content"></yt-formatted-string><yt-formatted-string class="style-scope ytd-comment-renderer" id="content-text" slot="content" split-lines="">와앙앙</yt-formatted-string></div>'},
        {user_channel: '/channel/UCYj0R_KLHLk71g1iPWZbnoQ', user_text: 'nfia06', user_image: 'https://yt3.ggpht.com/a/AATXAJwllMv4n1jSYThtr02ZNog8dY2tq_e-3n7RrA=s48-c-k-c0xffffffff-no-rj-mo', user_time: '1개월전', user_comment_good_count: '0', user_comment: '<div class="style-scope ytd-expander" id="content"><yt-formatted-string class="style-scope ytd-comment-renderer" disable-upgrade="" hidden="" id="voted-option" slot="content"></yt-formatted-string><yt-formatted-string class="style-scope ytd-comment-renderer" id="content-text" slot="content" split-lines="">덕분에 공부에 집중이 잘되는 것 같아요! 좋은 영상만들어주셔서 감사합니다!!</yt-formatted-string></div>'},
        {user_channel: '/channel/UCbRa9fXfvbJiQjTxbIdEn-g', user_text: '도토리', user_image: 'https://yt3.ggpht.com/a/AATXAJzcd5iJjYPq5RxQ-KLaDSN5zkPfD2l5OPr5yw=s48-c-k-c0xffffffff-no-rj-mo', user_time: '1개월전', user_comment_good_count: '0', user_comment: '<div class="style-scope ytd-expander" id="content"><yt-formatted-string class="style-scope ytd-comment-renderer" disable-upgrade="" hidden="" id="voted-option" slot="content"></yt-formatted-string><yt-formatted-string class="style-scope ytd-comment-renderer" id="content-text" slot="content" split-lines=""><span class="style-scope yt-formatted-string" dir="auto">홀롤로롤로우</span><span class="style-scope yt-formatted-string" dir="auto"></span><span class="style-scope yt-formatted-string" dir="auto">너무 좋.다</span><span class="style-scope yt-formatted-string" dir="auto"></span><span class="style-scope yt-formatted-string" dir="auto">진시임이야아</span></yt-formatted-string></div>'}
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
p {
  font-size: 20px;
}
</style>
