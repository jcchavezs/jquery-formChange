#jQuery FormChange

Check if the elements of a form have really changed from the initial value.

##Getting started

Include the jquery.formChange.js file and then apply the formChange to any form.

```javascript
$('form').formChange({
    hasChangedClass: 'has-changed'
});

$('form').on('form-change', function(evt, hasReallyChanged) {
    if (hasReallyChanged) {
        window.onbeforeunload = function(e) {
            return 'Your form has changed. Are you sure you want to leave?.';
        };
    } else {
        window.onbeforeunload = null;
    }
}
```
