## The Golden Rule: 

π¦Έ π¦ΈββοΈ `Stop starting and start finishing.` π

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

I) Elements
  A) Banner div CHECK
  div CHECK
    B) HP display div CHECK
      1) p - "fighter hp" CHECK
      2) p - hp.textContent
    C) Create potato div  CHECK
      1) form CHECK
      2) submit on click
  div 'field of battle' CHECK
    D) Fighter image CHECK
    E) Div for potatoes CHECK
      1) Individual potato div CHECK
        a) Potato image CHECK
        b) Potato name CHECK
          -Papa Cabeza CHECK
        c) Potato HP 
      2) Individual div CHECK
        a) Potato image CHECK
        b) Potato name CHECK
          -Frau Kartoffelkopf CHECK
        c) Potato HP
      3) Dynamic div (created w/ js)
        a) Potato image
        b) Potato name
          -from form
        c) Potato HP
  F) Defeated div
    1) text 'you've french fried ${defeated potatoes} potatoes' CHECK
II) State
  A) Player HP CHECK
  B) Defeated potatoes CHECK
  C) Potato HP CHECK
  D) Array of potato objects CHECK
III) Events
  A) Create potato (form)
    1) renderPotatoes CHECK
      a) create div formatted like potato CHECK
    2) displayPotatoes() CHECK
      b) append to DOM CHECK
  B) Click on potato (potatoClickHandler()) CHECK
    1) You try to hit potato CHECK
      a) Math.random to see if you hit CHECK 
      b) Display (alert) whether you hit CHECK
      c) If hit, change potato HP state CHECK
      d) On miss, alert user CHECK
    2) Potato tries to hit you CHECK
      a) Math.random to see if potato hits CHECK
      b) Display (alert) whether potato hit CHECK
      c) If hit, change user HP state CHECK
      d) On miss, alert user CHECK
    3) Potato dies (if HP reaches 0) CHECK
      a) Alert user potato is dead
      b) Make potato die (disappear - display: none?), show french fries
      c) Update defeated potatoes state
      d) Change display of defeated potatoes
    4) User dies (hp === 0)
      a) new image? or just rotate
      b) alert user (you lost)
IV) Functionality
  A) renderPotato(potato) - PURE - returns DOM potato CHECK
  B) displayPotatoes() - clear DOM and append potatoes to potato list CHECK
  C) potatoClickHandler() function CHECK
V) Plan
  A) Basic HTML structure CHECK
  B) Style just enough to see layout CHECK
  C) test renderPotato function CHECK
  D) displayPotatoes function CHECK
  E) potato click handler CHECK
  F) Finish styling

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
