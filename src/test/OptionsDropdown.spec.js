import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import OptionsDropdown from "../components/OptionsDropdown.vue";

describe("test with options dropdown", () => {
  it("renders text", () => {
    const wrapper = shallowMount(OptionsDropdown, {
      propsData: {
        text: "Export Data",
      },
    });

    expect(wrapper.find(".uppercase").text()).toMatch("Export Data");
  });

  it("renders icon", () => {
    const wrapper = shallowMount(OptionsDropdown, {
      propsData: {
        appendIcon: "mdi-menu-up",
      },
    });

    expect(wrapper.find("v-icon").text()).toMatch("mdi-menu-up");
  });

  it("renders button style", () => {
    const wrapper = shallowMount(OptionsDropdown, {
      propsData: {
        optionButtonStyle: "bg-blue",
      },
    });

    expect(wrapper.find("button").classes("bg-blue")).toBeTruthy();
  });

  it("renders image src", () => {
    const imageSrc = "https://images.unsplash.com/photo-1714891203404";

    const wrapper = shallowMount(OptionsDropdown, {
      propsData: {
        imageUrl: imageSrc,
      },
    });

    expect(wrapper.find(".profile-image").attributes("src")).toMatch(imageSrc);
  });

  it("renders slot", () => {
    const wrapper = shallowMount(OptionsDropdown, {
      slots: {
        optionsSlot: "<div>Hello World</div>",
      },
    });

    expect(wrapper.vm.$slots.optionsSlot[0].children[0].text).toMatch(
      "Hello World"
    );
  });
});