
import { createApplication, createApplicationEnv, createEnv, createProject, createTarget, deleteApplication, deleteEnv, deleteProject, deleteTarget, detailTarget, getListUsers, listApplications, listEnvs, listProjects, listTargets, updateApplication, updateEnv, updateProject, updateTarget } from './ts_sdk_functions';
import { describe, expect, test } from '@jest/globals';

const PROJECT_NAME = 'testproject3'
const TARGET_NAME = 'testtarget2'

// some projects/targets can't be deleted because Cluster nil and current Deltete does not work

describe('Application API', () => {
  let numAppsInit = -1

  test('create application', async () => {
    const listAppsRes = await listApplications()
    numAppsInit = listAppsRes.applications.length
    const createApplicationRequest = {
      "body": {
        "name": 'testapplication',  // has to be all lower case
        "project": 'default',
        "component": {
          "name": 'express-server',
          "componentType": 'webservice',
        },
        "icon": 'https://www.svgrepo.com/show/513758/bookmark-check.svg',
      }
    }
    const res = await createApplication(createApplicationRequest)
    const now = new Date();
    const fiveMinutesAgo = new Date(now.getTime() - 5 * 60 * 1000);


    expect(res).toHaveProperty('createTime');
    expect(res).toHaveProperty('name');
    expect(res.createTime.getTime()).toBeGreaterThanOrEqual(fiveMinutesAgo.getTime());
    expect(res.createTime.getTime()).toBeLessThanOrEqual(now.getTime());
    expect(res.name).toBe('testapplication')
  });

  test('update application', async () => {
    const updateApplicationRequest = {
      appName: 'testapplication',
      body: {
        name: 'updatedtestapp', // name can't be changed? also email can't be changed
        alias: 'newalias',
        description: 'newdescription'

      }
    }
    const res = await updateApplication(updateApplicationRequest)
    const now = new Date();
    const fiveMinutesAgo = new Date(now.getTime() - 5 * 60 * 1000);
    expect(res).toHaveProperty('createTime');
    expect(res).toHaveProperty('alias');
    expect(res).toHaveProperty('description');
    expect(res.createTime.getTime()).toBeGreaterThanOrEqual(fiveMinutesAgo.getTime());
    expect(res.createTime.getTime()).toBeLessThanOrEqual(now.getTime());
    expect(res.alias).toBe('newalias')
    expect(res.description).toBe('newdescription')
  });
});


describe('Project API', () => {

  test('create project', async () => {
    const createProjReq = {
      "body": {
        "name": PROJECT_NAME,  // has to be all lower case
        'description': 'testproject description'
      }
    }
    const res = await createProject(createProjReq)
    const now = new Date();
    const fiveMinutesAgo = new Date(now.getTime() - 5 * 60 * 1000);

    expect(res).toHaveProperty('createTime');
    expect(res).toHaveProperty('description');
    expect(res).toHaveProperty('name');
    expect(res.createTime.getTime()).toBeGreaterThanOrEqual(fiveMinutesAgo.getTime());
    expect(res.createTime.getTime()).toBeLessThanOrEqual(now.getTime());
    expect(res.name).toBe(PROJECT_NAME)

  });

  test('update project', async () => {
    const updateProjReq = {
      projectName: PROJECT_NAME,
      "body": {
        'description': 'testproject description updated',
        'alias': 'newprojectalias'
      }
    }
    const res = await updateProject(updateProjReq)
    const now = new Date();
    const fiveMinutesAgo = new Date(now.getTime() - 5 * 60 * 1000);

    expect(res).toHaveProperty('createTime');
    expect(res).toHaveProperty('alias');
    expect(res).toHaveProperty('description');
    expect(res.createTime.getTime()).toBeGreaterThanOrEqual(fiveMinutesAgo.getTime());
    expect(res.createTime.getTime()).toBeLessThanOrEqual(now.getTime());
    expect(res.alias).toBe('newprojectalias')
    expect(res.description).toBe('testproject description updated')
  });

});

