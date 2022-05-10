import { h, defineComponent } from 'vue';
import { Icon as IconifyIcon, addIcon } from '@iconify/vue/dist/offline';

// element-plus icon
import Check from '@iconify-icons/ep/check';
import Setting from '@iconify-icons/ep/setting';
import Menu from '@iconify-icons/ep/menu';
import Close from '@iconify-icons/ep/close';

addIcon('check', Check);
addIcon('setting', Setting);
addIcon('menu', Menu);
addIcon('close', Close);

// Iconify Icon在Vue里离线使用
export default defineComponent({
  name: 'IconifyIcon',
  components: { IconifyIcon },
  props: {
    icon: {
      type: String,
      default: '',
    },
  },
  render() {
    const attrs = this.$attrs;
    return h(
      IconifyIcon,
      {
        icon: `${this.icon}`,
        ...attrs,
      },
      {
        default: () => [],
      }
    );
  },
});