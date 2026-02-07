export const getImagePath = (path: string) => {
    const base = import.meta.env.BASE_URL || '/';

    // If the path is already an external URL (http/https), return it as is
    if (path.startsWith('http')) {
        return path;
    }

    // Remove leading slash if present to avoid double slashes with the base
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;

    // Ensure the base has a trailing slash if it's not just a slash
    const normalizedBase = base.endsWith('/') ? base : `${base}/`;

    return `${normalizedBase}${cleanPath}`;
};
