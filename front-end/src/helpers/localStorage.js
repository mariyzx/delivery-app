export const readingLS = (key) => JSON.parse(localStorage.getItem(key));

export const clearLS = () => localStorage.clear();
