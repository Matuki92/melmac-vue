<template>
  <div>

    <div
      v-for="field in configModel"
      :key="field.name"
      :class="[`${field.inline ? 'w-1/2 inline-block' : 'w-full'} mt-6`]"
    >
      <app-text-input
        :placeholder="field.placeholder"
        :type="field.type"
        v-model="field.val"
      ></app-text-input>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
// components
import TextInputVue from '../common/TextInput.vue';
// utils
import contactFormConfig from '../../utils/contactFormConfig';

export default {
  components: {
    'app-text-input': TextInputVue,
  },
  setup() {

    const configModel = contactFormConfig
      .map((field) => ({ ...field, val: ref('') }));

    return {
      configModel,
    };
  },
}
</script>
