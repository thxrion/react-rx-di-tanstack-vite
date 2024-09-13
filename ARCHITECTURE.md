# Structure

```
├── const
├── model
│   └── dtm
│   └── error
├── repository
│   └── connector
│   └── service
├── usecase
├── view
│   └── component
│   └── hook
│   └── page
├── util
```

`view`, `repository` and `usecase` are the three layers of the website's architecture.

`usecase` is responsible for business logic implementaton.
`repository` is responsible for storing the app state, modifying the state and communicating with the backend.
`view` is responsible for converting the transformed app state into HTML, connecting HTML events to the `usecase` layer

# Constants

Each file can contain multiple definitions which share the same context.

Enums, arrays of strings, strings, magic numbers, records of different sorts are all considered constants.

# Models

In this directory we define the transfer protocols we use when connecting different layers.

Communication between layers should always be typed, and layers should only communicate through values of these types:
1. primitives (string is considered one)
2. errors - defined in `model/error`
4. dtm - complex typed data, defined in `model/dtm`

## Data Transfer Models - `model/dtm`

Each file contains one definition.

A DTM can be an interface, or a class which encapsulates its internal data transformations.
Inheritance between DTMs is advised against.

## Typed errors - `model/error`

Each file contains one definition, error classes usually inherit from
built in `Error` class.

These classes can be used in custom error handling or validation.

# Repository

Here we define service classes for each module and connector classes for backend communication.
Each repository class should be created via dependency injection for testing purposes.

## Connectors - `repository/connector`
A purpose of a connector class is to transform client data to a format which backend expects,
and transform backend data to a format convenient to use on the client.

## Services - `repository/service`
A purpose of a service is to contain client state and define ways in which it can be modified.

# Usecases (controllers)

Here we define a controller class for each module.

One file contains one class.

A controller class can have multiple services or connectors as dependencies.
A controller class implements all the modules logic from HTML Events, to page initialization.
Any logic should be fully separated from view into the controller.

# View

Here we define components (pages are also considered as components) of our UI and connect them to our controllers.

Each component can consist of:
 - `.component.tsx` - main component file. It can contain up to 2 components for "locality of behavior" purposes, but not more.
For example a list - there can be an `*Entry` and a `*List` component within the main file.
 - `.styles.css` - used for overriding any external library's css (if the component is a facade over some external library)
 - `.module.css` - css definition specifically for the component, can be used by component parts and scaffold.
There is one css definition for the whole component.
 - `components/*.component.tsx` - parts of the main component.
All of these components MUST be unique and specific to the component and be useless outside of the component context.
 - `components/*.scaffold.tsx` - a component 'scaffold', which encapsulates the page layout and also in some cases rendering logic.
The scaffold imports all the other parts of the component as props and renders them in proper order. You could say it is a React way of doing Depedency injection.

## Pages - `view/page`

In this directory we define components for our pages, which we then can use in our Router.

## Hooks - `view/hooks`

In this directory we define our hooks - they should never encapsulate any business logic.

They cannot access any controller methods, they should not also operate with complex data types like - entities, enums or defined errors.

A purpose of a hook is to handle some custom html event "the React way", nothing more.

## Components - `view/component`

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
