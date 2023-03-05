<template>
    <div class="wrapper" id="wrapper">
    <header>
      <div class="banner row" id="banner">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 noPadd slides-container" style="height:100%">
        </div>
        <div class="bannerText container">
          <h1>我叫codytang(唐泽雄)</h1>
          <p>Web前端开发工程师，毕业于中山大学，2017.03.07~至今在腾讯IEG游戏平台部工作。</p>
          <a href="#aboutme" class="mbnt">关于我</a>
        </div>
      </div>
      <div class="menu">
        <div class="navbar-wrapper">
          <div class="container">
            <div class="navwrapper">
              <div class="navbar navbar-inverse navbar-static-top">
                <div class="container">
                  <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">导航</a>
                  </div>
                  <div class="navbar-collapse collapse">
                    <ul class="nav navbar-nav nav-justified">
                      <li class="first menuItem homeLink active">
                        <a href="#wrapper">首页</a>
                      </li>
                      <li class="menuItem">
                        <a href="#aboutme">关于我</a>
                      </li>
                      <li class="menuItem">
                        <a href="#technical">技能</a>
                      </li>
                      <li class="menuItem">
                        <a href="#exprience">经历</a>
                      </li>
                      <li class="menuItem">
                        <a href="#reffernces">项目</a>
                      </li>
                      <li class="menuItem">
                        <a href="#contact">联系我</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section class="aboutme" id="aboutme">
      <div class="container">
        <div class="row">
          <div class=" col-xs-12 col-sm-12 col-md-12 col-lg-12 aboutCont">
            <div class="heading clearfix">
              <h2>关于我</h2>
            </div>
            <div id="description">
              <!-- <p>
                我是来自深圳的前端开发工程师，2014年的中山大学软件工程本科毕业生，2014年4月份开始第一份前端开发工作，至今已经有两年多前端开发经验。
              </p>
              <p>
                有着坚实的前端开发基础，并且一直保持对新技术的学习热情。熟练使用HTML5、CSS3以及JavaScript(jQuery,Zepto)；对流行的前端开发框架，比如Bootstrap3和Foundation5都有实际开发项目；能熟练使用前端开发工具，比如Gulp.js、Seajs、WebPack和Less等等；学习了AngularJS和React，但更加喜欢轻巧、高性能、可组件化的MVVM框架Vue.js，并在实际的开发项目中使用；学习了Node.js(Express)、ECMAScript6，MongoDB等技术，希望在往后的开发项目中得到实践提升。这里是 <a href="https://github.com/cody1991/learn">自己的前端开发记录</a> 。后面也有新的前端开发实习生加入团队，锻炼了一定的管理能力。
              </p>
              <p>
                乐于分享，长期活跃在GitHub上，有不少开源的项目。有 <a href="http://cody1991.github.io/index.html">个人的技术博客</a> ，使用Jekyll搭建，分享一些前端开发经验和工具。 在前端开发社区发布过教程，比如 <a href="https://segmentfault.com/a/1190000006776243">一个简单的 vue.js 实践教程</a> ，希望自己的学习经验能带给别人帮助。 英语过了六级，对英文书籍和网站的阅读无太多障碍，翻译了 <a href="https://leanpub.com/vuejs">《The Majesty Of Vue.js》</a> 一书。
              </p>
              <p>爱读书，爱听歌，爱游泳，爱跑步，爱爬山。代码不是生活的全部。</p> -->
              <p>{{ userInfo.signature }}</p>
            </div>
            <a href="http://cody1991.github.io/index.html" class="btnDownload">前往我的技术博客</a>
            <a href="https://github.com/cody1991" class="btnDownload">前往我的GitHub</a>
          </div>
        </div>
      </div>
    </section>
    <section class="technical" id="technical">
      <div class="container">
        <div class="heading">
          <h2 id="technical_title">爱好</h2>
          <p>{{ userInfo.hobby }}</p>
        </div>
        
      </div>
    </section>
    <section class="exprience" id="exprience">
      <div class="container">
        <div class="heading">
          <h2>经历</h2>
          <p>第一家的时候自己还是一个职场新人，主要是在实际项目中不断学习，提升自己的前端开发技能和经验。第二家的时候自己作为公司唯一的一个前端开发工程师，负责公司所有前端开发任务，其后有个前端开发实习生加入团队，在一边认真有质量地完成公司任务以为，带领实习生一起进行学习。</p>
        </div>
        <div class="row workDetails">
          <div class="col-xs-12 col-sm-3 col-md-2 col-lg-2">
            <div class="workYear">
              <span class="prevY">03,2017</span>
              <span class="afterY">至今</span>
            </div>
          </div>

          <div class="col-xs-12 col-sm-9 col-md-10 col-lg-10 rightArea">
            <div class="arrowpart"></div>
            <div class="exCon">
              <h4>深圳市暖柚科技有限公司</h4>
              <h5>前端开发工程师</h5>
              <p>这段时间是自己前端开发技能得到不少提高的阶段。自己是公司的第一个前端，公司的官网、日常的运营页面、管理后台的页面优化、APP内的webview页面、手机端的活动页面、视频直播页面、游戏等等都是自己一个人来完成。工作非常饱和，但是在闲暇时候抽空学了很多新的框架和库，对AngularJS和React有了一定的了解，而选择了轻巧、高性能、可组件化的Vue.js作为主攻的MVVM框架，开始涉及WebPack，ECMAScript6，Node.js(Express)等的学习，熟练使用npm、Bower、Gulp.js等工具,并且在自己的一个GitHub项目 <a href="https://github.com/cody1991/learn">learn</a> 中可以看到我长期保持着对最新技术的学习热度。</p>
            </div>
          </div>
        </div>

      </div>
    </section>
    <section class="reffernces" id="reffernces">
      <div class="container">
        <div class="heading">
          <h2>项目</h2>
          <p>下面包括了自己的开源项目，公司项目，推荐的网站等。</p>
        </div>
        <div class="row waterfall" data-col-min-width="300">
          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 refBox">
            <div class="refBoxcon">
              <p>{{ userInfo.work }}</p>
              <h3>
                            <a href="http://def.cloudhouse.fun">个人博客</a>
                            </h3>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 refBox">
            <div class="refBoxcon">
              <p>
                一直保持着前端开发技术的学习和记录笔记，在这个项目中可以看到诸如Vue.js、Vue v2、Vuex、AngularJS、Node.js、Express、ECMAScript 6、HTML 5 Canvas、Flex 布局、PHP、WebPack和Gulp.js等等的学习记录。
              </p>
              <h3>
                            <a href="https://github.com/cody1991/learn">个人前端开发学习记录</a>
                            </h3>
            </div>
          </div>
          
          
        </div>
      </div>
    </section>
    <section class="contact" id="contact">
      <div class="container topCon">
        <div class="heading">
          <h2>联系我</h2>
        </div>
      </div>
    </section>
    <section class="contactDetails">
      <div class="container">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h4>联系方式</h4>
          <p> <i class="icon icon-envelope"></i><a>codytang@tencent.com</a></p>
          <p> <i class="icon icon-link"></i><a href="http://cody1991.github.io/index.html">http://cody1991.github.io/</a>
          </p>
        </div>
      </div>
    </section>
    <section class="footer" id="footer">
      <div class="container">
        <ul>
          <li>备案号:XXXX
          </li>
        </ul>
        <span class="totop">11
                </span>
      </div>
    </section>
  </div>
