# MatTooltip Injector Error from Jest
This repo re-creates a bug with using standalone Components that use `MatTooltipModule` distributed from a library.

The repo contains both an Angular library (my-lib) and an Angular app (my-app).  All components are standalone.  The component in the library has a button with a `matTooltip`.
The app has a local copy of the same component in the `shared` folder.  Beyond the `app.component`, there are two other components to demonstrate the difference in using 
this component from a library vs. using the same component built locally.  The `local-based` component uses the local version of the component, while the `library-based`
component, uses the version provided by the library.  The `app.component` uses both `local-based` and `library-based`. 

Running `yarn test` (which uses `jest`), both the `app.component` and `library-based` component tests fail with 
```bash
NullInjectorError: R3InjectorError(DynamicTestModule)[InjectionToken mat-tooltip-scroll-strategy -> InjectionToken mat-tooltip-scroll-strategy]:
      NullInjectorError: No provider for InjectionToken mat-tooltip-scroll-strategy!
```
despite the library component properly importing `MatTooltipModule`.  The `local-based` component test succeeds.

Note: the app runs fine, without error.  It's only when running with the `DynamicTestModule` that this fails.

## Repro steps
1. Run `yarn` from root folder
1. Run `ng build my-lib` from root
1. `cd` into `projects/my-app`
1. Run `yarn` from `projects/my-app`
1. Run `yarn test` from `projects/my-app`
