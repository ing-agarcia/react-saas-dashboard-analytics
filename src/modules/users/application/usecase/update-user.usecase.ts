import { User } from "../../domain/user.model";
import { UserFormState } from "../../ui/user.form.state";
import { UpdateUserDTO } from "../dto/update-user.dto";
import { userService } from "../user.service.instance";

export async function updateUser(form: UserFormState, user: User) {
    const dto: UpdateUserDTO = {
        id: user.id,
        name: form.name,
        email: form.email,
        roleId: form.roleId ?? undefined,
        groupId: form.groupId ?? undefined,
        managerId: form.managerId ?? undefined
    };

    return userService.updateUser(dto);
}