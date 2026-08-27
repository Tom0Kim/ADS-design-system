# External

Source page: https://atlassian.design/components/pragmatic-drag-and-drop
Source package: `@atlaskit/pragmatic-drag-and-drop-docs@2.0.2`

## About

The external adapter is used to listen and respond to:

- drags that started from the users operating system (eg files)
- drags that started from other `window`s (including from child `<iframe>`s)

The external adapter consists of the following pieces:

- `dropTargetForExternal`: marking an element as a valid
  [drop target](https://atlassian.design/components/pragmatic-drag-and-drop/core-package/drop-targets) for external entities
- `monitorForExternal`: create a
  [monitor](https://atlassian.design/components/pragmatic-drag-and-drop/core-package/monitors) to listen for an external
  drag operation events anywhere
- `type`s: all types for this adapter

There are utilities for making working with particular external data types easier:

- [Files](https://atlassian.design/components/pragmatic-drag-and-drop/core-package/adapters/external/files)
- [URLs](https://atlassian.design/components/pragmatic-drag-and-drop/core-package/adapters/external/URLs)
- [Text](https://atlassian.design/components/pragmatic-drag-and-drop/core-package/adapters/external/text)
- [HTML](https://atlassian.design/components/pragmatic-drag-and-drop/core-package/adapters/external/HTML)
- [Custom media](https://atlassian.design/components/pragmatic-drag-and-drop/core-package/adapters/external/custom-media-types)

There are also some utilities for usage with any external data type:

- [some](#filtering-by-native-data-types): combine predicates and return `true` if _any_ predicate
  matches (eg `some(containsText, containsHTML)`)

> **Note**
>
> It is likely that some
> [top level utilities](https://atlassian.design/components/pragmatic-drag-and-drop/core-package/utilities) will be helpful
> for your experience as well

## Drop target for external

A [drop target](https://atlassian.design/components/pragmatic-drag-and-drop/core-package/drop-targets) for external data.

The default `dropEffect` for external drop targets is `"copy"`. This is because when you move data
from outside of a `window` into the `window`, you are _generally_ making a _copy_ of the data. You
can override this default with `getDropEffect()`.

```ts

const cleanup = dropTargetForExternal({
  element: myElement,
  onDragEnter: () => console.log('Some external data was dragged over me');
});
```

## Monitor for external

A [monitor](https://atlassian.design/components/pragmatic-drag-and-drop/core-package/monitors) for native drags.

```ts

const cleanup = monitorForExternal({
  onDragStart: () => console.log('An external drag has entered the window');
});
```

## Filtering by native data types

If you only want your drop target or monitor to be active when particular types of data is being
dragged (eg files), then you can provide a predicate function to `canDrop` and `canMonitor`

```ts

dropTargetForExternal({
  element: myElement,
  canDrop: containsFiles,
  onDragEnter: () => console.log('A file is being dragged over me');
});

monitorForExternal({
  canMonitor: containsFiles,
  onDragStart: () => console.log('A file is being dragged');
});
```

If you want a drop target or monitor to listen for multiple types of native drag data, you can use
`some()`. `some()` will return true if any predicate function returns `true` (the same as
`Array.prototype.some`).

```ts

dropTargetForExternal({
  canMonitor: some(containsFiles, containsText),
  onDragEnter: () => console.log('A file or text is being dragged over me');
});

monitorForExternal({
  canMonitor: some(containsFiles, containsText),
  onDragStart: () => console.log('A file or text is being dragged');
});
```

You can also create your own predicate functions to facilitate your own bespoke checks.

## Events

The external adapter removes some events from the
[standard event flow](https://atlassian.design/components/pragmatic-drag-and-drop/core-package/events).

- `onGenerateDragPreview` is removed from external _drop targets_ and _monitors_. For external
  operations the drag preview has already been generated externally.
- `onDragStart` is removed from external _drop targets_ as an external drag operation can _never
  start_ from inside a drop target in the `window`

If your drop target element needs to know when a drag is starting (ie a user is dragging a file into
the browser), then you can use a monitor

```ts
dropTargetForExternal({
	element: el,
	onDragEnter: () => console.log('user is now over this drop target'),
	onDragLeave: () => console.log('user is no longer over this drop target'),
	onDrop: () => console.log('user dropped on this drop target (or a child drop target)'),
});
monitorForExternal({
	onDragStart: () => console.log('file is entering the window'),
	onDrop: () => console.log('drag is finished'),
});
```

## Cross domain dragging and iframes

The external adapter enables you to drag data from one `window`, other web `window`s, or native
applications.

Unfortunately, in `Chrome@122` and `Safari@14.3.1` it is not possible to drag something from a
parent `window` to a child `<iframe>`, or from a child `<iframe>` to a parent `window` if they are
on _different_ domains.

For clarity, the following is permitted by all browsers:

- dragging from one page to another browser tab on the same domain
- dragging from one page to another browser tab on a different domain
- dragging from one page native applications
- dragging from one page to a child `<iframe>` on the same domain
- dragging from a child `<iframe>` to a child `<iframe>` on the same domain
- dragging from one page to an `<iframe>` (on any domain) on a different browser tab (on any domain)

The following is not permitted on `Chrome@122` and `Safari@14.3.1`:

- dragging from one page to a child `<iframe>` on a _different_ domain
- dragging from a child `<iframe>` to a parent page on a _different_ domain

→
[Open Chrome discussion about the behaviour](https://issues.chromium.org/issues/40077680#comment20)

### Extracting data

Due to the web platform drag and drop security model, you can know what "types" are being dragging
during a drag (eg `"text/plain"`), but you can only see what data is being dragged (exposed through
`.items`) during a successful "drop" event (`onDrop()`).

```ts

dropTargetForExternal({
	canDrop: some(containsFiles, containsText),
	onDrop({ source }) {
		const files = getFiles({ source });
		const text = getText({ source });
	},
});

monitorForExternal({
	canMonitor: some(containsFiles, containsText),
	onDrop({ source }) {
		const files = getFiles({ source });
		const text = getText({ source });
	},
});
```

Generally, you will only want to interact with `source` using one of our helpers (eg `getText()`).
`.items` and `getStringData()` only return meaningful information during a successful "drop" event
(`onDrop()`)

`source.items` (`DataTransferItem[]`) will only be populated with data:

1. in the `onDrop()` event, and
2. when the user is dropping on a
   [drop target](https://atlassian.design/components/pragmatic-drag-and-drop/core-package/drop-targets) (including when over
   a drop target due to stickiness)

Otherwise, `source.items` will be unpopulated (`[]`).

## Types

Generally you won't need to explicitly use our provided types, but we expose a number of TypeScript
types if you would like to use them.

All [events](https://atlassian.design/components/pragmatic-drag-and-drop/core-package/events) on drop targets and monitors
are given the following base payload:

````ts
type ExternalEventBasePayload = {
	location: DragLocationHistory;
	source: ExternalDragPayload;
};

export type ExternalDragPayload = {
	/**
	 * The media types that are being dragged during a drag.
	 *
	 * @example
	 *
	 * console.log(source.types);
	 * // → ["text/plain", "text/html"]
	 */
	types: NativeMediaType[];
	/**
	 * The entities that are being dragged.
	 * Usually you will not be using these directly, but
	 * our helper functions can leverage them to extract
	 * particular kinds of data (eg files) that are being dragged
	 */
	items: DataTransferItem[];
	/**
	 * returns the data for a given media type.
	 *
	 * - `getStringData(mediaType)` will return `null` if there is no data for that media type
	 * - `getStringData(mediaType)` will return the empty string (`""`) if the empty string (`""`)
	 *      was explicitly set as the data for a media type.
	 * - `getStringData(mediaType)` will return null if requesting files (ie `getStringData('Files')`).
	 *      To access files, use `source.items`, or better still, `getFiles({source})`
	 *
	 * Generally we recommend folks use our helpers to read native data rather than `getStringData(mediaType)`
	 *
	 * @example
	 *
	 * ```ts
	 * // Using getStringData()
	 * const text: string | null = source.getStringData("text/plain");
	 *
	 * // Using our text helper
	 * const text: string | null = getText({source});
	 * ```
	 * */
	getStringData: (mediaType: string) => string | null;
};

type NativeMediaType = 'text/uri-list' | 'text/plain' | 'text/html' | 'Files' | string;
````

For all the arguments for all events, you can use our event map type:

```ts
type ExternalEventPayloadMap = {
	onDragStart: ExternalEventBasePayload;
	// .. the rest of the events
};
```

Drop targets are given a little bit more information in each event:

```ts
type ElementDropTargetEventBasePayload = ExternalEventBasePayload & {
	/**
	 * A convenance pointer to this drop targets values
	 */
	self: DropTargetRecord;
};
```

For all arguments for all events on drop targets, you can use our event map type:

```ts
type ExternalDropTargetEventPayloadMap = {
	onDragStart: ElementDropTargetEventBasePayload;
	// .. the rest of the events
};
```

Drop target feedback functions (`canDrop`, `getData`, `getDropEffect`, `getIsSticky`) are given the
following:

```ts
type ExternalDropTargetGetFeedbackArgs = {
	/**
	 * The users _current_ input
	 */
	input: Input;
	/**
	 * The data associated with the entity being dragged
	 */
	source: ExternalDragPayload;
	/**
	 * This drop target's element
	 */
	element: Element;
};
```

The monitor feedback function (`canMonitor`), is given the following:

```ts
type ExternalMonitorGetFeedbackArgs = {
	/**
	 * The users `initial` drag location
	 */
	initial: DragLocation;
	/**
	 * The data associated with the entity being dragged
	 */
	source: ExternalDragPayload;
};
```

You can get these type from the external adapter import:

```ts
```

There are also some types (eg `DropTargetLocation`) that can be used for all adapters which can be
found on our [top level utilities page](https://atlassian.design/components/pragmatic-drag-and-drop/core-package/utilities)

## Blocking unhandled external drags (`preventUnhandled`)

The default behaviour when dropping some external entities into a `window` (eg files) is for that
entity to be opened in a new tab. Often, if you have drop targets for external entities on your
page, you want drops outside of those drop targets to be ignored, and not to open a new tab. You an
use the optional
[`preventUnhandled` utility](https://atlassian.design/components/pragmatic-drag-and-drop/core-package/utilities) to help
with that.

## `containsText`

Useful to know whether text data (`"text/plain"`) is being dragged. Keep in mind that multiple
pieces of native data can be dragged at once.

```ts

dropTargetForExternal({
	element: myElement,
	canDrop: containsText,
});

monitorForExternal({
	canMonitor: containsText,
});
```

## `getText`

A helper to extract text data (`"text/plain"`) from drop data. Get text will return `null` when
there is no text data.

```ts

dropTargetForExternal({
	element: myElement,
	onDrop({ source }) {
		const text: string | null = getText({ source });
	},
});

monitorForExternal({
	onDrop({ source }) {
		const text: string | null = getText({ source });
	},
});
```

## `containsURLs`

Useful to know whether URLs (`"text/uri-list"`) is being dragged.

Keep in mind:

- it is possible for multiple urls to be dragged at the same time
- multiple pieces of data can be dragged at once

```ts

dropTargetForExternal({
	element: myElement,
	canDrop: containsURLs,
});

monitorForExternal({
	canMonitor: containsURLs,
});
```

## `getURLs`

A helper to extract URL data (`"text/uri-list"`) from drop data. When there are no URLs, `getURLs()`
will return an empty array (`[]`).

```ts

dropTargetForExternal({
	element: myElement,
	onDrop({ source }) {
		const urls: string[] = getURLs({ source });
	},
});

monitorForExternal({
	onDrop({ source }) {
		const urls: string[] = getURLs({ source });
	},
});
```

## `containsHTML`

Useful to know whether text data (`"text/html"`) is being dragged. Keep in mind that multiple pieces
of native data can be dragged at once.

```ts

dropTargetForExternal({
	element: myElement,
	canDrop: containsHTML,
});

monitorForExternal({
	canMonitor: containsHTML,
});
```

## `getHTML`

A helper to extract text data (`"text/html"`) from drop data. Get text will return `null` when there
is no html data.

```ts

dropTargetForExternal({
	element: myElement,
	onDrop({ source }) {
		const html: string | null = getHTML({ source });
	},
});

monitorForExternal({
	onDrop({ source }) {
		const html: string | null = getHTML({ source });
	},
});
```

## Accessibility

When handling file dropping, we recommend that you also add a native input for file uploads

```tsx
<input type="file" />
```

This will help enable folks leveraging assistive technologies to perform file uploads.

> Interactive example: `FileExample`. See the original MDX under `_source`.

## `containsFiles`

Useful to know whether file(s) are being dragged. Keep in mind that multiple pieces of native data
can be dragged at once.

```ts

dropTargetForExternal({
	element: myElement,
	canDrop: containsFiles,
});

monitorForExternal({
	canMonitor: containsFiles,
});
```

## `getFiles`

A helper to extract files from drop data. An empty array (`[]`) will be returned if there were no
files being dragged.

```ts

dropTargetForExternal({
	element: myElement,
	onDrop({ source }) {
		const files: File[] = getFiles({ source });
	},
});

monitorForExternal({
	onDrop({ source }) {
		const files: File[] = getFiles({ source });
	},
});
```

When attaching data to a native drag store (for usage in external `window`s and applications), you
specific a "media type" for a string value.

```ts
{
  "text/plain": "hello world"
}
```

> **Note**
>
> "Media types" where previously known as "MIME types" (Multipurpose Internet Mail Extensions Type)

When passing data between different applications, it's helpful to use common media types (eg
`"text/plain"` and `"text/uri-list"`) as other applications will know what to do with these types of
entities.

Sometimes you want to pass your own bespoke type of data to other applications, or to other
instances of your application. Passing your own type of data is a helpful signal that a particular
type of application entity is being dragged.

```ts
{
  // fallback: a url to our trello card
  "text/uri-list": card.url,

  // helpful information: a trello card is being dragged
  "application/vnd.trello-card-id": card.id
}
```

In the above example, if we see a `"application/vnd.trello-card-id"` dragging, then that is a strong
hint that a trello card is being dragged. Whereas, as `"text/uri-list"` does not help us know what
kind of entity the URL belongs to.

Things to keep in mind:

- During a drag, only the media types (`types`) of data is visible to you (platform limitation).
  After a successful drop (`onDrop()`) you can read out data (by using `source.items` or
  `source.getData(mediaType)`)
- Custom media types will be visible to all external applications when a user is dragging over them,
  and the data will be visible if the user drops on that application. So it's important not to
  expose sensitive data.

## Custom media type naming

When making your own media type, there are some conventions:

> **Note**
>
> Note, these conventions don't appear to be enforced by browsers, but for clarity and wide
> compatibility, it is worth picking the most accurate one.

- **vendor tree** (prefix: `vnd.`) for publicly available apps (eg
  `"application/vnd.trello-card-id"`)
- **personal or vanity tree** (prefix: `prs.`) for non public apps or experimental types (eg
  `"image/prs.btif"`)
- **unregistered tree** (prefix `x.`) for use only in private environments (eg
  `"application/x.trello-card-id"`)

→ [More details about media type naming](https://en.wikipedia.org/wiki/Media_type)

## Media type suffixs

You can add a suffix to your media type to add extra information about the type of data being
dragged

- `"text/plain+json"`: dragging json data (same as `"application/json"`)
- `"application/vnd.trello-card+json"`: some json information about a trello card is being dragged

→ [More details about suffixs](https://en.wikipedia.org/wiki/Media_type)

## Attaching custom media

You can attach custom media for external consumers using a `draggable`

```ts

draggable({
	element: myElement,
	getInitialDataForExternal: () => ({
		'application/vnd.trello-card-id': card.id,
	}),
});
```

## Consuming custom media

You can consume custom media attached from other `window`s or applications leveraging the external
adapter.

```ts

dropTargetForExternal({
	element: myElement,
	// We are also only enabling dropping if a trello card is being dragged
	canDrop: ({ source }) => source.types.includes('application/vnd.trello-card-id'),
	onDrop: ({ source }) => {
		const cardId: string | null = source.getData('application/vnd.trello-card-id');

		if (cardId == null) {
			return;
		}
		// do drop operation
	},
});
```

Native applications will also have their own mechanisms for extracting data from externally sourced
drag operations.
