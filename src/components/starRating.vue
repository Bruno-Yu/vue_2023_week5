<template>

  <!-- <div id="rating-box" class="flex items-center gap-1">
      <font-awesome-icon v-for="i in 5" :key="i" class="w-4 h-4 text-yellow-400" :icon="iconStyle"
        @="{ mouseover: changeColor, mouseout: resetColor }" />
      </div> -->
  <div class="star-rating">
    <label class="star-rating__star" v-for="(rating, index) in ratings" :key="index"
      :class="{ 'is-selected': ((value >= rating) && value != null), 'is-disabled': disabled }"
      v-on="{ click: set(rating), mouseover: starOver(rating), mouseout: starOut }">
      <input class="star-rating star-rating__checkbox" type="radio" :value="rating" :name="name" v-model="tempValue"
        :disabled="disabled" />★
    </label>
  </div>
  <!-- <div class="star-rating">
      <label class="star-rating__star" v-for="rating in ratings" 
        :class="{'is-selected': ((value >= rating) && value != null), 'is-disabled': disabled}" 
        v-on:click="set(rating)" v-on:mouseover="star_over(rating)" v-on:mouseout="star_out">
        <input class="star-rating star-rating__checkbox" type="radio" :value="rating" :name="name" v-model="tempValue"
          :disabled="disabled">★</label>
    </div> -->
</template>

<script>
import { ref, toRefs } from 'vue';

export default {
  props: {
    name: {
      type: String,
      default: '測試'
    },
    value: {
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const tempValue = ref(null);
    const ratings = ref([1, 2, 3, 4, 5]);

    const { value, disabled } = toRefs(props);

    const iconStyle = ref(['far', 'star']);

    function changeColor() {
      // icon.value = ['fa', 'star']
      iconStyle.value = ['fa', 'star']
    }
    function resetColor() {
      // icon.value = ['fa', 'star']
      iconStyle.value = ['far', 'star']
    }

    function starOver(index) {
      if (!disabled.value) {
        tempValue.value = value.value;
        emit('update:value', index);
        // value.value = index;
      }
    }

    function starOut() {
      // if (!disabled.value) {
      //   value.value = tempValue.value;
      // }
    }

    function set(payload) {
      if (!disabled.value) {
        tempValue.value = payload;
        emit('update:value', payload);
        // value.value = payload;
      }
    }

    return {
      tempValue,
      starOver,
      starOut,
      set,
      changeColor,
      iconStyle,
      resetColor,
      ratings
    }
  }
}

</script>

<style lang="scss" scoped>
%visually-hidden {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
}

.star-rating {

  &__star {
    display: inline-block;
    padding: 3px;
    vertical-align: middle;
    line-height: 1;
    font-size: 1.5em;
    color: #ABABAB;
    transition: color .2s ease-out;

    &:hover {
      cursor: pointer;
    }

    &.is-selected {
      color: #FFD700;
    }

    &.is-disabled:hover {
      cursor: default;
    }
  }

  &__checkbox {
    @extend %visually-hidden;
  }
}
</style>
