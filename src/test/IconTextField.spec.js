import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import IconTextField from "../components/IconTextField.vue";

describe("test with text component", () => {
  it("renders with props", () => {
    const iconTextFieldComponent = shallowMount(IconTextField, {
      propsData: {
        label: "position",
        text: "CTO",
        prependIcon: "mdi-phone",
      },
    });

    expect(iconTextFieldComponent.props("label")).toMatch("position");
    expect(iconTextFieldComponent.props("text")).toMatch("CTO");
    expect(iconTextFieldComponent.props("prependIcon")).toMatch("mdi-phone");
  });

  it("renders text and style", () => {
    const iconTextFieldComponent = shallowMount(IconTextField, {
      propsData: {
        text: "CTO",
        textStyle: "text-orange",
      },
    });

    expect(iconTextFieldComponent.find(".text-orange").text()).toMatch("CTO");
    expect(iconTextFieldComponent.find(".text-orange").exists()).toBeTruthy();
  });

  it("renders icon", () => {
    const iconTextFieldComponent = shallowMount(IconTextField, {
      propsData: {
        prependIcon: "mdi-magnify",
      },
    });

    expect(iconTextFieldComponent.find("v-icon").exists()).toBeTruthy();
  });
});