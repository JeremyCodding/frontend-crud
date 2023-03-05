export type User = {
    id: string,
    name: string,
    email: string,
    access_level: 'Analista' | 'Colaborador' | 'Administrador' | 'Superadministrador' | null
    last_access: string,
};