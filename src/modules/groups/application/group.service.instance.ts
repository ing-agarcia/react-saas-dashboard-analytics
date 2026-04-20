// Aquí se instancia el servicio con la implementación concreta del API
import { createGroupService } from "./group.service";
import { groupApi } from "../infrastructure/group.api";

export const groupService = createGroupService(groupApi);