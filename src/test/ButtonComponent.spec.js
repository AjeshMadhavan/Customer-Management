import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import ButtonComponent from "../components/ButtonComponent.vue";

describe("button with primary variant", () => {
  it("renders with primary variant", () => {
    const wrapper = shallowMount(ButtonComponent, {
      propsData: {
        variant: "primary",
      },
    });

    expect(wrapper.props("variant")).toMatch("primary");
  });

  it("button contains the right class", () => {
    const wrapper = shallowMount(ButtonComponent, {
      propsData: {
        variant: "primary",
      },
    });

    expect(wrapper.classes()).toContain("primary");
  });

  it("renders text", () => {
    const wrapper = shallowMount(ButtonComponent, {
      propsData: {
        text: "Add Contact",
      },
    });

    expect(wrapper.text()).toMatch("Add Contact");
  });

  it("renders icon", () => {
    const wrapper = shallowMount(ButtonComponent, {
      propsData: {
        icon: "mdi-plus",
      },
    });

    expect(wrapper.props("icon")).toMatch("mdi-plus");
  });
});

describe("button with outline variant", () => {
  it("renders button with outline variant", () => {
    const wrapper = shallowMount(ButtonComponent, {
      propsData: {
        variant: "outlined",
      },
    });

    expect(wrapper.find(".outlined").exists()).toBeTruthy();
  });

  it("renders text", () => {
    const wrapper = shallowMount(ButtonComponent, {
      propsData: {
        text: "Details",
      },
    });

    expect(wrapper.props("text")).toMatch("Details");
  });
});

describe("button with icon variant", () => {
  it("renders button with icon variant", () => {
    const wrapper = shallowMount(ButtonComponent, {
      propsData: {
        variant: "icon",
      },
    });

    expect(wrapper.find(".icon").exists()).toBeTruthy();
  });

  it("renders icon", () => {
    const wrapper = shallowMount(ButtonComponent, {
      propsData: {
        icon: "mdi-magnify",
      },
    });

    expect(wrapper.props("icon")).toMatch("mdi-magnify");
  });
});