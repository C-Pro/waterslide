# Slide Notes: Interactive Elements

This slide highlights how the presentation handles user interactions without conflicts.

## Key Concepts
1. **Slide Navigation Isolation:** Keyboard navigation is restricted to `PageUp` and `PageDown` keys. This allows users to type inside native `<input>` fields or trigger `<button>` clicks without navigating away.
2. **State Management:** When this slide loads, the `initCounter()` callback initializes or resets the live counter.

### Code Snippets
Here is how the counter script resets the counter state:
```javascript
window.initCounter = function() {
    const counterVal = document.getElementById('counter-val');
    if (counterVal) {
        window.counterValue = 0;
        counterVal.textContent = window.counterValue;
    }
};
```

---
*Tip: Try entering your name in the input field and submitting details to see native forms in action.*
