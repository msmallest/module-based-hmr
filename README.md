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
3. Add something to the template of `authorized-users.component.html`, like the character "e" to line 5. Alternatively, change a style.
4. Observe the following two errors
5. Persists until refresh

Three things of note
1. These errors happen when saving an file-based template or file-based style, or saving an inline template or inline style. Did not check a combo of one being file-based and one being. The errors looked the same in either scenario, but in particular were sourced in both file-based.
2. These errors are on the first save. However, if you add some more characters and keep saving, the links to the source files no longer go to the source files and instead go to the `@ng` output files
3. When these errors happen (either the kind with source files directly or `@ng` files, the content in the `*ngFor/async` go away.)

`ngForOf` error

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

`pure` error from async pipe
```
authorized-users.component.ts:12 ERROR TypeError: Cannot read properties of null (reading 'pure')
    at AuthorizedUsersComponent_Template (authorized-users.component.ts:36:43)
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
