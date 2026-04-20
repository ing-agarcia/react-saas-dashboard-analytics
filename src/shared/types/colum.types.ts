export interface Column<T, K extends keyof T = keyof T> {
    key: K;
    label: string;
    render?: (value: T[K], row: T) => React.ReactNode;
    align?: "left" | "center" | "right";
}

// export interface Column<T> {
//     key: keyof T;
//     label: string;
// }