import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import ButtonComponent from "../components/ButtonComponent.vue";
import { ButtonVariants } from "../Type/Enums";

describe("test with button component", () => {
  it("renders button component with primary variant", () => {
    const Button = shallowMount(ButtonComponent, {
      propsData: {
        variant: ButtonVariants.PRIMARY,
        text: "Add Contact",
        icon: "mdi-plus",
      },
    });

    expect(Button.props("variant")).toMatch(ButtonVariants.PRIMARY);
    expect(Button.classes()).toContain("primary");
    expect(Button.text()).toMatch("Add Contact");
    expect(Button.props("icon")).toMatch("mdi-plus");
  });

  it("renders button with outline variant", () => {
    const Button = shallowMount(ButtonComponent, {
      propsData: {
        variant: ButtonVariants.OUTLINED,
        text: "Details",
      },
    });

    expect(Button.props("variant")).toMatch(ButtonVariants.OUTLINED);
    expect(Button.text()).toMatch("Details");
  });

  it("renders button with icon variant", () => {
    const Button = shallowMount(ButtonComponent, {
      propsData: {
        variant: ButtonVariants.ICON,
        icon: "mdi-magnify",
      },
    });

    expect(Button.find(".icon").exists()).toBeTruthy();
    expect(Button.props("icon")).toMatch("mdi-magnify");
  });

  it("test with buttonStyleVariant computed property", () => {
    // check for default value of switch statement
    const Button = shallowMount(ButtonComponent);

    expect(Button.vm._setupState.buttonStyleVariant.value).toBe("");

    // check for value from switch statement when variant is passed
    const ButtonWithVariant = shallowMount(ButtonComponent, {
      propsData: {
        variant: ButtonVariants.PRIMARY,
        text: "Export",
      },
    });

    expect(ButtonWithVariant.vm._setupState.buttonStyleVariant.value).toBe(
      "primary"
    );
  });

  it("test for emit on button click", async () => {
    const Button = shallowMount(ButtonComponent, {
      propsData: {
        variant: ButtonVariants.OUTLINED,
        text: "Export",
      },
    });

    expect(Button.emitted().handleButtonClick).toBeUndefined();

    Button.find(".outlined").trigger("click");

    expect(Button.emitted().handleButtonClick).toBeDefined();
  });
});