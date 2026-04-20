import { CreateUserDTO } from "../dto/create-user.dto";
import { userService } from "../user.service.instance";
import { UserFormState } from "../../ui/user.form.state";

export async function createUser(form: UserFormState) {

    const dto: CreateUserDTO = {
        name: form.name,
        email: form.email,
        password: form.password,
        roleId: form.roleId,
        groupId: form.groupId,
        managerId: form.managerId
    };


    return userService.newUser(dto);
}