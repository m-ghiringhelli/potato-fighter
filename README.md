## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

I) Elements
  A) Banner div
  div
    B) HP display div
      1) p - "fighter hp"
      2) p - hp.textContent
    C) Create potato div
      1) form
      2) submit on click
  div 'field of battle'
    D) Fighter image
    E) Div for potatoes
      1) Individual potato div
        a) Potato image
        b) Potato name
          -Papa Cabeza
        c) Potato HP
      2) Individual div
        a) Potato image
        b) Potato name
          -Frau Kartoffelkopf
        c) Potato HP
      3) Dynamic div (created w/ js)
        a) Potato image
        b) Potato name
          -from form
        c) Potato HP
  F) Defeated div
    1) text 'you've french fried ${defeated potatoes} potatoes'
II) State
III) Events
IV) Functionality
V) Plan

1) **Make a drawing of your app. Simple "wireframes"**
1) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
