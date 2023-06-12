<template>
  <div class="">会员等级管理页面</div>
  <div class="umsMemberlevel">
    <el-button type="warning" @click="toAdd">添加</el-button>
    <el-table :data="umsMemberlevels" style="width: 100%">
      <el-table-column fixed prop="id" label="#" width="50" />
      <el-table-column prop="name" label="会员等级名称" />
      <el-table-column prop="growthPoint" label="成长值" />
      <el-table-column prop="defaultStatus" label="默认等级" />
      <el-table-column prop="freeFreightPoint" label="免运费标准" />
      <el-table-column prop="commentGrowthPoint" label="每次评价获取的成长值" />
      <el-table-column prop="priviledgeFreeFreight" label="是否有免邮特权" />
      <el-table-column prop="priviledgeSignIn" label="是否有签到特权" />
      <el-table-column prop="priviledgeComment" label="是否有评论获奖励特权" />
      <el-table-column prop="priviledgePromotion" label="是否有专享活动特权" />
      <el-table-column prop="priviledgeMemberPrice" label="是否有会员价特权" />
      <el-table-column prop="priviledgeBirthday" label="是否有生日特权" />
      <el-table-column prop="note" label="备注" />
      <el-table-column fixed="right" label="操作" width="120">
        <template #default="scope">
          <el-button link type="warning" size="small" @click="toEdit(scope.row)"
            >编辑</el-button
          >
          <el-button link type="warning" size="small" @click="del(scope.row.id)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
  <el-dialog v-model="dialogFormVisible" title="会员等级编辑">
    <el-form :model="umsMemberlevel">
      <el-form-item label="id" :label-width="formLabelWidth">
        <el-input v-model="umsMemberlevel.id" autocomplete="off" />
      </el-form-item>
      <el-form-item label="会员等级名称" :label-width="formLabelWidth">
        <el-input v-model="umsMemberlevel.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="成长值" :label-width="formLabelWidth">
        <el-input v-model="umsMemberlevel.growthPoint" autocomplete="off" />
      </el-form-item>
      <el-form-item label="默认等级" :label-width="formLabelWidth">
        <el-input v-model="umsMemberlevel.defaultStatus" autocomplete="off" />
      </el-form-item>
      <el-form-item label="免运费标准" :label-width="formLabelWidth">
        <el-input v-model="umsMemberlevel.freeFreightPoint" autocomplete="off" />
      </el-form-item>
      <el-form-item label="每次评价获取的成长值" :label-width="formLabelWidth">
        <el-input v-model="umsMemberlevel.commentGrowthPoint" autocomplete="off" />
      </el-form-item>
      <el-form-item label="是否有免邮特权" :label-width="formLabelWidth">
        <el-input v-model="umsMemberlevel.priviledgeFreeFreight" autocomplete="off" />
      </el-form-item>
      <el-form-item label="是否有签到特权" :label-width="formLabelWidth">
        <el-input v-model="umsMemberlevel.priviledgeSignIn" autocomplete="off" />
      </el-form-item>
      <el-form-item label="是否有评论获奖励特权" :label-width="formLabelWidth">
        <el-input v-model="umsMemberlevel.priviledgeComment" autocomplete="off" />
      </el-form-item>
      <el-form-item label="是否有专享活动特权" :label-width="formLabelWidth">
        <el-input v-model="umsMemberlevel.priviledgePromotion" autocomplete="off" />
      </el-form-item>
      <el-form-item label="是否有会员价特权" :label-width="formLabelWidth">
        <el-input v-model="umsMemberlevel.priviledgeMemberPrice" autocomplete="off" />
      </el-form-item>
      <el-form-item label="是否有生日特权" :label-width="formLabelWidth">
        <el-input v-model="umsMemberlevel.priviledgeBirthday" autocomplete="off" />
      </el-form-item>
      <el-form-item label="备注" :label-width="formLabelWidth">
        <el-input v-model="umsMemberlevel.note" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="save"> 保存 </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script>
