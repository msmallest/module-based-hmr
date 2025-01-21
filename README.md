# Module Based Hmr Errors

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.1, with the command `ng new module-based-hmr --standalone false`

Bumped to latest patch versions.

## Errors (only applies in modules)

Run `ng serve --hmr=false` HMR enabled by default

1. Run `ng-serve` 
2. Observe that the app is fine and clear of errors
3. Add something to the template of `authorized-users.component.html`, like the character "e" to line 5
4. No errors


Run `ng-serve` (HMR enabled by default)

1. Run `ng-serve` 
2. Observe that the app is fine and clear of errors
3. Add something to the template of `authorized-users.component.html`, like the character "e" to line 5
4. Observe the following two errors
5. Persists until refresh

```
authorized-users.component.ts:34 NG0303: Can't bind to 'ngForOf' since it isn't a known property of 'ng-container' (used in the '_AuthorizedUsersComponent' component template).
1. If 'ng-container' is an Angular component and it has the 'ngForOf' input, then verify that it is a part of an @NgModule where this component is declared.
2. If 'ng-container' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.
3. To allow any property add 'NO_ERRORS_SCHEMA' to the '@NgModule.schemas' of this component.
AuthorizedUsersComponent_Template	@	authorized-users.component.ts:34
(anonymous)	@	authorized-users.component.ts:12
Promise.then		
AuthorizedUsersComponent_HmrLoad	@	authorized-users.component.ts:12
(anonymous)	@	authorized-users.component.ts:12
(anonymous)	@	client:129
notifyListeners	@	client:129
notifyListeners	@	client:959
handleMessage	@	client:904
onMessage	@	client:298
(anonymous)	@	client:428
```

```
authorized-users.component.ts:12 ERROR TypeError: Cannot read properties of null (reading 'pure')
 TypeError: Cannot read properties of null (reading 'pure')
    at isPure (core.mjs:32410:35)
    at Module.ɵɵpipeBind1 (core.mjs:32329:10)
    at AuthorizedUsersComponent_Template (authorized-users.component.ts:36:43)
    at executeTemplate (core.mjs:12061:5)
    at refreshView (core.mjs:14431:7)
    at detectChangesInView (core.mjs:14640:5)
    at detectChangesInViewIfAttached (core.mjs:14602:3)
    at detectChangesInComponent (core.mjs:14591:3)
    at detectChangesInChildComponents (core.mjs:14653:5)
    at refreshView (core.mjs:14484:7)
```
