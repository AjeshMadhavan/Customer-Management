import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import OptionsDropdown from "../components/OptionsDropdown.vue";

describe("test with options dropdown", () => {
  it("renders text", () => {
    const optionsDropdown = shallowMount(OptionsDropdown, {
      propsData: {
        text: "Export Data",
      },
    });

    expect(optionsDropdown.find(".uppercase").text()).toMatch("Export Data");
  });

  it("renders icon", () => {
    const optionsDropdown = shallowMount(OptionsDropdown, {
      propsData: {
        appendIcon: "mdi-menu-up",
      },
    });

    expect(optionsDropdown.find("v-icon").text()).toMatch("mdi-menu-up");
  });

  it("renders button style", () => {
    const optionsDropdown = shallowMount(OptionsDropdown, {
      propsData: {
        optionButtonStyle: "bg-blue",
      },
    });

    expect(optionsDropdown.find("button").classes("bg-blue")).toBeTruthy();
  });

  it("renders image src", () => {
    const imageSrc = "https://images.unsplash.com/photo-1714891203404";

    const optionsDropdown = shallowMount(OptionsDropdown, {
      propsData: {
        imageUrl: imageSrc,
      },
    });

    expect(optionsDropdown.find(".profile-image").attributes("src")).toMatch(imageSrc);
  });

  it("renders slot", () => {
    const optionsDropdown = shallowMount(OptionsDropdown, {
      slots: {
        optionsSlot: "<div>Hello World</div>",
      },
    });

    expect(optionsDropdown.vm.$slots.optionsSlot[0].children[0].text).toMatch(
      "Hello World"
    );
  });
});