<template>
  <q-file
    v-model="qFiles"
    outlined
    bottom-slots
    counter
    standout
    append
    :clearable="props.multiple"
    :multiple="props.multiple"
    :name="props.name"
    :max-file-size="props.maxSize * 1024 * 1024"
    :max-total-size="(props.maxTotalSize - props.totalSize) * 1024 * 1024"
    :label="`檔案格式可為: ` + fileExtName"
    :counter-label="counterLabelFn"
    :filter="checkFile"
    :accept="accept()"
    @rejected="onRejected"
    @update:model-value="stateUpdate"
  >
    <template #prepend>
      <q-icon name="attach_file" />
    </template>
    <template #after>
      <slot name="after"></slot>
    </template>
    <template #hint>
      <div class="cxl-hiddenText">
        <span class="text-red cxl-pr-10px">
          每個檔案限制: {{ computedFileRestrictSize }}
        </span>
        <span
          v-if="props.maxTotalSize && props.multiple"
          class="text-red cxl-pr-10px"
        >
          總檔案限制: {{ props.maxTotalSize }} MB
        </span>
        <a v-if="props.example" @click="testDownload">{{
          props.example.text
        }}</a>
        <span v-if="props.valiText" class="text-red">{{ props.valiText }}</span>
      </div>
    </template>
    <q-tooltip
      v-if="props.tooltip"
      class="bg-grey text-caption"
      :offset="[8, 8]"
    >
      {{ props.tooltip }}
    </q-tooltip>
  </q-file>
</template>

<script setup>
import { ref, computed, inject } from "vue";

const qFiles = ref(null);
const props = defineProps({
  name: { type: String, default: "files" },
  fileType: {
    type: String,
    default: "",
  },
  ext: {
    type: Array,
    default: () => [],
  },
  maxSize: {
    type: Number,
    default: 3,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  tooltip: {
    type: String,
    default: "",
  },
  example: {
    type: Object,
    default: () => {},
  },
  valiText: {
    type: String,
    default: "",
  },
  maxTotalSize: {
    type: Number,
    default: 3,
  },
  totalSize: {
    type: Number,
    default: 0,
  },
});

const fileExtName = computed(() => {
  if (props.fileType === "picture") {
    return "圖檔";
  }
  if (Array.isArray(props.ext) && props.ext.length) {
    return props.ext.join(", ");
  }
  return "不限";
});

const bindPublicPath = inject("bindPublicPath");
/**
 *下載範本
 */
const testDownload = () => {
  const link = document.createElement("a");
  link.href = bindPublicPath(props.example.href);
  link.download = props.example.name;
  link.click();
  URL.revokeObjectURL(link.href);
};

/**
 *
 * @param root0
 * @param root0.totalSize
 * @param root0.filesNumber
 */
const counterLabelFn = ({ totalSize, filesNumber }) => {
  return `${filesNumber} 個檔案，共 ${totalSize}`;
};
/**
 *
 * @param files
 */
const checkFile = (files) => {
  return files.filter((file) => {
    const fileName = file.name;
    if (props.fileType === "picture") {
      return /\.(gif|jpg|jpeg|tiff|png)$/i.test(fileName);
    }

    if (props.ext?.length > 0) {
      const fileExt = fileName.substring(
        fileName.lastIndexOf(".") + 1,
        fileName.length
      );
      let check = false;
      props.ext.forEach((ext) => {
        if (ext.toLowerCase() == fileExt.toLowerCase()) {
          check = true;
        }
      });
      return check;
    }
    return true;
  });
};

/**
 *
 */
const accept = () => {
  if (props.fileType === "picture") {
    return "image/*";
  }

  if (Array.isArray(props.ext) && props.ext.length) {
    let rtnValue = "";
    props.ext.forEach((value, index) => {
      if (index != 0) {
        rtnValue += ",";
      }
      rtnValue += "." + value;
    });
    return rtnValue;
  }
  return "";
};

const computedFileRestrictSize = computed(() => {
  return props.maxSize + " MB";
});
const $alert = inject("$alert");
/**
 *
 * @param rejectedEntries
 */
const onRejected = (rejectedEntries) => {
  let errMsg = "";
  rejectedEntries.forEach((elem) => {
    errMsg += ", " + elem.file.name + " ";
    switch (elem.failedPropValidation) {
      case "max-file-size":
        errMsg += "超出 " + computedFileRestrictSize.value;
        break;
      case "duplicate":
        errMsg += "已存在相同檔案";
        break;
      case "max-total-size":
        errMsg += "超出總檔案限制";
        break;
      default:
        errMsg += "檔案格式錯誤";
        break;
    }
  });
  $alert.error(errMsg.substring(2), "請檢查違反的檔案");
  // console.log(rejectedEntries); //FIXME
};

const emit = defineEmits(["update-files"]);
/**
 *
 * @param files
 */
const stateUpdate = (files) => {
  if (props.multiple) {
    qFiles.value = null;
  }
  const rtnObj = {
    name: props.name,
    files,
  };
  emit("update-files", rtnObj);
};
</script>
