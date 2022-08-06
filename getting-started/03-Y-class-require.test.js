const car = require('./03-X-class-export');

describe('GMC', ()=>{
    const gmc96 = new car("GMC", "1500 Regular Cab", 1996);
    const gmc07 = new car("GMC", "Acadia", 2007);
    const gmc19 = new car("GMC", "Canyon Crew Cab", 2019);

    test("GMC 1996 age = 26", ()=>{
        expect(gmc96.age).toBe(26);
    });

    test("GMC 2007 age = 15", ()=>{
        expect(gmc07.age).toBe(15);
    });
    
    test("GMC 2019 age = 3", ()=>{
        expect(gmc19.age).toBe(3);
    });
});