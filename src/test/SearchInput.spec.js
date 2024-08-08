import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import SearchInput from "../components/SearchInput.vue";

describe("test with searh input", () => {
  it("renders placeholder text", () => {
    const wrapper = shallowMount(SearchInput, {
      propsData: {
        placeholderText: "Search",
      },
    });

    expect(wrapper.attributes("placeholder")).toMatch("Search");
  });

  it("renders with prepend icon", () => {
    const wrapper = shallowMount(SearchInput, {
      propsData: {
        prependIcon: "mdi-magnify",
      },
    });

    expect(wrapper.props("prependIcon")).toMatch("mdi-magnify");
  });

  it("test with emit", async () => {
    const wrapper = shallowMount(SearchInput);

    await wrapper.vm.$emit("onChangeValue", "hello");

    expect(wrapper.emitted().onChangeValue[0][0]).toMatch("hello");
  });
});