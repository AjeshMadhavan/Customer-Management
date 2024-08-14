import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import ButtonComponent from "../components/ButtonComponent.vue";

describe("test with button component", () => {
  it("renders button component with primary variant", () => {
    const Button = shallowMount(ButtonComponent, {
      propsData: {
        variant: "primary",
        text: "Add Contact",
        icon: "mdi-plus",
      },
    });

    expect(Button.props("variant")).toMatch("primary");
    expect(Button.classes()).toContain("primary");
    expect(Button.text()).toMatch("Add Contact");
    expect(Button.props("icon")).toMatch("mdi-plus");
  });

  it("renders button with outline variant", () => {
    const Button = shallowMount(ButtonComponent, {
      propsData: {
        variant: "outlined",
        text: "Details",
      },
    });

    expect(Button.props("variant")).toMatch("outlined");
    expect(Button.text()).toMatch("Details");
  });

  it("renders button with icon variant", () => {
    const Button = shallowMount(ButtonComponent, {
      propsData: {
        variant: "icon",
        icon: "mdi-magnify",
      },
    });

    expect(Button.find(".icon").exists()).toBeTruthy();
    expect(Button.props("icon")).toMatch("mdi-magnify");
  });
});