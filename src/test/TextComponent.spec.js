import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import TextComponent from "../components/TextComponent.vue";

describe("test with text component", () => {
  it("renders with props", () => {
    const textComponent = shallowMount(TextComponent, {
      propsData: {
        text: "position",
        linkText: "CTO",
        prependIcon: "mdi-phone",
      },
    });

    expect(textComponent.props("text")).toMatch("position");
    expect(textComponent.props("linkText")).toMatch("CTO");
    expect(textComponent.props("prependIcon")).toMatch("mdi-phone");
  });

  it("renders text and style", () => {
    const textComponent = shallowMount(TextComponent, {
      propsData: {
        linkText: "CTO",
        linkTextStyle: "text-orange",
      },
    });

    expect(textComponent.find(".text-orange").text()).toMatch("CTO");
    expect(textComponent.find(".text-orange").exists()).toBeTruthy();
  });

  it("renders icon", () => {
    const textComponent = shallowMount(TextComponent, {
      propsData: {
        prependIcon: "mdi-magnify",
      },
    });

    expect(textComponent.find("v-icon").exists()).toBeTruthy();
  });
});