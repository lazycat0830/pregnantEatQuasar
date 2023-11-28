<template>
  <div class="q-pa-md">
    <q-table
      flat
      bordered
      title="所有食材"
      :rows="rows"
      :columns="columns"
      color="primary"
      row-key="name"
    >
      <template v-slot:top-right>
        <div class="q-gutter-xs">
          <q-btn
            color="primary"
            icon-right="archive"
            label="生成csv"
            no-caps
            @click="exportTable"
          />
        </div>
      </template>
      <template #body-cell-action>
        <td class="row justify-center"><q-btn>刪除</q-btn></td>
      </template>
    </q-table>
  </div>
</template>

<script setup>
import { exportFile, useQuasar } from "quasar";
import { ref } from "vue";

const $q = useQuasar();
const columns = ref([
  {
    name: "name",
    required: true,
    label: "食材",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "calories",
    align: "center",
    label: "數量",
    field: "calories",
    sortable: true,
  },
  { name: "fat", label: "蛋白質(克)", field: "fat", sortable: true },
  { name: "carbs", label: "脂肪(克)", field: "carbs" },
  { name: "protein", label: "醣類(克)", field: "protein" },
  { name: "sodium", label: "熱量(大卡)", field: "sodium" },
  { name: "action", align: "center", label: "操作", field: "action" },
]);

const rows = ref([
  {
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: "14%",
    iron: "1%",
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: "8%",
    iron: "1%",
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: "6%",
    iron: "7%",
  },
]);

function wrapCsvValue(val, formatFn, row) {
  let formatted = formatFn !== void 0 ? formatFn(val, row) : val;

  formatted =
    formatted === void 0 || formatted === null ? "" : String(formatted);

  formatted = formatted.split('"').join('""');
  /**
   * Excel accepts \n and \r in strings, but some other CSV parsers do not
   * Uncomment the next two lines to escape new lines
   */
  // .split('\n').join('\\n')
  // .split('\r').join('\\r')

  return `"${formatted}"`;
}

const exportTable = () => {
  // naive encoding to csv format
  const content = [columns.value.map((col) => wrapCsvValue(col.label))]
    .concat(
      rows.value.map((row) =>
        columns.value
          .map((col) =>
            wrapCsvValue(
              typeof col.field === "function"
                ? col.field(row)
                : row[col.field === void 0 ? col.name : col.field],
              col.format,
              row
            )
          )
          .join(",")
      )
    )
    .join("\r\n");

  const status = exportFile("table-export.csv", content, "text/csv");

  if (status !== true) {
    $q.notify({
      message: "Browser denied file download...",
      color: "negative",
      icon: "warning",
    });
  }
};
</script>
