# Module Based Hmr Styles not applied

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.1, with the command `ng new module-based-hmr --standalone false`

Bumped to latest patch versions.

## Module root but standalone component (style issues)

For some reason, there is still HMR issues in what I think at this point is not module based at all.

This branch got the full root standalone treatment, and stuff like routing (which wasn't in use) even had its module removed. Still an issue.