</template>

<script setup>

import { AdminStore } from '../stores/AdminStore'
import { ref, reactive, inject, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const axios = inject("axios")
const adminStore = AdminStore()

// const id = adminStore.id
// const id = this.props.match.params.userId
let route = useRoute()
const id = route.query.userId
// console.log("id=",id)

// 用户信息
// 使用reactive()创建响应式对象来保存用户信息
const userInfo = reactive({
  name: '',
  gender: '',
  hobby: '',
  work: '',
  signature: ''
})

onMounted(async() =>{
    await loadUserInfo()
})
const loadUserInfo = async () => {
    console.log("id=",id)
    let res = await axios.get(`/userinfo/detail?id=${id}`)
    console.log("res", res)
    Object.assign(userInfo, res.data.userinfo[0]) // 使用Object.assign直接将获取的数据赋值给userInfo
    console.log("userInfo=",userInfo)
    
}

</script>

<style lang="scss" scoped>
@font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: url("../fonts/cJZKeOuBrn4kERxqtaUH3fY6323mHUZFJMgTvxaG2iE.eot");
    // src: local('Open Sans'), local('OpenSans'), url("../font/cJZKeOuBrn4kERxqtaUH3fY6323mHUZFJMgTvxaG2iE.eot") format('embedded-opentype'), url("../font/cJZKeOuBrn4kERxqtaUH3T8E0i7KZn-EPnyo3HZu7kw.woff") format('woff');
}

