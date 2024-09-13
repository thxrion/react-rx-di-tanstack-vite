# Structure

```
├── model
│   └── const
│   │   └── <file #1>.const.ts
│   │   └── ...
│   └── entity
│   │   └── <file #1>.entity.ts
│   │   └── ...
│   └── error
│   │   └── <file #1>.error.ts
│   │   └── ...
├── controller
│   └── root.controller.ts
│   └── <module #1>.controller.ts
│   └── ...
├── view
│   └── components
│   └── hooks
│   └── pages
├── util
│   └── <util #1>.util.ts
│   └── ...
```

`view` and `controller` are the two layers of the website's architecture.

`controller` is responsible for storing the app state, modifying the state, and transforming the state

`view` is responsible for converting the transformed app state into HTML, connecting HTML events to the `controller` methods

# Models

In this directory we define the transfer protocols we use when connecting different layers.

Communication between layers should always be typed, and layers should only communicate through values of these types:
1. primitives (string is considered one)
2. errors - defined in `model/error`
3. enums - defined in `model/const`
4. entities - more complex data, defined in `model/entity`

## Constants - `model/const`

Each file can contain multiple definitions which share the same context.

Enums, arrays of strings, strings, magic numbers, records of different sorts are all considered constants.

## Entities - `model/entity`

Each file contains an entity definition.

An entity can be an interface, or a class which encapsulates its internal data transformations.
Inheritance between entities is advised against.

## Errors - `model/error`

Each file contains one definition, error classes usually inherit from
built in `Error` class.

These classes can be used in custom error handling or validation.

# Controllers

In this directory we define a controller class for each module.

One file contains one class.

A controller class can have a private inner state.

A controller can have private methods for DRY purposes, but prioritizing "locality of behavior" is advised.

The public methods a controller can expose are of two types: an `action` or a `selector`.

The purpose of an action is modifying state in response to some event. for example: a button click, component initialization.
Actions can be both sync and async.

The purpose of a selector is to transform the controller state for the `view` layer to use it directly.
So that the `view` layer is not performing any business logic.

Example controller class:
```ts
export class EditorController {
    private graph: LoveStory;
    private strict: boolean;

    constructor() {
        // ...

        makeAutoObservable(this);
    }

    // selectors

    public selectGraphJsonRepresentation(): string;

    // actions

    public changeEditorMode(value: EditorMode): void;
    public changeCodeInput(value: string): void;
    public toggleStrictMode(): void;
}
```

There is also a single `RootController` that contains all of the controllers.
It is used for easier access through React Context.

# View

In this directory we define components (pages are also considered as components) of our UI and connect them to our controllers.

Each component can consist of:
 - `.component.tsx` - main component file. It can contain up to 2 components for "locality of behavior" purposes, but not more.
For example a list - there can be an `*Entry` and a `*List` component within the main file.
 - `.styles.css` - used for overriding any external library's css (if the component is a facade over some external library)
 - `.module.css` - css definition specifically for the component, can be used by component parts and scaffold.
There is one css definition for the whole component.
 - `components/*.component.tsx` - parts of the main component.
All of these components MUST be unique and specific to the component and be useless outside of the component context.
 - `components/*.scaffold.tsx` - a component 'scaffold', which encapsulates the page layout and also in some cases rendering logic.
The scaffold imports all the other parts of the component as props and renders them in proper order.

## Pages - `view/pages`

In this directory we define components for our pages, which we then can use in our Router.

## Hooks - `view/hooks`

In this directory we define our hooks - they should never encapsulate any business logic.

They cannot access any controller methods, they should not also operate with complex data types like - entities, enums or defined errors.

A purpose of a hook is to handle some custom html event "the React way", nothing more.

## Components - `view/components`

In this directory we define our reusable components which are not page specific.

# Utilities

The utilities directory - if there is something that doesn't fit into the architecture but also not big enough to be a separate monorepo module.

Important rules for utilities:
- A utility MUST NOT be specific to an application.
- It should not deal in models defined in `model/*`
- It should NEVER encapsulate any business logic.
- A good utility usually does not import anything at all.
- A good utility doesn't build an abstraction over a 'bad api' of some library.

An example of a good utility is a `clamp` function, or an implementation of a `range` iterator.

You should keep your utilities directory as thin as possible and avoid extracting utilities from your code for "locality of behavior" and less coupling.
