import { Group } from "../domain/group.domain";
import { IGroupApi } from "./group-api.interface";

export const createGroupService = (api: IGroupApi) => ({

    async getGroups(): Promise<Group[]> {
        const res = await api.getGroups();
        return res;
    },

});            