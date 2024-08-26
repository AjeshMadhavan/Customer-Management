import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import SearchInput from "../components/SearchInput.vue";

describe("test with searh input", () => {
  it("renders placeholder text", () => {
    const searchInput = shallowMount(SearchInput, {
      propsData: {
        placeholderText: "Search",
      },
    });

    expect(searchInput.attributes("placeholder")).toMatch("Search");
  });

  it("renders with prepend icon", () => {
    const searchInput = shallowMount(SearchInput, {
      propsData: {
        prependIcon: "mdi-magnify",
      },
    });

    expect(searchInput.props("prependIcon")).toMatch("mdi-magnify");
  });

  it("test with emit", () => {
    const searchInput = shallowMount(SearchInput, {
      props: {
        placeholderText: "hi",
      },
    });

    expect(searchInput.emitted()).toMatchObject({});

    searchInput.vm._setupState.onValueChange("Hello World");

    expect(searchInput.emitted()).toHaveProperty("onValueChange");
    expect(searchInput.emitted().onValueChange[0][0]).toBe("Hello World");
  });
});