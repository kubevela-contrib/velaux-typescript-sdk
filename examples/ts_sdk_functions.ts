import { Configuration, Json } from './apidoc/out/tsc/runtime';
import { ApplicationApi, CreateApplicationRequest, DeleteApplicationRequest, UpdateApplicationRequest, CreateApplicationEnvRequest, DeleteApplicationEnvRequest } from './apidoc/out/tsc/apis/ApplicationApi';
import { AuthenticationApi, LoginRequest } from './apidoc/out/tsc/apis/AuthenticationApi';
import { AddonApi } from './apidoc/out/tsc/apis/AddonApi';
import { UsersApi } from './apidoc/out/tsc/apis/UsersApi';
import { CreateProjectRequest, DeleteProjectRequest, ProjectApi, UpdateProjectRequest } from './apidoc/out/tsc/apis/ProjectApi';
import { EnvApi, EnvcreateRequest, EnvdeleteRequest, EnvupdateRequest } from './apidoc/out/tsc/apis/EnvApi';
import { CreateTargetRequest, DeleteTargetRequest, DetailTargetRequest, TargetApi, UpdateTargetRequest } from './apidoc/out/tsc/apis/TargetApi';

const configuration = new Configuration({
    basePath: 'http://127.0.0.1:8000',
})

const applicationAPI = new ApplicationApi(configuration)
const authAPI = new AuthenticationApi(configuration)
const userAPI = new UsersApi(configuration)
const projectAPI = new ProjectApi(configuration)
const envAPI = new EnvApi(configuration)
const targetAPI = new TargetApi(configuration)

const loginRequestParam: LoginRequest = {
    body: {
        "username": "admin",
        "password": "VelaUX12345"
    }
}

export async function getListUsers() {
    const loginRes = await authAPI.login(loginRequestParam);
    configuration.accessToken = loginRes.accessToken;
    const listUsersRes = await userAPI.listUser();
    return listUsersRes
}

export async function createApplication(req:CreateApplicationRequest) {
    const loginRes = await authAPI.login(loginRequestParam);
    configuration.accessToken = loginRes.accessToken;
    return applicationAPI.createApplication(req)
}

export async function updateApplication(req:UpdateApplicationRequest) {
    const loginRes = await authAPI.login(loginRequestParam);
    configuration.accessToken = loginRes.accessToken;
    return applicationAPI.updateApplication(req)
}

export async function deleteApplication(req:DeleteApplicationRequest) {
    const loginRes = await authAPI.login(loginRequestParam);
    configuration.accessToken = loginRes.accessToken;
    return applicationAPI.deleteApplication(req)
}

export async function deleteApplicationEnv(req:DeleteApplicationEnvRequest) {
    const loginRes = await authAPI.login(loginRequestParam);
    configuration.accessToken = loginRes.accessToken;
    return applicationAPI.deleteApplicationEnv(req)
}

export async function createApplicationEnv(req:CreateApplicationEnvRequest) {
    const loginRes = await authAPI.login(loginRequestParam);
    configuration.accessToken = loginRes.accessToken;
    return applicationAPI.createApplicationEnv(req)
}

export async function listApplications() {
    const loginRes = await authAPI.login(loginRequestParam);
    configuration.accessToken = loginRes.accessToken;
    return applicationAPI.listApplications()
}

export async function createProject(req:CreateProjectRequest) {
    const loginRes = await authAPI.login(loginRequestParam);
    configuration.accessToken = loginRes.accessToken;
    return projectAPI.createProject(req)
}

export async function updateProject(req:UpdateProjectRequest) {
    const loginRes = await authAPI.login(loginRequestParam);
    configuration.accessToken = loginRes.accessToken;
    return projectAPI.updateProject(req)
}

export async function deleteProject(req:DeleteProjectRequest) {
    const loginRes = await authAPI.login(loginRequestParam);
    configuration.accessToken = loginRes.accessToken;
    return projectAPI.deleteProject(req)
}

export async function listProjects() {
    const loginRes = await authAPI.login(loginRequestParam);
    configuration.accessToken = loginRes.accessToken;
    return projectAPI.listProjects()
}

export async function createEnv(req:EnvcreateRequest) {
    const loginRes = await authAPI.login(loginRequestParam);
    configuration.accessToken = loginRes.accessToken;
    return envAPI.envcreate(req)
}

export async function updateEnv(req:EnvupdateRequest) {
    const loginRes = await authAPI.login(loginRequestParam);
    configuration.accessToken = loginRes.accessToken;
    return envAPI.envupdate(req)
}

export async function deleteEnv(req:EnvdeleteRequest) {
    const loginRes = await authAPI.login(loginRequestParam);
    configuration.accessToken = loginRes.accessToken;
    return envAPI.envdelete(req)
}

export async function listEnvs() {
    const loginRes = await authAPI.login(loginRequestParam);
    configuration.accessToken = loginRes.accessToken;
    return envAPI.envlist()
}

// Target APIs
export async function listTargets() {
    const loginRes = await authAPI.login(loginRequestParam);
    configuration.accessToken = loginRes.accessToken;
    return targetAPI.listTargets()
}

export async function createTarget(req:CreateTargetRequest) {
    const loginRes = await authAPI.login(loginRequestParam);
    configuration.accessToken = loginRes.accessToken;
    return targetAPI.createTarget(req)
}

export async function updateTarget(req:UpdateTargetRequest) {
    const loginRes = await authAPI.login(loginRequestParam);
    configuration.accessToken = loginRes.accessToken;
    return targetAPI.updateTarget(req)
}

export async function deleteTarget(req:DeleteTargetRequest) {
    const loginRes = await authAPI.login(loginRequestParam);
    configuration.accessToken = loginRes.accessToken;
    return targetAPI.deleteTarget(req)
}

export async function detailTarget(req:DetailTargetRequest) {
    const loginRes = await authAPI.login(loginRequestParam);
    configuration.accessToken = loginRes.accessToken;
    return targetAPI.detailTarget(req)
}


