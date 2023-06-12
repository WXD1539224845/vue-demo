<template>
  <div class="loginbody">
    <div class="logindata">
      <div class="logintext">
        <h2 style="color: skyblue;">首页热点</h2>
      </div>

      <div class="formdata">
        <el-form ref="form" :model="form" :rules="rules">
          <el-form-item prop="acc">
            <el-input v-model="form.acc" clearable placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item prop="pwd">
            <el-input v-model="form.pwd" clearable placeholder="请输入密码" show-password></el-input>
          </el-form-item>
        </el-form>
      </div>

      <div class="butt">
        <div>

        </div>
        <el-button type="success" @click.native.prevent="managerLogin">管理员登录
        </el-button>
        <el-button type="success" @click.native.prevent="userLogin">用户登录
        </el-button>
      </div>

    </div>
  </div>
</template>

<script>
import Msg from "@/utils/msg/msg";
export default {
  name: 'HelloWorld',
  data() {
    return {
      form: {
        acc: '',
        pwd: ''
      },
      rules: {
        acc: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        pwd: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    //管理员登录
    managerLogin() {
      if(this.form.acc != 'wuzongbo' || this.form.pwd != 'wuzongbo'){
        Msg.fail('账号密码错误')
        return
      }
      this.$router.push('/home')
    },
    userLogin() {
      if(this.acc != 'wuzongbo' || this.pwd != 'wuzongbo'){
        Msg.fail('账号密码错误')
        return
      }
        this.$router.push('/firstVue')
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loginbody {
  width: 100%;
  height: 100%;
  min-width: 1000px;
  background-image: url("@/assets/home.png");
  background-size: 100% 100%;
  background-position: center center;
  overflow: auto;
  background-repeat: no-repeat;
  position: fixed;
  line-height: 100%;
  padding-top: 150px;
}

.logintext {
  margin-bottom: 20px;
  line-height: 50px;
  text-align: center;
  font-size: 30px;
  font-weight: bolder;
  color: white;
  text-shadow: 2px 2px 4px #000000;
}

.logindata {
  width: 400px;
  height: 300px;
  transform: translate(-50%);
  margin-left: 50%;
}

.tool {
  display: flex;
  justify-content: space-between;
  color: #606266;
}

.butt {
  margin-top: 10px;
  text-align: center;
  margin-left: -55px;
  width: 500px;
}

.shou {
  cursor: pointer;
  color: #606266;
}

/*ui*/
/* /deep/ .el-form-item__label {
  font-weight: bolder;
  font-size: 15px;
  text-align: left;
}

/deep/ .el-button {
  width: 100%;
  margin-bottom: 10px;

} */
</style>
