<template>
  <div>
    <h2>Member Page</h2>
    <search-bar-component :search-text="organization" :on-search="onSearch" />
    <!-- <input type="text" :value="organization" @input="onchange($event)"/> -->
    <button @click="loadMembers">Load</button>
    <table :class="$style.table">
      <thead>
        <member-head/>
      </thead>
      <tbody>
        <template v-for="member in members">
          <member-row :key="member.id" :member="member"/>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MemberHead from "./Head.vue";
import MemberRow from "./Row.vue";
import { Member } from "../../model/member";
import { getAllMembers } from "../../api/memberAPI";
import { SearchBarComponent } from "../searchBar";

export default Vue.extend({
  name: "MemberTable",
  components: { MemberHead, MemberRow, SearchBarComponent },
  data: () => ({
    organization: 'Lemoncode' as string,
    members: [] as Member[]
  }),
  methods: {
    loadMembers: function() {
      getAllMembers(this.organization).then(members => {
        this.members = members;
      });
    },
    onSearch(value: string) {
      this.organization = value;
    },
    // onChange: function(event) {
    //   console.log(event);
    // }
  }
});
</script>

<style module>
.table {
  border-collapse: collapse;
  width: 100%;
}

.table tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