describe('Env API', () => {

  test('create env', async () => {
    const createEnvReq = {
      body: {
        name: 'testenv',
        namespace: 'testnamespace',
        project: PROJECT_NAME
      }
    }
    const res = await createEnv(createEnvReq);
    const now = new Date();
    const fiveMinutesAgo = new Date(now.getTime() - 5 * 60 * 1000);

    expect(res).toHaveProperty('createTime');
    expect(res).toHaveProperty('description');
    expect(res).toHaveProperty('name');
    expect(res.createTime.getTime()).toBeGreaterThanOrEqual(fiveMinutesAgo.getTime());
    expect(res.createTime.getTime()).toBeLessThanOrEqual(now.getTime());
    expect(res.name).toBe('testenv')
  });

  test('update env', async () => {
    const updateEnvReq = {
      envName: 'testenv',
      body: {
        name: 'testenvupdated',
        namespace: 'testnamespaceupdated',
        project: PROJECT_NAME,
        description: 'new env description',
        alias: 'newenvalias'
      }
    }
    const res = await updateEnv(updateEnvReq)
    const now = new Date();
    const fiveMinutesAgo = new Date(now.getTime() - 5 * 60 * 1000);

    expect(res).toHaveProperty('createTime');
    expect(res).toHaveProperty('alias');
    expect(res).toHaveProperty('description');
    expect(res.createTime.getTime()).toBeGreaterThanOrEqual(fiveMinutesAgo.getTime());
    expect(res.createTime.getTime()).toBeLessThanOrEqual(now.getTime());
    expect(res.alias).toBe('newenvalias')
    expect(res.description).toBe('new env description')
  });

});

describe('Target API', () => { // seem like server only return undefined
  test('create target', async () => {
    const createTargetReq = {
      body: {
        name: TARGET_NAME,
        project: PROJECT_NAME
      }
    }
    const res = await createTarget(createTargetReq)

    const now = new Date();
    const fiveMinutesAgo = new Date(now.getTime() - 5 * 60 * 1000);
    expect(res).toHaveProperty('createTime');
    expect(res).toHaveProperty('description');
    expect(res).toHaveProperty('name');
    expect(res.createTime.getTime()).toBeGreaterThanOrEqual(fiveMinutesAgo.getTime());
    expect(res.createTime.getTime()).toBeLessThanOrEqual(now.getTime());
    expect(res.name).toBe(TARGET_NAME)

  });

  test('update target', async () => {
    const updateTargetReq = {
      targetName: TARGET_NAME,
      body: {
        alias: 'newtargetalias',
        description: 'updated target description'
      }
    }
    const res = await updateTarget(updateTargetReq)
    const listTargetsRes = await listTargets()

    const now = new Date();
    const fiveMinutesAgo = new Date(now.getTime() - 5 * 60 * 1000);

    expect(res).toHaveProperty('createTime');
    expect(res).toHaveProperty('alias');
    expect(res).toHaveProperty('description');
    expect(res.createTime.getTime()).toBeGreaterThanOrEqual(fiveMinutesAgo.getTime());
    expect(res.createTime.getTime()).toBeLessThanOrEqual(now.getTime());
    expect(res.alias).toBe('newtargetalias')
    expect(res.description).toBe('updated target description')
  });

  test('delete target', async () => {
    const delTargetReq = {
      targetName: TARGET_NAME,
    }
    const res = await deleteTarget(delTargetReq)
    const listTargetsRes = await listTargets()


    const targets = listTargetsRes.targets.map(target => target.name)
    console.log(targets)
    expect(targets).not.toContain(TARGET_NAME)
  });

});


describe('Delete All resources', () => { // delete env before project

  test('delete application', async () => {
    const res = await deleteApplication({
      appName: 'testapplication'
    })

    const listAppRes = await listApplications()

    const appNames = listAppRes.applications.map(app => app.name)
    expect(appNames).not.toContain('testapplication')
  });

  test('delete env', async () => {
    const deleteEnvReq = {
      envName: 'testenv'
    }
    const res = await deleteEnv(deleteEnvReq)
    const listEnvsRes = await listEnvs()
    const envNames = listEnvsRes.envs.map(env => env.name)
    expect(envNames).not.toContain('testenv')

  });



  test('delete project', async () => { //  can't delete bc bug in delete target
    const projs = await listProjects()
    // console.log('projects, ', projs)
    const deleteProjReq = {
      projectName: PROJECT_NAME,
    }
    const res = await deleteProject(deleteProjReq)

    const listProjRes = await listProjects()

    console.log(listProjRes)
    const projNames = listProjRes.projects.map(app => app.name)
    expect(projNames).not.toContain(PROJECT_NAME)
  });

});
