<template>
    <div id="app">:
        <p>{{user_channel}}</p>
        <p>{{user_text}}</p>
        <p>{{user_image}}</p>
        <p>{{user_time}}</p>
        <p>{{user_comment_good_count}}</p>
        <div v-html="user_comment"></div>
    </div>
</template>

<script>
    export default {
        props: ['user_channel','user_text', 'user_image', 'user_time', 'user_comment_good_count', 'user_comment'],
        data() {
            return {
            };
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
</style>
