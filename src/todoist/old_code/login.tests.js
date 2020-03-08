import LoginPage from '../pages/login.page.js';
import dashboardPage from '../pages/dashboard.page.js';

const EMAIL = process.env.TODOIST_EMAIL;
const PASSWORD = process.env.TODOIST_PASSWORD;
const PASSWORD_Incorrecto = "Bla";
const WhatToDelete= "Bla";

fixture('Login Test').page('https://todoist.com/');
/*
.beforeEach(async t =>{

    await t.maximizeWindow.expect(await LaunchPage.isPageload()(.ok());
 "test:chrome": "testcafe chrome src/todoist/tests/login.tests.js --selector-timeout 35000 --assertion-timeout 35000",
})
*/
// "test:chrome": "testcafe chrome src/todoist/tests/login.tests.js --selector-timeout 15000 --assertion-timeout 15000"
test('', async t => {
    await LoginPage.login(EMAIL,PASSWORD);
    await t.expect(await dashboardPage.isPageLoaded()).ok();    
});