* {
    padding: 0;
    margin: 0;
}

body {
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    position: relative;
    width: 100%;
    height: 100%;
    overflow: scroll;
    overflow-x: hidden;
}

a {
    text-decoration: none;
    color: #000;
    outline: none;
    &:hover {
        text-decoration: none;
    }
}


/*----------------------------------------------------
 2. Document Setup
------------------------------------------------------*/

.wrapper {
    width: 100%;
}

.noPadd {
    padding: 0px !important;
}

.container .row {
    margin: 0px;
}

p {
    font-family: 'Open Sans', sans-serif;
    font-size: 15px;
    line-height: 27px;
    font-weight: 400;
    padding-bottom: 38px;
    margin: 0px;
}

h1 {
    font-family: 'Open Sans', sans-serif;
    font-size: 48px;
    line-height: 57px;
    font-weight: 700;
    margin: 0px;
    padding-bottom: 8px;
}

h2 {
    font-family: 'Open Sans', sans-serif;
    font-size: 36px;
    line-height: 38px;
    padding-bottom: 0px;
    font-weight: 400;
    text-transform: uppercase;
    margin: 0px;
    border-bottom: #ef7674 6px solid;
    padding-bottom: 9px;
    display: inline-block;
}

h3 {
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    line-height: 21px;
    padding-bottom: 3px;
    font-weight: 400;
    margin: 0px;
}

h4 {
    font-family: 'Open Sans', sans-serif;
    font-size: 19px;
    line-height: 24px;
    padding-bottom: 6px;
    font-weight: 600;
    margin: 0px;
    color: #5b4c5c;
}

h5 {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 6px;
    font-weight: 400;
    margin: 0px;
}

.heading {
    text-align: center;
    padding-bottom: 45px;
}

.container {
    max-width: 1080px;
    /*padding:0;*/
}


/*----------------------------------------------------
 3. Header Part
------------------------------------------------------*/

header {
    position: relative;
}

.banner {
    overflow: hidden;
    margin: 0 auto !important;
    background: #CACACA;
    display: none;
}

.bannerText {
    position: absolute;
    left: 0;
    right: 0;
    top: 35%;
    text-align: center;
    padding: 30px 0 30px;
    max-width: 960px;
    z-index: 2;
    animation-name: textBox;
    animation-duration: 5s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-play-state: running;
    /* Safari and Chrome: */
    -webkit-animation-name: textBox;
    -webkit-animation-duration: 5s;
    -webkit-animation-timing-function: linear;
    -webkit-animation-delay: 0s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-direction: alternate;
    -webkit-animation-play-state: running;
}

.bannerText p {
    font-size: 18px;
    color: #fff;
    padding-bottom: 42px;
}

.mbnt {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    display: inline-block;
    line-height: 40px;
    color: #fff;
    font-size: 14px;
    background-color: #EF7674;
    text-transform: uppercase;
    padding: 0 29px;
    margin: 0 10px;
    text-decoration: none;
    outline: none;
}

.mbnt:focus,
.mbnt:hover,
.mbnt:active {
    color: #eaeaea;
    text-decoration: none;
    outline: none;
}

.bannerText h1 {
    /*text-transform: uppercase;*/
}


/*------------------------------------
    3.1 Slide show background control
--------------------------------------*/


/*---------------------------------------------------------------------------------
 4. Background slider CSS style
-------------------------------------------------------------------------------*/


/* Grid wrapper sizes */


/* Shadow style */


/*----------------------------------------------------
 5. Menu Style
------------------------------------------------------*/

.menu {
    margin-top: 0px;
    position: static;
    left: 0px;
    right: 0px;
}

.navwrapper .container {
    padding: 0;
    width: auto;
}

.navbar-header {
    display: none;
}

.nav > li > a {
    display: inline-block;
}

.navbar-nav > li {
    float: none;
    display: inline;
}

.navbar-nav {
    margin: 0 auto;
    text-align: center;
    float: none;
}

.navbar-toggle {
    margin-top: 8px;
    background-color: #4c404d;
}

