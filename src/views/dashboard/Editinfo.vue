<template>
    <n-tabs  justify-content="start" type="line">
        <n-tab-pane name="update" tab="修改">
            <n-form>
              <n-form-item label="姓名">
                  <n-input v-model:value="userInfo.name" />
              </n-form-item>
              <n-form-item label="性别">
                  <n-select v-model:value="userInfo.gender"  />
              </n-form-item>
              <n-form-item label="爱好">
                  <n-input v-model:value="userInfo.hobby"  />
              </n-form-item>
              <n-form-item label="作品">
                  <n-input v-model:value="userInfo.work"  />
              </n-form-item>
              <n-form-item label="">
                  <n-button @click="update">提交</n-button>
              </n-form-item>
            </n-form>
        </n-tab-pane>
    </n-tabs>
    
</template>

<script setup>
import { AdminStore } from '../../stores/AdminStore'
import { ref, reactive, inject, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const message = inject("message")
const dialog = inject("dialog")
const axios = inject("axios")

const adminStore = AdminStore()

// 修改用户信息
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


const update = async () => {
    let res = await axios.put("/userinfo/_token/update", userInfo)
    if (res.data.code == 200) {
        message.info(res.data.msg)
        loadUserInfo()
        // tabValue.value = "list"
    } else {
        message.error(res.data.msg)
    }
}


</script>

<style lang="scss" scoped>

</style>