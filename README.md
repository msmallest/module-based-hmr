# Module Based Hmr Errors

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.1, with the command `ng new module-based-hmr --standalone false`

Bumped to latest patch versions.

## Module root but standalone component (no errors)

Compared to the branch with errors in components contained in modules, there is no difference whether the app is served with or without HMR.

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
