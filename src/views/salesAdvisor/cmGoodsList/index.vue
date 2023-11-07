<!--
 * @Author: ydz
 * @Date: 2023-11-06 11:14:40
 * @Description: 商品列表
-->
<template>
  <div class="cmGoodsList">
    <BasicTable @register="registerTable">
      <template #form-custom> custom-slot </template>
      <template #headerTop>
        <alert type="info" show-icon>
          <template #message>
            <template v-if="checkedKeys.length > 0">
              <span>已选中{{ checkedKeys.length }}条记录(可跨页)</span>
              <a-button type="link" @click="checkedKeys = []" size="small">清空</a-button>
            </template>
            <template v-else>
              <span>未选中任何项目</span>
            </template>
          </template>
        </alert>
      </template>
      <template #toolbar>
        <a-button type="primary" @click="getFormValues">获取表单数据</a-button>
      </template>
    </BasicTable>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';

  import { demoListApi } from '/@/api/demo/table';
  import { getBasicColumns, getFormConfig } from '../../demo/table/tableData';
  import { Alert } from 'ant-design-vue';

  const checkedKeys = ref<Array<string | number>>([]);
  const [registerTable, { getForm }] = useTable({
    title: '开启搜索区域',
    api: demoListApi,
    columns: getBasicColumns(),
    useSearchForm: true,
    formConfig: getFormConfig(),
    showTableSetting: true,
    tableSetting: { fullScreen: true },
    showIndexColumn: false,
    rowKey: 'id',
    rowSelection: {
      type: 'checkbox',
      selectedRowKeys: checkedKeys,
      onSelect: onSelect,
      onSelectAll: onSelectAll,
    },
  });

  function getFormValues() {
    console.log(getForm().getFieldsValue());
  }

  function onSelect(record, selected) {
    if (selected) {
      checkedKeys.value = [...checkedKeys.value, record.id];
    } else {
      checkedKeys.value = checkedKeys.value.filter((id) => id !== record.id);
    }

    console.log(checkedKeys.value);
  }
  function onSelectAll(selected, selectedRows, changeRows) {
    const changeIds = changeRows.map((item) => item.id);
    if (selected) {
      checkedKeys.value = [...checkedKeys.value, ...changeIds];
    } else {
      checkedKeys.value = checkedKeys.value.filter((id) => {
        return !changeIds.includes(id);
      });
    }

    console.log(checkedKeys.value);
  }
</script>

<style scoped lang="less">
  .cmGoodsList {
    .headBox {
      background-color: #fff;
    }
  }
</style>
