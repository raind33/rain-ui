<template>
  <button
    class="r-button"
    @click="$emit('click')"
    :class="{[`icon-${iconPosition}`]: true}"
  >
    <r-icon
      class="icon"
      v-if="icon && !loading"
      :name="icon"
    ></r-icon>
    <r-icon
      class="loading icon"
      v-if="loading"
      name="loading"
    ></r-icon>
    <div class="content">
      <slot />
    </div>
  </button>
</template>
<script>
import Icon from '../../icon'
export default {
  name: 'RButton',
  components: {
    'r-icon': Icon
  },
  // props: ['icon', 'iconPosition']
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator (value) {
        return value === 'left' || value === 'right'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../styles/_var.scss';
.r-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  color: #606266;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    color: $--color-primary;
    border-color: $border-color-hover;
  }
  &:active {
    background-color: $button-active-bg;
  }
  &:focus {
    outline: none;
  }
  > .r-button-content {
    order: 2;
  }
  > .icon {
    order: 1;
    margin-right: 0.1em;
  }

  &.icon-right {
    > .r-button-content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.1em;
    }
  }
  .loading {
    @include spin;
  }
}
</style>