import { defineComponent } from "vue";
import { cloneDeep } from "lodash-es";
import { getumsMemberlevelsPage, umsMemberlevelDelId, umsMemberlevelAdd,getOne, umsMemberlevelEdit } from "../../http/umsmemberlevel";
export default defineComponent({
  props: ["id"],
  data() {
    return {
      dialogFormVisible: false,
      "code": 0,
      "data": {},
      "msg": "",
      "success": true,
      page: {
        total: 0,
        current: 0,
        size: 0
            },
      umsMemberlevel: {
        "commentGrowthPoint": 0,
        "defaultStatus": 0,
        "freeFreightPoint": 0,
        "growthPoint": 0,
        "id": 0,
        "name": "",
        "note": "",
        "priviledgeBirthday": 0,
        "priviledgeComment": 0,
        "priviledgeFreeFreight": 0,
        "priviledgeMemberPrice": 0,
        "priviledgePromotion": 0,
        "priviledgeSignIn": 0
        },
        formLabelWidth: 160,
      umsMemberlevels: [
        // {
        //   id: 1,
        //   name: "白银",
        //   growth_point: "10积分",
        //   default_tatus: "5积分",
        //   free_freight_point: "80￥",
        //   comment_growth_point: "2",
        //   priviledge_sign_in: "F",
        //   priviledge_free_freight: "F",
        //   priviledge_comment: "F",
        //   priviledge_promotion: "F",
        //   priviledge_member_price: "F",
        //   priviledge_birthday: "T",
        //   note: "恭喜您成为白银会员！(#^.^#)",
        // },
        // {
        //   id: 2,
        //   name: "黄金",
        //   growth_point: "20积分",
        //   default_tatus: "5积分",
        //   free_freight_point: "70￥",
        //   comment_growth_point: "2",
        //   priviledge_sign_in: "F",
        //   priviledge_free_freight: "F",
        //   priviledge_comment: "F",
        //   priviledge_promotion: "F",
        //   priviledge_member_price: "F",
        //   priviledge_birthday: "T",
        //   note: "恭喜您成为黄金会员！(#^.^#)",
        // },
        // {
        //   id: 3,
        //   name: "钻石",
        //   growth_point: "30积分",
        //   default_tatus: "5积分",
        //   free_freight_point: "60￥",
        //   comment_growth_point: "2",
        //   priviledge_sign_in: "T",
        //   priviledge_free_freight: "T",
        //   priviledge_comment: "T",
        //   priviledge_promotion: "T",
        //   priviledge_member_price: "T",
        //   priviledge_birthday: "T",
        //   note: "恭喜您成为钻石会员！(#^.^#)",
        // },
        // {
        //   id: 4,
        //   name: "黑金",
        //   growth_point: "40积分",
        //   default_tatus: "5积分",
        //   free_freight_point: "50￥",
        //   comment_growth_point: "2",
        //   priviledge_sign_in: "T",
        //   priviledge_free_freight: "T",
        //   priviledge_comment: "T",
        //   priviledge_promotion: "T",
        //   priviledge_member_price: "T",
        //   priviledge_birthday: "T",
        //   note: "恭喜您成为黑金会员！(#^.^#)",
        // },
      ],
    };
  },
  mounted() {
    this.getumsMemberlevelsPage(1);
  },
  methods: {
    toEdit(umsMemberlevel) {
      console.log(umsMemberlevel);
      this.dialogFormVisible = true;
      this.umsMemberlevel = cloneDeep(umsMemberlevel);
    },
    getumsMemberlevelsPage(current) {
      const data = {
        current: current,
        size: 2,
      };
      // umsMemberlevelPage(data)
      //   .then((res) => {
      //     console.log(res);
      //     const page = res.data.page;
      //     this.umsMemberlevels = page.records;
      //     this.page = page;
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    },
    currentchange(current) {
      // console.log(current);
      this.getumsMemberlevelsPage(current);
      this.page.current = current; //数据更新目前显示的页面
    },
    del(id) {
      //删除数据
      //模拟删除，服务器进行处理
      //要别人反悔机会
      // 如果只有一条数据，删除数据之后如何处理？
      //人机交互
      console.log(id);
      const params = {
        id: id,
      };
      umsMemberlevelDelId(params)
        .then((res) => {
          if (res.success) {
            this.getumsMemberlevelsPage(this.page.current);
          } else {
            console.log(res.msg);
            return false;
          }
        })
        .catch((err) => {});
    },
    toAdd() {
            //到添加的页面
            this.dialogFormVisible = true;
        },
    save() {
      const umsMemberlevel = this.umsMemberlevel;
      if (umsMemberlevel.id == 0) {
        umsMemberlevelAdd(umsMemberlevel)
          .then((res) => {
            if (res.success) {
              //刷新页面
              this.dialogFormVisible = false;
              this.getumsMemberlevelsPage(this.page.current);
              ElMessage(res.msg);
            } else {
              ElMessage(res.msg);
              return false;
            }
          })
          .catch((err) => {
            ElMessage("网络错误联系管理员");
          });
      } else {
        umsMemberlevelEdit(umsMemberlevel)
          .then((res) => {
            if (res.success) {
              //刷新页面
              this.dialogFormVisible = false;
              this.getumsMemberlevelsPage(this.page.current);
              ElMessage(res.msg);
            } else {
              ElMessage(res.msg);
              return false;
            }
          })
          .catch((err) => {
            ElMessage("网络错误联系管理员");
          });
      }
    },
  },
});
</script>
<style lang="scss" scoped></style>