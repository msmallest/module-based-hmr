# Module Based Hmr Styles not applied

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.1, with the command `ng new module-based-hmr --standalone false`

Bumped to latest patch versions.

## Module root, module component (style issues)

When styles of a component declared in a module are changed (inline style or file-based style), and the components is declared in a module too, changes are not applied with HMR until reloading. But when ran with `hmr --false`, this is not an issue.

How this branch was generated

```bash
>19:31/redacted/module-based-hmr ~ $ ng generate @angular/core:standalone
✔ Choose the type of migration: Convert all components, directives and pipes to standalone
✔ Which path in your project should be migrated? ./
    🎉 Automated migration step has finished! 🎉
    IMPORTANT! Please verify manually that your application builds and behaves as expected.
    See https://angular.dev/reference/migrations/standalone for more information.
UPDATE src/app/authorized-users/authorized-users.component.ts (476 bytes)
UPDATE src/app/app.module.ts (768 bytes)
UPDATE src/app/app.component.spec.ts (1047 bytes)
UPDATE src/app/authorized-users/authorized-users.component.spec.ts (650 bytes)
```
