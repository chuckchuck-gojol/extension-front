<template>
  <div id="app">
    <p>Hello world! {{ title }}</p>
    <div v-for="(item, index) in items">
      <comment/>
      <p>{{ item }}</p>
    </div>
  </div>
</template>

<script>
export default {
  created() { // 처음에 클릭했을 떄 index.vue 생성
    whale.sidebarAction.getPage((result)=>{
      alert('Value currently is ' + result);
      this.page = result;
    });
  },

  // methods: {
  //   save() {
  //     chrome.storage.sync.set({key: this.data}, () => {
  //       console.log('Value is set to ' + this.data);
  //     });
  //   }
  // }
  //
  data() {
    return {
      title: 'minjeong',
      items: [1,2,3],
      page: ''
    };
  },
};
</script>

<style lang="scss" scoped>
p {
  font-size: 20px;
}
</style>
