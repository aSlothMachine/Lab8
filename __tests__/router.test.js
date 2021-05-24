/**
 * @jest-environment jsdom
 */

import { pushToHistory } from '../scripts/router.js';

// router.test.js
describe('RouterStuff', () => {

    test('settings', () => {

        expect( pushToHistory('settings', 0).state ).toStrictEqual( {"page": "settings"} );  // could also use .page
        expect( pushToHistory('settings', 0).length ).toBe(3);   
    });

    test('entry', () => {

        expect( pushToHistory('entry', 1).state ).toStrictEqual( {"page": "entry1"} );   // Check current state of object
        expect( pushToHistory('entry', 1).length ).toBe(5);                              // Check length of the history stack
    });

    test('default', () => {

        expect( pushToHistory('', 0).state ).toStrictEqual( {} );   
        expect( pushToHistory('', 0).length ).toBe(7);   
    });
 });    // end describe
