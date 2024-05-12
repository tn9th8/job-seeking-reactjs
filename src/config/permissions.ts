export const ALL_PERMISSIONS = {
    COMPANIES: {
        GET_PAGINATE: { method: "GET", apiPath: '/api/v1/companies', module: "COMPANIES" },
        CREATE: { method: "POST", apiPath: '/api/v1/companies', module: "COMPANIES" },
        UPDATE: { method: "PATCH", apiPath: '/api/v1/companies/:id', module: "COMPANIES" },
        DELETE: { method: "DELETE", apiPath: '/api/v1/companies/:id', module: "COMPANIES" },
    },
    JOBS: {
        GET_PAGINATE: { method: "GET", apiPath: '/api/v1/jobs', module: "JOBS" },
        CREATE: { method: "POST", apiPath: '/api/v1/jobs', module: "JOBS" },
        UPDATE: { method: "PATCH", apiPath: '/api/v1/jobs/:id', module: "JOBS" },
        DELETE: { method: "DELETE", apiPath: '/api/v1/jobs/:id', module: "JOBS" },
    },
    PERMISSIONS: {
        GET_PAGINATE: { method: "GET", apiPath: '/api/v1/permissions', module: "PERMISSIONS" },
        CREATE: { method: "POST", apiPath: '/api/v1/permissions', module: "PERMISSIONS" },
        UPDATE: { method: "PATCH", apiPath: '/api/v1/permissions/:id', module: "PERMISSIONS" },
        DELETE: { method: "DELETE", apiPath: '/api/v1/permissions/:id', module: "PERMISSIONS" },
    },
    RESUMES: {
        GET_PAGINATE: { method: "GET", apiPath: '/api/v1/resumes', module: "RESUMES" },
        CREATE: { method: "POST", apiPath: '/api/v1/resumes', module: "RESUMES" },
        UPDATE: { method: "PATCH", apiPath: '/api/v1/resumes/:id', module: "RESUMES" },
        DELETE: { method: "DELETE", apiPath: '/api/v1/resumes/:id', module: "RESUMES" },
    },
    ROLES: {
        GET_PAGINATE: { method: "GET", apiPath: '/api/v1/roles', module: "ROLES" },
        CREATE: { method: "POST", apiPath: '/api/v1/roles', module: "ROLES" },
        UPDATE: { method: "PATCH", apiPath: '/api/v1/roles/:id', module: "ROLES" },
        DELETE: { method: "DELETE", apiPath: '/api/v1/roles/:id', module: "ROLES" },
    },
    USERS: {
        GET_PAGINATE: { method: "GET", apiPath: '/api/v1/users', module: "USERS" },
        CREATE: { method: "POST", apiPath: '/api/v1/users', module: "USERS" },
        UPDATE: { method: "PATCH", apiPath: '/api/v1/users/:id', module: "USERS" },
        DELETE: { method: "DELETE", apiPath: '/api/v1/users/:id', module: "USERS" },
    },
    SKILLS: {
        GET_PAGINATE: { method: "GET", apiPath: '/api/v1/skills', module: "SKILLS" },
        CREATE: { method: "POST", apiPath: '/api/v1/skills', module: "SKILLS" },
        UPDATE: { method: "PATCH", apiPath: '/api/v1/skills/:id', module: "SKILLS" },
        DELETE: { method: "DELETE", apiPath: '/api/v1/skills/:id', module: "SKILLS" },
    },
    SUBSCRIBERS: {
        GET_PAGINATE: { method: "GET", apiPath: '/api/v1/subscribers', module: "SUBSCRIBERS" },
        CREATE: { method: "POST", apiPath: '/api/v1/subscribers', module: "SUBSCRIBERS" },
        UPDATE: { method: "PATCH", apiPath: '/api/v1/subscribers/:id', module: "SUBSCRIBERS" },
        DELETE: { method: "DELETE", apiPath: '/api/v1/subscribers/:id', module: "SUBSCRIBERS" },
    },
    DASHBOARD: {
        COUNT_JOBS_TODAY: { method: "GET", apiPath: '/api/v1/dashboard/job/today', module: "DASHBOARD" },
        CREATE: { method: "POST", apiPath: '/api/v1/subscribers', module: "SUBSCRIBERS" },
        UPDATE: { method: "PATCH", apiPath: '/api/v1/subscribers/:id', module: "SUBSCRIBERS" },
        DELETE: { method: "DELETE", apiPath: '/api/v1/subscribers/:id', module: "SUBSCRIBERS" },
    },
}

export const ALL_MODULES = {
    AUTH: 'AUTH',
    COMPANIES: 'COMPANIES',
    FILES: 'FILES',
    JOBS: 'JOBS',
    PERMISSIONS: 'PERMISSIONS',
    RESUMES: 'RESUMES',
    ROLES: 'ROLES',
    USERS: 'USERS',
    SUBSCRIBERS: 'SUBSCRIBERS',
    SKILLS: 'SKILLS',
    DASHBOARD: 'DASHBOARD'
}
