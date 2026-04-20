import { createUserService } from "./user.service";
import { userApi } from "../infrastructure/user.api";

export const userService = createUserService(userApi);