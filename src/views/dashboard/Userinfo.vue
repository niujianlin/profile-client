<template>
    <div>
        <main>
            <section>
              <h2>关于我</h2>
              <p>在这里写一段简短的自我介绍。</p>
            </section>
            <section>
                <n-descriptions label-placement="top" title="描述">
                  <n-descriptions-item>
                    <template #label>
                      姓名
                    </template>
                    {{ userInfo.name }}
                  </n-descriptions-item>
                  <n-descriptions-item label="性别">
                    {{ userInfo.gender }}
                  </n-descriptions-item>
                  <n-descriptions-item label="爱好">
                    {{ userInfo.hobby }}
                  </n-descriptions-item>
                  <n-descriptions-item label="作品" :span="2">
                    {{ userInfo.work }}<br>
                    作品2
                  </n-descriptions-item>
                  <n-descriptions-item label="签名">
                    {{ userInfo.signature }}
                  </n-descriptions-item>
                </n-descriptions>
            </section>
            <section>
              <h2>我的作品</h2>
              <ul>
                <li><a href="#">作品1</a></li>
                <li><a href="#">作品2</a></li>
                <li><a href="#">作品3</a></li>
              </ul>
            </section>
            <section>
              <h2>联系我</h2>
              <li>我的邮箱</li>
            </section>
        </main>
    </div>
</template>

<script setup>
import { AdminStore } from '../../stores/AdminStore'
import { ref, reactive, inject, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const axios = inject("axios")

const adminStore = AdminStore()

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

const id = adminStore.id
const loadUserInfo = async () => {
    console.log("id=",id)
    let res = await axios.get(`/userinfo/detail?id=${id}`)
    console.log("res", res)
    Object.assign(userInfo, res.data.userinfo[0]) // 使用Object.assign直接将获取的数据赋值给userInfo
    console.log("userInfo=",userInfo)
    
}

</script>

<style lang="scss" scoped>

</style>