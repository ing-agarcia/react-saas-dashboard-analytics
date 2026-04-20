export const getAlignClass = (align?: "left" | "center" | "right") => {
    switch (align) {
        case "center":
            return "text-center";
        case "right":
            return "text-right";
        default:
            return "text-left";
    }
};