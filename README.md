# B13-A4-PH-Job-Tracker


1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

By getElementById, we can select only one specific element and it return only one element.

By getElementsByClassName, we can select multiple element with class and it return HTMLCollection

By querySelector, we can select any element of the document, if we would like to call an element with id - we must use '#' with the id in the quotation. And it select only one and the first element.

By querySelectorAll, we can select a lot of elements at once and it returns an array like object which is colde nodeList.

2. How do you create and insert a new element into the DOM?

To create an element with JavaScript, just write document.createElement('') ==> in the quotation write any tag name you want to create 
    for Example : 

    document.createElement('p')  ==> it will create a p tag

To insert that or any element, just use .innerHTML = '' after the selected element like [document.createElement('p').innerHTML = '']

in the quotation, you can write any tag whatever you want


3. What is Event Bubbling? And how does it work?
4. What is Event Delegation in JavaScript? Why is it useful?
5. What is the difference between preventDefault() and stopPropagation() methods?