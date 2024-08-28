import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import TableComponent from "../components/TableComponent.vue";
import UserDetails from "../Json/UserDetails.json";

describe("test with table component", () => {
  it("test for prop", () => {
    const tableComponent = shallowMount(TableComponent, {
      propsData: {
        userData: UserDetails.userDetails.users,
      },
    });

    expect(tableComponent.props("userData")).toBe(
      UserDetails.userDetails.users
    );
  });

  it("test for expand icon", () => {
    const tableComponent = shallowMount(TableComponent, {
      propsData: {
        userData: UserDetails.userDetails.users,
      },
    });

    expect(
      tableComponent.find("v-data-table").attributes()["expand-icon"]
    ).toBe("mdi-dots-horizontal");
  });
});