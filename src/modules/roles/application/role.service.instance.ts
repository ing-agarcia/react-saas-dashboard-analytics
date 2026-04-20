import { createRoleService } from "./role.service";
import { roleApi } from "../infrastructure/role.api";

export const roleService = createRoleService(roleApi);