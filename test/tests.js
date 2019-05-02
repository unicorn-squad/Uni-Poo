import feedUnicorn from '../src/feed-unicorn.js';
const test = QUnit.test;

test('cause poo to show up', function(assert) {
    //Arrange

    const colorName = 'red';
    const mockUnicorn = document.createElement('div');
    const expected = '<span class="part red"></span>';
    //Act 
    feedUnicorn(mockUnicorn, colorName); 
    // Call the function you're testing and set the result to a const
    //Assert
    const parentInnerHTML = mockUnicorn.innerHTML;
    assert.equal(parentInnerHTML, expected);
});