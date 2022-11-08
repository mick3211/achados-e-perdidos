export const DateService = {
    reverseDate(date: string | Date) {
        return new Date(date).toLocaleDateString();
    },
};
