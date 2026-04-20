import { useEffect, useState, FormEvent, useRef } from "react";
import { UserFormState } from "./user.form.state";
import { User } from "../domain/user.model";
import { Role } from "../../roles/domain/role.model";
import { roleService } from "../../roles/application/role.service.instance";
import { useToast } from "../../../shared/context/ToastContext";
import { Group } from "../../groups/domain/group.domain";
import { groupService } from "../../groups/application/group.service.instance";
import { userService } from "../application/user.service.instance";
import { HierarchyUserDTO } from "../application/dto/hierarchy-user.dto";

interface UserFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: UserFormState) => void;
    initialData?: User | null;
    loading?: boolean;
}

export default function UserFormModal({
    isOpen,
    onClose,
    onSubmit,
    initialData = null,
    loading = false
}: UserFormModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    const [form, setForm] = useState<UserFormState>({
        name: "",
        email: "",
        password: "",
        roleId: null,
        groupId: null,
        managerId: null,
    });

    const [roles, setRoles] = useState<Role[]>([]);
    const [groups, setGroups] = useState<Group[]>([]);
    const [managers, setManagers] = useState<HierarchyUserDTO[]>([]);
    const { showToast } = useToast();


    useEffect(() => {
        if (!isOpen) return;

        fetchRoles();
        fetchGroups();
    }, [isOpen]);

    useEffect(() => {
        if (!form.roleId) return;
        fetchManagers(form.roleId);
    }, [form.roleId]);

    useEffect(() => {
        if (!isOpen) return;

        if (initialData) {
            setForm({
                name: initialData.name ?? "",
                email: initialData.email ?? "",
                password: "",
                roleId: initialData.roleId ?? null,
                groupId: initialData.groupId ?? null,
                managerId: initialData.managerId ?? null,
            });
        } else {
            setForm({
                name: "",
                email: "",
                password: "",
                roleId: null,
                groupId: null,
                managerId: null,
            });
        }
    }, [initialData, isOpen]);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        if (isOpen) window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [isOpen, onClose]);

    const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            onClose();
        }
    };

    if (!isOpen) return null;

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(form);
    };

    const handleChange =
        (field: keyof UserFormState) =>
            (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
                const value = e.target.value;
                setForm({
                    ...form,
                    [field]: ["roleId", "groupId", "managerId"].includes(field)
                        ? value ? Number(value) : null
                        : value
                });
            };

    const fetchRoles = async () => {
        try {
            const response = await roleService.getRoles();
            setRoles(response);
        } catch (error: any) {
            showToast("error", error.response?.data?.message || "Error fetching roles");
        }
    };

    const fetchGroups = async () => {
        try {
            const response = await groupService.getGroups();
            setGroups(response);
        } catch (error: any) {
            showToast("error", error.response?.data?.message || "Error fetching groups");
        }
    };

    const fetchManagers = async (roleId: number) => {
        try {
            console.log(roleId)
            const response = await userService.getManagers(roleId);
            setManagers(response);
        } catch (error: any) {
            showToast("error", error.response?.data?.message || "Error fetching managers");
        }
    }

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={onClose}>

            <div onClick={(e) => e.stopPropagation()}
                className="bg-[--bg-panel] p-6 rounded-xl w-96 shadow-xl border border-[--border-panel]">

                <h3 className="text-lg font-semibold text-[--text-primary] mb-4">
                    {initialData ? "Edit User" : "Add User"}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <div>
                        <label className="text-sm text-[--text-secondary]">Name</label>
                        <input
                            type="text"
                            className="input"
                            value={form.name}
                            onChange={handleChange("name")}
                            required
                        />
                    </div>

                    <div>
                        <label className="text-sm text-[--text-secondary]">Email</label>
                        <input
                            type="email"
                            className="input"
                            value={form.email}
                            onChange={handleChange("email")}
                            required
                        />
                    </div>

                    {!initialData && (
                        <div>
                            <label className="text-sm text-[--text-secondary]">Password</label>
                            <input
                                type="password"
                                className="input"
                                value={form.password}
                                onChange={handleChange("password")}
                                required
                            />
                        </div>
                    )}

                    <div>
                        <label className="block text-sm text-[--text-secondary] mb-1">
                            Role
                        </label>

                        <select
                            className="select "
                            value={form.roleId ?? ""}
                            onChange={handleChange("roleId")}
                            disabled={!roles.length}
                            required
                        >
                            <option value="">Select a role</option>

                            {roles.map((role) => (
                                <option key={role.id} value={role.id}>
                                    {role.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm text-[--text-secondary] mb-1">
                            Grupo
                        </label>

                        <select
                            className="select "
                            value={form.groupId ?? ""}
                            onChange={handleChange("groupId")}
                            disabled={!groups.length}
                            required
                        >
                            <option value="">Select a group</option>

                            {groups.map((group) => (
                                <option key={group.id} value={group.id}>
                                    {group.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm text-[--text-secondary] mb-1">
                            Manager
                        </label>

                        <select
                            className="select "
                            value={form.managerId ?? ""}
                            onChange={handleChange("managerId")}
                            disabled={!managers.length}
                            required
                        >
                            <option value="">Select a manager</option>

                            {managers.map((manager) => (
                                <option key={manager.id} value={manager.id}>
                                    {manager.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex justify-end gap-2 pt-2">

                        <button
                            type="button"
                            onClick={onClose}
                            className="btn btn-secondary"
                        >
                            Close
                        </button>

                        <button
                            type="submit"
                            disabled={loading}
                            className="btn btn-primary"
                        >
                            {loading ? "Saving..." : "Save"}
                        </button>

                    </div>

                </form>
            </div>
        </div>
    );
}
