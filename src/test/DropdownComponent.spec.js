import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import DropdownComponent from "../components/DropdownComponent.vue";

describe("test with dropdown component", () => {
  it("renders title", () => {
    const dropdown = shallowMount(DropdownComponent, {
      propsData: {
        text: "CRM",
      },
    });

    expect(dropdown.props("text")).toMatch("CRM");
  });

  it("renders icon", () => {
    const dropdown = shallowMount(DropdownComponent, {
      propsData: {
        prependIcon: "mdi-account",
      },
    });

    expect(dropdown.props("prependIcon")).toMatch("mdi-account");
  });

  it("render dropdown style", () => {
    const dropdownStyle = "bg-white shadow-[0_2px_4px_0_rgba(0,0,0,0.2)]";
    const dropdown = shallowMount(DropdownComponent, {
      propsData: {
        dropdownContainerStyle: dropdownStyle,
      },
    });

    expect(dropdown.classes()).toContain(...dropdownStyle.split(" "));
  });

  it("renders button style", () => {
    const dropdownButtonStyles = "!font-bold pt-[9px] pr-[16px] pb-[9px]";
    const dropdown = shallowMount(DropdownComponent, {
      propsData: {
        dropdownButtonStyle: dropdownButtonStyles,
      },
    });

    expect(dropdown.find(".toggle-button").classes()).toContain(
      ...dropdownButtonStyles.split(" ")
    );
  });

  it("renders slot", () => {
    const dropdown = shallowMount(DropdownComponent, {
      propsData: {
        text: "CRM",
      },
      slots: {
        "item-slot": `<div>Hello World</div>`,
      },
    });

    expect(dropdown.vm.$slots["item-slot"][0].children[0].text).toMatch(
      "Hello World"
    );
  });

  it("test for button click", () => {
    const dropdown = shallowMount(DropdownComponent, {
      propsData: {
        text: "CRM",
      },
    });

    expect(dropdown.vm._setupProxy.showDropdownItems).toBe(false);

    dropdown.find(".toggle-button").trigger("click");

    expect(dropdown.vm._setupProxy.showDropdownItems).toBe(true);
  });
});