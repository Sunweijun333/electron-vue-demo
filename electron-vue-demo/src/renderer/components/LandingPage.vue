<template>
  <div id="wrapper">
    <div class="search">
      <a-input-search default-value="李白" placeholder="请输入相关作者" enter-button @search="onSearch" />
    </div>
    <!-- <a href="javascript:Play(7717,'http://so.gushiwen.cn/search.aspx?value=%E6%9D%8E%E7%99%BD')"><img id="speakerimg7717" src="https://song.gushiwen.cn/siteimg/speak-erOk.png" alt="" width="19" height="19"></a> -->
    <!-- <button class="toolpinglun" @click="testSound"></button> -->
    <!-- <audio style=" cursor:pointer;outline:none; float:left; margin-left:20px; width:450px;" src="https://song.gushiwen.cn/song/jiangweiwei/ee16df5673bc.mp3" controls="controls" autoplay="" controlslist="nodownload"></audio> -->
    <div class="cont" v-html="content">
        {{content}}
    </div>

  </div>
</template>


<script>

  // import {Play} from './utils'
  // console.log(Play)
  // Play()

  import cheerio from 'cheerio'

  export default {
    name: 'landing-page',
    data: function() {
        return {
          content:"",
        }
    },
    methods: {

      testSound: function() {
        // console.log(document.getElementById('toolPlay7722'))
        Play(7722,'http://so.gushiwen.cn/search.aspx?value=%E6%9D%8E%E7%99%BD')
      },

      onSearch: function(input) {
        // if(input == "") {
        //   return
        // }
        console.log(input)
        this.$http.get(`https://so.gushiwen.cn/search.aspx?value=${input}`).then((res) => {
          // this.content = res;
          
          const $ = cheerio.load(res.data);
          $('.yizhu').remove();
          // toolPlay7722

          // console.log($.html('#toolPlay7722'))
          // console.log(typeof(res.data))
          
          // console.log($.html('.sons'))
          this.content = $.html('.sons')

          // console.log(this.content)
        }).catch((err)=>{
          console.log(err)
        })
        // console.log(this.con)
      }
    },
    mounted() {
      const s = document.createElement('script');
      s.type = 'text/JavaScript';
      s.src = 'D:\\Electron\\electron-vue\\electron-vue-demo\\electron-vue-demo\\src\\renderer\\components\\utils.js';
      document.body.appendChild(s);
    },
  }
</script>

<style>

.search{margin-top: 40px; padding-left: 40px; padding-right: 40px; width: 50%;}
.sons{ height:auto; clear:both; background-color:#F0EFE2; overflow:hidden; margin-top:20px; border:1px solid #d7d5bc;-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px;}
.sons .cont{ height:auto; clear:both; margin-top:15px; font-size:14px; margin-left:20px; margin-right:20px; line-height:200%; overflow:hidden; padding-left: 25%;}
.sons .tool{ height:32px; clear:both; margin-top:20px; margin-left:20px; margin-right:20px; margin-bottom:3px;}
.sons .tool .shoucang{ height:30px; float:left; width:auto;}
.sons .tool .shoucang img{cursor:pointer;}
.sons .tool .toolpinglun{ height:30px; float:left; width:auto; margin-left:20px;}
.sons .tool .time{ height:30px; float:left; width:auto; color:#999999;}
.sons .tool .jiucuo{height:30px; float:right; width:auto;}
.sons .tool .jiucuo a{ float:right; height:18px; line-height:19px; width:34px; border:1px solid #C5C5C5; color:#aeaeae; text-align:center; font-size:12px;-moz-border-radius:2px;-webkit-border-radius:2px;border-radius:2px;}
.sons .tool .good{ height:30px; float:right; width:auto;}
.sons .tool .good img{ float:left; margin-top:4px;}
.sons .tool .good span{ float:left; color:#999999; margin-top:5px;}


/* #toolPlay7722{width: 120%;} */


</style>