.navbar-inverse .navbar-toggle:hover,
.navbar-inverse .navbar-toggle:focus {}

.navbar-brand {
    margin-top: 4px;
}

.nav .menuItem a {
    font-size: 19px;
}


/* Special class on .container surrounding .navbar, used for positioning it into place. */

.navbar-wrapper {
    margin-top: 0px;
    position: relative;
    z-index: 15;
    background: #ffffff;
}

.navbar-wrapper .container {
    padding: 0px;
}

.navbar-collapse {
    padding: 0;
}


.navbar.navbar-inverse.navbar-static-top {
    margin: 0px auto;
    background: #ffffff;
    color: #4c404d;
    border: none;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    text-transform: uppercase;
}

.navbar.navbar-inverse.navbar-static-top a.navbar-brand {
    line-height: 43px;
}

.navbar.navbar-inverse.navbar-static-top a {
    color: #4c404d;
    padding: 0 26px;
    line-height: 140px;
    text-align: center;
    font-weight: 800;
    // transition-duration: 0.2s;
    // -webkit-transition-duration: 0.2s;
}

.navbar.navbar-inverse.navbar-static-top .nav li.first {
    padding-left: 0;
}

.navbar.navbar-inverse.navbar-static-top .nav li {
    padding: 0 18px 0 18px;
}

.navbar.navbar-inverse.navbar-static-top .nav li a {
    padding: 0;
    letter-spacing: -1px;
}

.navbar.navbar-inverse.navbar-static-top a:hover {
    background: #ffffff;
    color: #ef7674;
}

.navbar-inverse .navbar-nav>.active>a,
.navbar-inverse .navbar-nav>.active>a:focus {
    background: #ffffff;
    /*color:#c3c8d6;*/
    color: #ef7674;
}

.navbar-inverse .navbar-nav > li > a:hover,
.navbar-inverse .navbar-nav > li > a:focus {
    background: #ffffff;
    /*color:#c3c8d6;*/
    color: #ef7674;
}

.navbar-inverse .navbar-nav>.active>a:hover {
    /*background:#1b1f29;*/
    /*color:#fff;*/
    background: #ffffff;
    color: #ef7674;
}


/* Since positioning the image, we need to help out the caption */


/* Declare heights because of positioning of img element */


/*----------------------------------------------------
 6. About me Style
------------------------------------------------------*/

.aboutme {
    background: #f3f2f3;
    color: #897f8a;
    position: relative;
}

.aboutme .container {
    padding-top: 140px;
    padding-bottom: 90px;
}

.aboutCont {
    // padding-bottom: 78px;
    // padding-left: 48px;
}

#description {
    // height: 250px;
    overflow: hidden;
    position: relative;
    // padding-right: 50px;
    margin-bottom: 60px;
    text-align: justify;
}

#description p {
    padding-bottom: 10px;
}

.btnDownload {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    font-size: 18px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    border: 3px solid #5b4c5c;
    padding: 10px 10px;
    display: inline-block;
    color: #5b4c5c;
    transition-duration: 0.2s;
    -webkit-transition-duration: 0.2s;
    margin-bottom: 10px;
}

.btnDownload:hover {
    background: #5b4c5c;
    color: #ffffff;
    text-decoration: none;
}

.aboutme .heading {
    text-align: center;
    padding-top: 78px;
    padding-bottom: 26px;
}

.aboutme .heading h2 {
    color: #5b4c5c;
    display: inline-block;
}


/*----------------------------------------------------
 7. Technical Skills Style
------------------------------------------------------*/

.technical {
    /*background:#eeeeee;
    color:#474d5d;*/
}

.technical .container {
    padding-top: 140px;
    padding-bottom: 90px;
}

.technical .heading p {
    padding-bottom: 41px;
    max-width: 660px;
    text-align: justify;
    display: block;
    margin: 0 auto;
}

.technical p {
    color: #897f8a;
}

.technical h2 {
    color: #5b4c5c;
    margin-bottom: 49px;
}

.technical .skillsArea {
    padding: 0px;
}

.technical .skills {
    margin: 0 auto;
    margin-bottom: 23px;
    text-align: center;
    padding: 0px;
    float: none;
}

.technical .skills h4 {
    font-weight: 700;
    // text-transform: uppercase;
    font-size: 17px;
    line-height: 27px;
    padding-bottom: 11px;
    color: #5b4c5c;
}




