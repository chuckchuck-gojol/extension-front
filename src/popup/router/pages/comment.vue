<template>
    <div class="row">
        <div class="fixed">
            <a :href="full_user_channel">
                <img :src="user_image" class="rounded-circle" @error="imgUrlAlt"/>
            </a>
        </div>
        <div class="col">
            <h6>{{user_text}} <span class="text-secondary">{{user_time}}</span></h6>
            <h6 v-html="user_comment"/>
            <br/>
        </div>
    </div>
</template>

<script>
    import imageFile from '../../../icons/default.png';
    export default {
        props: ['user_channel', 'user_text', 'user_image', 'user_time', 'user_comment_good_count', 'user_comment'],
        methods: {
            imgUrlAlt(event) {
                event.target.e = imageFile
            }
        },
        data() {
            return {
                full_user_channel: "https://www.youtube.com/" + this.user_channel,
            };
        },
        created() {
          if(this.user_image == null){
              this.user_image = imageFile;
          }
        },
        mounted() {
            console.log(this.user_channel)
        }
    };
</script>

<style lang="scss" scoped>
    p {
        font-size: 20px;
    }
    div.row /deep/ .emoji{
        width: 1.3em;
    }
</style>
