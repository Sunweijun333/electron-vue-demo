import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

function Play(id, from) {
  if (document.getElementById('toolPlay' + id).style.display == "none") {
      var xmlhttp;
      if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
          xmlhttp = new XMLHttpRequest();
      }
      else {// code for IE6, IE5
          xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      }
      xmlhttp.onreadystatechange = function () {
          if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
              document.getElementById('toolPlay' + id).style.display = "block";
              document.getElementById('speakerimg' + id).src = "https://song.gushiwen.cn/siteimg/speak-erOk.png";
              document.getElementById("toolPlay" + id).innerHTML = xmlhttp.responseText;
          }
      }
      xmlhttp.open("GET", "/viewplay.aspx?id=" + id, false);
      xmlhttp.send();
  }
  else {
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById('toolPlay' + id).style.display = "none";
            document.getElementById('speakerimg' + id).src = "https://song.gushiwen.cn/siteimg/speak-er.png";
            document.getElementById("toolPlay" + id).innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", "/viewplay.aspx?id=0", false);
    xmlhttp.send();
  }
}

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
