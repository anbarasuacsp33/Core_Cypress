//1. ID Locator (Fastest and Preferred)
// --> css selector Based - #id,
// --> xpath Based - //*[@id='id']
//   --> cypress Based - cy.get('#id')

//2. Class Locator (Fast but not Preferred) - if any dynamic locator dont prefer this one
// --> css selector Based - .class, -- if the clss value has spacebetween words replace the space by dot(.) like .cl.a.ss1
// --> cypress Based - cy.get('.class')

//3.Attribut e Locator (Preferred) - Best practice
// --> css selector Based - [attribute='value']
// --> xpath Based - //*[@attribute='value']
// --> cypress Based - cy.get('[attribute="value"]')

//3.1 Placeholder Attribute Locator (Preferred) -
// --> css selector Based - [placeholder='value']
// --> xpath Based - //*[@placeholder='value']
// --> cypress Based - cy.get('[placeholder="value"]')

// 4. Name Attribute 
// --> css selector Based - [name='value']
// --> xpath Based - //*[@name='value']
/// --> cypress Based - cy.get('[name="value"]').type('mytext@mytext.com')

// 5 CSS Selector Combination
///input.form-control[name="email"]

// 6. Text Based Locator (Not Preferred) - if any dynamic locator dont prefer this one
// --> xpath Based - //tagname[text()='textvalue']
// --> cypress Based - cy.contains('textvalue').click()

// 7. Xpath Based Locator (Not Preferred) - if any dynamic locator dont prefer this one
// --> xpath Based - //tagname[@attribute='value']
// --> cypress Based - cy.xpath('//tagname[@attribute="value"]')   

// 8. Index Based Locator 
//cy.get('input').eq(0).type('mytext@mytext.com')


// 9. Traversing DOM
// cy.get('#username').parent().find('input').type('mytext@mytext.com')
// cy.get('.flex.items-center.gap-4').parent().find('.bg-qa-clr.rounded-4xl.px-4.sm:px-7.py-2.text-white.hover:bg-blue-800.flex.items-center.gap-1').type('my test');


// 10. Shadow Dom (Modern apps)
// cy.get().shadow().find('input').type('mytext@mytext.com') 

// 11. Custom Command Locator
// Cypress.Commands.add('getByDataCy', (value) => {
//     return cy.get(`[data-cy=${value}]`);
//   });
// cy.getByDataCy('email').type('mytext@mytext.com')    





