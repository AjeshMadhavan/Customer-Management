import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import ButtonComponent from "../components/ButtonComponent.vue";

describe("test with button component", () => {
  it("renders button component with primary variant", () => {
    const wrapper = shallowMount(ButtonComponent, {
      propsData: {
        variant: "primary",
        text: "Add Contact",
        icon: "mdi-plus",
      },
    });

    expect(wrapper.props("variant")).toMatch("primary");
    expect(wrapper.classes()).toContain("primary");
    expect(wrapper.text()).toMatch("Add Contact");
    expect(wrapper.props("icon")).toMatch("mdi-plus");
  });

  it("renders button with outline variant", () => {
    const wrapper = shallowMount(ButtonComponent, {
      propsData: {
        variant: "outlined",
        text: "Details",
      },
    });

    expect(wrapper.props("variant")).toMatch("outlined");
    expect(wrapper.find(".outlined").exists()).toBeTruthy();
    expect(wrapper.text()).toMatch("Details");
  });

  it("renders button with icon variant", () => {
    const wrapper = shallowMount(ButtonComponent, {
      propsData: {
        variant: "icon",
        icon: "mdi-magnify",
      },
    });

    expect(wrapper.find(".icon").exists()).toBeTruthy();
    expect(wrapper.props("icon")).toMatch("mdi-magnify");
  });
});