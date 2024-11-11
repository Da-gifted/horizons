export const formatDateTime = (date: string) => {
    return new Date(date).toLocaleString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });
}

export const limitString = (str: string, limit: number) => {
    return str.length > limit ? str.slice(0, limit) + "..." : str;
}