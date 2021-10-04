import Vuetify from 'vuetify';
import { shallowMount} from '@vue/test-utils';
import MyCounter from '@/components/my-counter.vue';

describe('my-counter.vue', () => {

  let vuetify :any; // https://vuetifyjs.com/en/getting-started/unit-testing/#spec-tests

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(MyCounter, { vuetify });
    expect(wrapper.text()).toContain('Click me:');
    expect(wrapper.text()).toContain('Count:0');
  });

  it.skip('Check clicking button', () => {
    const wrapper = shallowMount(MyCounter, { vuetify });
  });
});
