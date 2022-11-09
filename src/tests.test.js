/**
 * @jest-environment jsdom
 */

import Storage from './modules/storage.js';
import UserInterface from './modules/userinterface.js';

describe('add to local storage', () => {

});

describe('add to userinterface', () => {
  test('Add one new list to the to-do list', () => {
    // document.querySelector('.list-container').innerHTML = '<div>'
    //     + '  <ul id="list"><li></li></ul>'
    //     + '</div>';
    UserInterface.addTask(0);
    const list = document.querySelectorAll('.task-item');
    const form = document.querySelector('#form-item');
    expect(list).toContain(form);
  });
});

describe('delete from local storage', () => {

});

describe('delete from userinterface', () => {

});
