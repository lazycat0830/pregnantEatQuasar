<template>
  <div
    v-for="Data in DataList"
    :key="Data"
    style="width: 100%"
    class="row justify-center"
  >
    <q-card
      class="my-card"
      flat
      bordered
      style="
        width: 350px;
        border: 1px #000 solid;
        border-radius: 20px;
        margin: 10px 0px;
      "
    >
      <div
        style="
          max-width: 200px;
          max-height: 200px;
          width: 100%;
          margin: 0px auto;
        "
        class="row justify-center"
      >
        <img
          style="width: 100%; object-fit: cover; height: 100%"
          :src="Data.url"
        />
      </div>

      <q-card-section style="padding-bottom: 0px">
        <div class="text-overline text-orange-9 row justify-between">
          <div class="text-h5 q-mt-sm q-mb-xs">{{ Data.Title }}</div>
          <div>
            <q-btn
              flat
              round
              color="primary"
              icon="share"
              @click="openShareDialog()"
            />
          </div>
        </div>
        <div class="text-caption text-grey">日期：{{ Data.Maker }}</div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          flat
          color="secondary"
          style="font-size: 18px"
          label="再次生成"
        />
      </q-card-actions>
    </q-card>
  </div>
</template>
<script setup>
import { ref } from "vue";

const DataList = ref([
  {
    Title: "番茄蛋拉麵",
    Maker: "2023/09/10 晚餐",
    url: "/public/images/food/4/_1ec64a2f-2fe3-4c33-90f5-3ef5003b55c2.jpg",
  },
  {
    Title: "香菇牛肉炒麵",
    Maker: "2023/09/10 午餐",
    url: "/public/images/food/3/_40671623-b8c1-4126-b162-cbdc06906ff0.jpg",
  },
  {
    Title: "便當",
    Maker: "2023/09/10 早餐",
    url: "/public/images/food/2/_87c00327-1aaf-4b9a-a8b7-efb016a1a24e.jpg",
  },
]);

const dialogVisible = ref(false);

const openShareDialog = async () => {
  if (navigator.share) {
    handleNavigatorShare();
  } else {
    handleNotSupportNavigatorShare();
  }
};
// 當瀏覽器支援 Web Share API 時
async function handleNavigatorShare() {
  try {
    await navigator.share(shareData);
    result.textContent = "感謝你的的分享";
  } catch (err) {
    // 使用者拒絕分享或發生錯誤
    const { name } = err;
    if (name === "AbortError") {
      result.textContent = "您已取消分享此訊息";
    } else {
      result.textContent = err;
      console.log("發生錯誤", err);
    }
  }
}

// 當瀏覽器不支援 Web Share API 時，點下去變成複製
function handleNotSupportNavigatorShare() {
  const contentToCopy = document.querySelector("#content-to-copy");
  contentToCopy.value = shareData.url;
  contentToCopy.setAttribute("type", "text"); // 不是 hidden 才能複製
  contentToCopy.select();

  try {
    const successful = document.execCommand("copy");
    const msg = successful ? "成功" : "失敗";
    alert(`${shareData.url} - 複製${msg}`);
  } catch (err) {
    alert("Oops, unable to copy");
  }

  /* unselect the range */
  contentToCopy.setAttribute("type", "hidden");
  window.getSelection().removeAllRanges();
}

const shareData = {
  url: "https://pjchender.blogspot.com", // 要分享的 URL
  title: "PJCHENder 那些沒告訴你的小細節", // 要分享的標題
  text: "好多眉眉角角啊", // 要分享的文字內容
};
</script>
<style>
.my-card {
  width: 100%;
  max-width: 300px;
}
</style>
