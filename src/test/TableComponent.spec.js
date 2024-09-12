import { describe, expect, it } from "vitest";
import { shallowMount } from "@vue/test-utils";

import TableComponent from "../components/TableComponent.vue";
import UserDetails from "../Json/UserDetails.json";

describe("table component test", () => {
  it("renders user data prop", () => {
    const tableComponent = shallowMount(TableComponent, {
      propsData: {
        userData: UserDetails.userDetails.users,
      },
    });

    expect(tableComponent.props("userData")).toBe(
      UserDetails.userDetails.users
    );
  });

  it("renders table row expand icon", () => {
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