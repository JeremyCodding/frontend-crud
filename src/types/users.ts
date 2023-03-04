export type User = {
    id: number,
    name: string,
    email: string,
    access_level: 'Analista' | 'Colaborador' | 'Administrador' | 'Superadministrador'
    last_access: string,
};