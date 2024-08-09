import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import TextComponent from "../components/TextComponent.vue";

describe("test with text component", () => {
  it("renders with props", () => {
    const wrapper = shallowMount(TextComponent, {
      propsData: {
        text: "position",
        linkText: "CTO",
        prependIcon: "mdi-phone",
      },
    });

    expect(wrapper.props("text")).toMatch("position");
    expect(wrapper.props("linkText")).toMatch("CTO");
    expect(wrapper.props("prependIcon")).toMatch("mdi-phone");
  });

  it("renders text and style", () => {
    const wrapper = shallowMount(TextComponent, {
      propsData: {
        linkText: "CTO",
        linkTextStyle: "text-orange",
      },
    });

    expect(wrapper.find(".text-orange").text()).toMatch("CTO");
    expect(wrapper.find(".text-orange").exists()).toBeTruthy();
  });
});