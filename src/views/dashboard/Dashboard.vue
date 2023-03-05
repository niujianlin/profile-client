<template>
  <n-space vertical>
    
    <header>
		  <h1>管理员网站</h1>
		  <nav>
		  	<ul>
		  		<li><a @click="toHome()">我的网页</a></li>
		  		<li><a href="#/login">退出登录</a></li>
		  	</ul>
		  </nav>
	  </header>
    
    <main class="container" >
      <n-layout has-sider>
		    <aside class="sidebar" >
          <n-layout-sider
          bordered
          :collapsed-width="64"
          :width="240"
          
          show-trigger
          >
            <h3>个人信息</h3>
		      	<ul>
              <div v-for="(menu) in selfmenus" :key="menu.name" @click="toSelfPage(menu)">
                {{ menu.name }}
              </div>
		      		<!-- <li><a href="#">查看个人信息</a></li>
		      		<li><a href="#">编辑个人信息</a></li> -->
		      	</ul>
            <h3>博客信息</h3>
		      	<ul>
              <div v-for="(menu) in articlemenus" :key="menu.name" @click="toArticlefPage(menu)">
                {{ menu.name }}
              </div>
		      		<!-- <li><a href="#">查看博客信息</a></li>
		      		<li><a href="#">编辑文章信息</a></li>
		      		<li><a href="#">编辑标签信息</a></li> -->
		      	</ul>
        </n-layout-sider>
		    </aside>
        <!-- <n-layout style="max-height: 320px" /> -->
      </n-layout>
		  <section class="main-content">
		  	<!-- <h2>主要内容区域</h2>
		  	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet tortor quis massa fermentum venenatis in eu nisi. Donec vel erat id nunc venenatis pharetra. Maecenas sodales ipsum vel tellus hendrerit, vel scelerisque justo ultricies. Integer id magna vitae felis tempor euismod. Quisque auctor ullamcorper elit et aliquet. Integer luctus odio at suscipit convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum feugiat erat vel ipsum pulvinar congue. Vestibulum id urna nec nibh faucibus bibendum. Aenean cursus risus sit amet diam pharetra vehicula. Donec consectetur risus non risus bibendum, non rhoncus quam laoreet.</p> -->
          <router-view></router-view>
      </section>
	  </main>
      
      <n-layout-footer  bordered>
        备案信息：xxxxxx
      </n-layout-footer>
  </n-space>
</template>

<script setup>
import { AdminStore } from '../../stores/AdminStore'
import { ref, reactive, inject, h } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import { NIcon } from "naive-ui";
// import {
//   BookOutline as BookIcon,
//   PersonOutline as PersonIcon,
//   WineOutline as WineIcon
// } from "@vicons/ionicons5";

const router = useRouter()
const route = useRoute()

const message = inject("message")
const axios = inject("axios")

const adminStore = AdminStore()
const home = adminStore.id
// const homeurl = "#/home?id=03213"

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

//菜单
let selfmenus = [
    { name: "查看个人信息", href: "/dashboard/userinfo" },
    { name: "编辑个人信息", href: "/dashboard/editinfo" },
];
let articlemenus = [
    { name: "查看文章", href: "/dashboard/article" },
    { name: "文章管理", href: "/dashboard/article" },
    { name: "分类管理", href: "/dashboard/category" },

];

const menuOptions = [
  {
    label: "个人信息",
    key: "hear-the-wind-sing",
    herf: "/dashboard/userinfo"
    // icon: renderIcon(BookIcon)
  },
  {
    label: "信息编辑",
    key: "pinball-1973",
    // icon: renderIcon(BookIcon),
    // disabled: true,
    children: [
      {
        label: "本人信息",
        key: "person"
      },
      {
        label: "修改密码",
        key: "pd"
      }
    ]
  },
  {
    label: "博客管理",
    key: "article",
    // icon: renderIcon(BookIcon),
    children: [
      {
        type: "group",
        label: "人物",
        key: "people",
        children: [
          {
            label: "标签管理",
            key: "narrator",
            // icon: renderIcon(PersonIcon)
          },
          {
            label: "文章管理",
            key: "sheep-man",
            // icon: renderIcon(PersonIcon)
          }
        ]
      },
      
    ]
  }
];

const toSelfPage = (menu) => {
  router.push(menu.href)
}

const toArticlefPage = (menu)=> {

}

const toHome = () => {
  router.push({ path:"/home", query: { "userId": home } })
}

// //路由跳转
// const toPage = (menu) => {
//     if (menu.href == 'logout') {
//         router.push("/login")
//     } else {
//         router.push(menu.href)
//     }
// }


</script>

<style lang="scss" scoped>
	/* 头部导航栏样式 */
	header {
	  background-color: #726e6e;
	  color: #fff;
	  padding: 10px;
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	}
	
	nav ul {
	  list-style: none;
	  margin: 0;
	  padding: 0;
	  display: flex;
	}
	
	nav li {
	  margin-right: 10px;
	}
	
	nav a {
	  // color: #fff;
	  text-decoration: none;
	  padding: 10px;
	  display: block;
	}
	
	nav a:hover {
	  background-color: #555;
	}
	aside ul {
		// color: #fff;
		text-decoration: none;
		margin-top: 20px;
    div {
        cursor: pointer;

        &:hover {
            color: #fd760e;
        }
    }
	}
  
	
	/* 页面主体部分样式 */
	.container {
	  display: flex;
	  height: 100vh;
	  overflow: hidden;
	}
	
	// .sidebar {
	  // background-color: #cfcece;
	  // color: #fff;
	  // width: 200px;
	  // flex-shrink: 0;
	  // transition: width 0.3s ease-in-out;
	// }
	
	// .sidebar:hover {
	//   width: 250px;
	// }
  // .n-layout n-layout--static-positioned{
  //   width: 240px;
  // }
	
	.main-content {
	  flex: 1;
	  overflow-y: auto;
	  padding: 20px;
	}
  .n-layout-footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    height: 40px;
  }
</style>