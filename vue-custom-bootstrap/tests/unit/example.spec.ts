import { shallowMount } from "@vue/test-utils";
import TextInput from "../components/TextInput.vue";

describe("TextInput.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(TextInput, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