/*----------------------------------------------------
 8. Work Experience Style
------------------------------------------------------*/

.exprience {
    background: #f8f7f8;
}

.exprience .container {
    padding-top: 140px;
    padding-bottom: 90px;
}

.exprience h2 {
    color: #5b4c5c;
    margin-bottom: 41px;
}

.exprience p {
    color: #84868d;
    /*font-size:13px;*/
    line-height: 18px;
}

.exprience .heading p {
    padding-bottom: 54px;
    max-width: 660px;
    text-align: justify;
    display: block;
    margin: 0 auto;
    color: #897f8a;
    line-height: 27px;
}

.exprience h4 {
    font-weight: 700;
}

.workDetails .rightArea {
    border-left: dashed 1px #897f8a;
    padding-bottom: 47px;
}

.workDetails:last-child .rightArea {
    padding-bottom: 0px;
}

.workDetails:last-child .rightArea .exCon p:last-child {
    padding-bottom: 0;
}

.workYear {
    font-size: 17px;
    color: #fff;
    line-height: 40px;
}

.workYear span {
    display: block;
    font-size: 18pxpx;
    padding: 0 21px;
    white-space: nowrap;
    float: right;
    margin-bottom: 2px;
    margin-right: 28px;
    font-weight: bold;
}

.prevY {
    background-color: #ef7674;
}

.afterY {
    background-color: #483c49;
}

.arrowpart {
    margin-left: -26px;
    margin-top: 32px;
    float: left;
    width: 22px;
    height: 22px;
    // background: url(../images/arrow-left.png) no-repeat 0 0 #f8f7f8;
}

.exCon {
    width: auto;
    padding: 0 47px 6px 70px;
    margin-left: 15px;
    text-align: left;
}

.exCon p {
    color: #897f8a;
    line-height: 27px;
}

.exCon h4 {
    color: #5b4c5c;
    padding-bottom: 1px;
    margin-top: -8px;
}

.exCon h5 {
    color: #5b4c5c;
    padding-bottom: 11px;
}


/*----------------------------------------------------
 9. Education Style
------------------------------------------------------*/


/*----------------------------------------------------
 10. Protfolio Style
------------------------------------------------------*/


/*----------------------------------------------------
 14. Reffernces Style
------------------------------------------------------*/

.reffernces {}

.reffernces .container {
    padding-top: 140px;
    padding-bottom: 90px;
}

.reffernces h2 {
    color: #5b4c5c;
    margin-bottom: 49px;
}

.reffernces .heading p {
    padding-bottom: 41px;
    max-width: 660px;
    text-align: center;
    display: block;
    margin: 0 auto;
}

.reffernces p {
    color: #897f8a
}

.refBox {
    margin-bottom: 18px;
}

.refBoxcon {
    background: #FFF;
    padding: 50px 34px 41px;
    border-bottom: #e6e6e6 5px solid;
}

.refBoxcon p {
    color: #897f8a;
    font-size: 15px;
    line-height: 27px;
    padding-bottom: 38px;
}

.refBoxcon h3 {
    text-align: right;
    color: #4c404d;
    font-size: 18px;
    font-weight: bold;
}

.refBoxcon h3 a {
    text-decoration: underline;
    color: #ef7674;
}

.refBox {
    padding: 0 10px;
}


/*----------------------------------------------------
 11. Get in tuch Style
------------------------------------------------------*/

.contact {
    background: #f8f7f8;
}

.contact .container {
    padding-top: 140px;
    padding-bottom: 90px;
}

.contact h2 {
    color: #5b4c5c;
    margin-bottom: 45px;
}

.topCon {
    padding-bottom: 0px !important;
}

.contactDetails {
    background: #f8f7f8;
}

.contactDetails .container {
    padding-top: 15px;
    padding-bottom: 30px;
    text-align: center;
}

.contactDetails h4 {
    font-weight: 600;
    text-transform: uppercase;
    padding-bottom: 15px;
}

.contactDetails p {
    color: #897f8a;
    font-size: 15px;
    line-height: 19px;
    padding-bottom: 14px;
}

.contactDetails p a {
    color: #897f8a;
}

.contactDetails p a:hover {
    color: #5b4c5c;
    text-decoration: none;
}

.contactDetails i {
    padding-right: 15px;
}


