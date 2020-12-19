<template>
  <table class="table" :class="tableClass">
    <thead>
    <slot name="columns">
      <th v-for="column in columns" :key="column">{{column}}</th>
    </slot>
    </thead>
    <tbody>
    <tr v-for="(item, index) in data" :key="index">
      <slot :row="item">
        <td v-for="(column, index) in columns"
            :key="index">
          <button id="deleteButton" class="btn btn-outline-danger m-0" @click="$emit('deleteLine', item)" v-if="column === 'delete'">Delete</button>
          <button id="updateButton" class="btn btn-outline-success m-0" @click="$emit('updateLine', item)" v-else-if="column === 'update'">Edit</button>
          {{itemValue(item, column)}}
        </td>
      </slot>
    </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: 'paper-table',
  props: {
    columns: Array,
    data: Array,
    type: {
      type: String, // striped | hover
      default: "striped"
    },
    title: {
      type: String,
      default: ""
    },
    subTitle: {
      type: String,
      default: ""
    }
  },
  computed: {
    tableClass() {
      return `table-${this.type}`;
    }
  },
  methods: {
    hasValue(item, column) {
      return item[column.toLowerCase()] !== "undefined";
    },
    itemValue(item, column) {
      if(column === "category_id")
        return this.$store.state.categoriesObject[item[column]].name;
      return item[column.toLowerCase()];
    }
  }
};
</script>
<style>
</style>
