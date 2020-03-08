import { Selector, t} from 'testcafe';


class DashBoardPage{
    constructor(){
        this.todoistIcon = Selector("svg[data-svgs-path='sm1/todoist_logo.svg']");
    }

    async isPageLoaded(){
        return this.todoistIcon.exists;


        /*
        return (await t.expect(this.todoistIcon.exists).ok())
        && return (await t.expect(this.todoistIcon.exists).ok());

        */
    }
    /// agregar tarea , borrar tarea   ///https://www.saucedemo.com/
    async delete(WhatToDelete){
        
    }

}export default new DashBoardPage();