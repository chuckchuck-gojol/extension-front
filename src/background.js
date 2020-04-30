import store from './store';
global.browser = require('webextension-polyfill');

alert(`Hello ${store.getters.foo}!`);

whale.sidebarAction.getPage(function(e){
    alert(e);
});

// whale.sidebarAction.show();
