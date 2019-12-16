import BootstrapVue from "bootstrap-vue";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import TextInput from "../TextInput.vue";

// required in order to make bootstrap-vue work
const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe("TextInput.vue", () => {
  it("renders props that are passed", () => {
    const label = "new message";
    const wrapper = shallowMount(TextInput, {
      localVue,
      propsData: { label }
    });
    expect(wrapper.html()).toContain(label);
  });
});