/*----------------------------------------------------
 12. Footer Style
------------------------------------------------------*/

.footer {
    background: #3b323c;
}

.footer .container {
    padding: 115px 0 125px;
    position: relative;
}

.footer ul {
    margin: 0 auto;
    text-align: center;
    list-style-type: none;
}

.footer ul li {
    display: inline-block;
    text-align: center;
    // background: #ffffff;
    color: #ffffff;
    line-height: 42px;
    margin: 0 6px;
    // width: 51px !important;
    // height: 51px !important;
    // -webkit-border-radius: 50%;
    // border-radius: 50%;
}

.footer ul li:hover {
    background: #282429;
}

.footer ul li:hover a {
    color: #fff;
}

.footer ul li a {
    color: #3b323c;
    width: 51px !important;
    height: 51px !important;
}

.footer ul li a i {
    line-height: 52px !important;
}

.totop {
    display: block;
    position: absolute;
    width: 42px;
    height: 42px;
    background-color: #302931;
    color: #817a82;
    line-height: 42px;
    bottom: 0;
    left: 50%;
    margin-left: -21px;
    cursor: pointer;
    text-align: center;
}


/*---------------------------------------------------------------------------------
 13. Responsive style
-------------------------------------------------------------------------------*/

@media screen and (min-width: 1200px) {
    .workYear {
        /*width:140px;
 height:140px;
 padding-top:50px;*/
    }
}

@media screen and (max-width: 999px) {
    .navbar.navbar-inverse.navbar-static-top .nav li {
        padding-left: 25px;
    }
    .navbar.navbar-inverse.navbar-static-top a {
        line-height: 140px;
    }
    .nav .menuItem a {
        font-size: 14px;
    }
}

@media screen and (max-width: 991px) {
    .navbar.navbar-inverse.navbar-static-top a {
        /* padding-left:12px;
 padding-right:12px;
 font-size:12px;*/
    }
    .bannerText {
        padding-left: 25px;
        padding-right: 25px;
    }
    .bannerText h1 {
        font-size: 65px;
        line-height: 71px;
    }
}

@media screen and (max-width: 810px) {
    body {
        min-height: 700px;
    }
    .navbar.navbar-inverse.navbar-static-top a {
        /* padding-left: 17px;*/
    }
}

@media screen and (max-width: 992px) {
    .aboutme {
        padding: 15px;
    }
}

@media screen and (min-width: 768px) {
    .aboutme {
        /*padding:15px;*/
    }
}

@media screen and (max-width: 768px) {
    .navbar-wrapper .container,
    .navwrapper .container {
        padding-right: 15px;
        padding-left: 15px;
    }
    .navbar.navbar-inverse.navbar-static-top a {
        line-height: 43px;
    }
}

@media screen and (max-width: 767px) {
    .navbar-header {
        display: block;
    }
    .workYear {
        margin: 0 auto 20px;
        overflow: hidden;
    }
    .workYear span {
        width: 100%;
        margin-right: 0;
    }
    .workDetails .rightArea {
        border-left: none;
    }
    .arrowpart {
        /* float:none;
 width:100%;
 height:40px;
 background:url(../images/arrow-top.png) no-repeat 50% 100%;*/
        background: none;
    }
    .exCon {
        margin-left: 0px;
        padding: 0;
    }
    ul.navbar-nav li a {
        display: block;
    }
}

@media screen and (max-width: 650px) {
    #wrapper {
        top: 200px !important;
    }
    .bannerText {
        top: 25%;
        padding-top: 15px;
        padding-bottom: 15px;
    }
    .bannerText h1 {
        font-size: 42px;
        line-height: 48px;
    }
}

@media screen and (max-width: 480px) {
    .navbar.navbar-inverse.navbar-static-top a {
        line-height: 17px;
        padding-top: 11px;
        padding-bottom: 11px;
    }
    .navbar.navbar-inverse.navbar-static-top a.navbar-brand {
        line-height: 22px;
    }
    .bannerText {
        top: 10%;
    }
    .bannerText h1 {
        font-size: 34px;
        line-height: 38px;
    }
    .bannerText p {
        font-size: 16px;
        padding-bottom: 32px;
    }
}



body,
p,
h1,
h2,
h3,
h4,
h5 {
    font-family: 'Microsoft YaHei', sans-serif;
}

a:hover {
    text-decoration: none;
}

</style>