import { useState, useEffect } from "react";
import { userService } from "../application/user.service.instance";
import UserFormModal from "./UserFormModal";
import { useToast } from "../../../shared/context/ToastContext";
import DataTable from "../../../shared/components/DataTable";
import { userColumns } from "./user.columns";
import { createUser } from "../application/usecase/create-user.usecase";
import { updateUser } from "../application/usecase/update-user.usecase";
import { UserFormState } from "./user.form.state"
import { User } from "../domain/user.model";
import { PageResponse } from "../../../shared/types/pagination.types";
import { BarChart, Plus } from "lucide-react";
import { useAuth } from "../../auth/context/AuthContext";
import ConfirmModal from "../../../shared/components/ConfirmModal";

export default function UsersPage() {
    const { showToast } = useToast();
    const [tableData, setTableData] = useState<PageResponse<User> | null>(null);

    // Modal states
    const [openModal, setOpenModal] = useState(false);
    const [userToEdit, setUserToEdit] = useState<User | null>(null);
    const [open, setOpen] = useState(false);

    // Form loading state
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);

    const { user } = useAuth();
    const isRoot = user?.role === "Root" || user?.role === "ROOT";

    const fetchUsers = async (page = 0) => {
        try {
            const response = await userService.getUsers(page, 50);
            setTableData(response);
        } catch (error: any) {
            showToast("error", error.response?.data?.message || "Error retrieving user data");
        }
    };

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
        fetchUsers(newPage);
    };

    useEffect(() => {
        fetchUsers(0);
    }, []);

    const openToCreate = () => {
        setUserToEdit(null);
        setOpenModal(true);
    };

    const openToEdit = (user: User) => {
        setUserToEdit(user);
        setOpenModal(true);
    };

    const formNewUser = async (userPayload: UserFormState) => {
        setLoading(true);

        try {
            if (userToEdit) {
                await updateUser(userPayload, userToEdit);
                showToast("success", "User successfully updated");
            } else {
                await createUser(userPayload);
                showToast("success", "User successfully registered");
            }
            setOpenModal(false);
            await fetchUsers();
        } catch (error: any) {
            showToast("error", error.response?.data?.message || "The user could not be registered");
        } finally {
            setLoading(false);
        };
    };

    const handleDeleteUser = (user: User) => {
        setUserToEdit(user);
        setOpen(true);
    };

    const deleteUsers = async () => {
        if (!setUserToEdit) return;

        try {
            setLoading(true);
            await userService.deleteUser(userToEdit?.id!);
            await fetchUsers();
            showToast("success", "User successfully removed");
        } catch (error: any) {
            showToast("error", error.response?.data?.message || "The user could not be deleted");
        } finally {
            setLoading(false);
            setOpen(false);
            setUserToEdit(null);
        }
    };

    const reportUsers = async () => {
        try {
            await userService.downloadReport(currentPage, 50);
            showToast("success", "Report generated successfully");
        } catch (error: any) {
            showToast("error", error.response?.data?.message || "The report could not be generated");
        }
    };

    return (
        <div className="w-full pt-3 px-3">
            {/* Encabezado con título y botón */}
            <div className="flex justify-between items-center mb-3">
                <h1 className="text-2xl font-bold mb-4">Team</h1>
                <div className="flex gap-2">
                    <button
                        onClick={reportUsers}
                        className="flex items-center gap-2 bg-(--bg-btn) hover:bg-(--bg-btn-hover) text-white px-4 py-2 rounded cursor-pointer">
                        <BarChart size={18} />
                        Report
                    </button>

                    {isRoot && (
                        <button
                            onClick={openToCreate}
                            className="flex items-center gap-2 bg-(--bg-btn) hover:bg-(--bg-btn-hover) text-white px-4 py-2 rounded cursor-pointer">
                            <Plus size={18} />
                            New user
                        </button>
                    )}
                </div>
            </div>

            <DataTable<User>
                tableData={tableData}
                columns={userColumns}
                onEdit={openToEdit}
                onDelete={(row: User) => handleDeleteUser(row)}
                onPageChange={handlePageChange}
            />

            {/* 👇 AQUÍ va el modal */}
            <ConfirmModal
                open={open}
                title="Delete user"
                description="Are you sure?..This action cannot be undone."
                confirmText="Delete"
                cancelText="Cancel"
                onConfirm={deleteUsers}
                onCancel={() => setOpen(false)}
                loading={loading}
            />

            <UserFormModal
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                onSubmit={formNewUser}
                initialData={userToEdit}
                loading={loading}
            />
        </div>
    );
}