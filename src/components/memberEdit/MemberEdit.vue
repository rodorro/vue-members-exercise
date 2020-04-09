<template>
  <v-container>
      <v-card>
        <v-card-title primary-title>
          <v-btn flat icon :to="`/`">
            <v-icon>close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-layout row>
            <v-text-field
              label="Id"
              :value="member.id"
              disabled
            />
          </v-layout>
          <v-layout row>
              <v-text-field
                label="Login"
                :value="member.login"
              />
          </v-layout>
          <v-layout row>
              <v-img
                
                :src="member.avatar_url"
              />
          </v-layout>
          <v-layout row>
              <v-text-field
                label="Avatar"
                :value="member.avatar_url"
              />
          </v-layout>
        </v-card-text>
      </v-card>    
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { getMember } from "../../api/memberAPI";
import { createDefaultMember } from "../../model/member";

export default Vue.extend({
  name: "MemberEdit",
  props: { id: String },
  data() {
    return {
      member: createDefaultMember(),
    }
  },
  beforeMount() {
    getMember(this.id).then(member => this.member = member);
    // fetchRecipeById(id)
    //   .then(recipe => {
    //     this.recipe = mapRecipeModelToVm(recipe);
    //   })
    //   .catch(error => console.log(error));
  },
  // components: { MemberHead, MemberRow, SearchBarComponent },
  // data: () => ({
  //   organization: 'Lemoncode' as string,
  //   members: [] as Member[]
  // }),
  // methods: {
  //   loadMembers() {
  //     getAllMembers(this.organization).then(members => {
  //       this.members = members;
  //     });
  //   },
  //   onSearch(value: string) {
  //     this.organization = value;
  //   }
  // }
});
</script>
