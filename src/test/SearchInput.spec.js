import { describe, expect, it } from "vitest";
import { shallowMount } from "@vue/test-utils";

import SearchInput from "../components/SearchInput.vue";

describe("test with search input component", () => {
  it("renders placeholder text", () => {
    const searchInput = shallowMount(SearchInput, {
      propsData: {
        placeholder: "Search",
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

  it("test with emit", async () => {
    const searchInput = shallowMount(SearchInput, {
      propsData: {
        value: "Evan You",
      },
    });

    expect(searchInput.emitted()).toMatchObject({});

    await searchInput.trigger("keyup.enter");

    expect(searchInput.emitted()).toHaveProperty("onValueChange");
    expect(searchInput.emitted().onValueChange[0][0]).toBe("Evan You");
  });
});