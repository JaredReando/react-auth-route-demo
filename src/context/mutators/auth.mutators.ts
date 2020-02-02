import { mutate } from "../auth.context";

export const setAuthPermission = (permission: boolean) => {
  mutate(auth => {
    auth.permitted = permission;
    const permissionToken = permission ? "PERMITTED" : "DENIED";
    sessionStorage.setItem("auth", permissionToken)
  });
};
