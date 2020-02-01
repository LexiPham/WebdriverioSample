const assert = require('assert')

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://webdriver.io')
        let title = browser.getTitle()
        assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js')
        $('//a[contains(text(), "Guide")]').click()
        title = browser.getTitle()
        assert.strictEqual(title, 'Getting Started · WebdriverIO')
//         assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js')
    })
})
