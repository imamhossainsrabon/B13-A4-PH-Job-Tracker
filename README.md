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

Event bubbling is an event system in JavaScript where an event (such as a click) first occurs on the element and then moves up the hierarchy from its parent → grandparent → body → document.


4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is a technique in JavaScript where we attach a single event listener to a parent element instead of adding separate event listeners to multiple child elements. Then, using event bubbling, we detect which child element actually triggered the event.

In simple terms, we delegate the responsibility of handling events to a parent element.

Event Delegation works because of event bubbling.

When we click on a child element (for example, a button inside a div), the event doesn’t stop there. It bubbles up to its parent, then to the grandparent, and continues up the DOM tree.


5. What is the difference between preventDefault() and stopPropagation() methods?


preventDefault() disables the default behavior of an element. The browser will no longer do what it normally would.

stopPropagation() stops the propagation (bubbling or spreading upwards) of the event. The event will no longer reach its parent or any element above it.