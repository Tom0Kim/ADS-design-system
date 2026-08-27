# Testing

Source page: https://atlassian.design/components/pragmatic-drag-and-drop
Source package: `@atlaskit/pragmatic-drag-and-drop-docs@2.0.2`

## About

This library has robust unit and browser test converage, so there is no need for consumers to test
that the library is working as it should.

That said, you'll likely want to add some testing to your experiences to ensure they are working
correctly.

We have created some guides to help you with setting up tests for various environments:

- [Jest and JSDOM](https://atlassian.design/components/pragmatic-drag-and-drop/core-package/testing/jest-and-jsdom)
- [Playwright](https://atlassian.design/components/pragmatic-drag-and-drop/core-package/testing/playwright)
- [Cypress](https://atlassian.design/components/pragmatic-drag-and-drop/core-package/testing/cypress)

`jsdom` does not implement [`DragEvent`](https://github.com/jsdom/jsdom/issues/2913) or `DOMRect`.
We have created a
[`DragEvent` and `DOMRect` polyfills](https://atlassian.design/components/pragmatic-drag-and-drop/optional-packages/unit-testing)
which implement `DragEvent` and `DOMRect` for jsdom.

You can force `@atlaskit/pragmatic-drag-and-drop` to dispatch events by firing native drag events

| Event name    | Description                                    | Target (what element the event is dispatch on) |
| ------------- | ---------------------------------------------- | ---------------------------------------------- |
| `"drag"`      | A drag is occurring (_throttled_)              | `draggable` element                            |
| `"dragend"`   | A drag is finished                             | `draggable` element                            |
| `"dragenter"` | A drag is entering into an element             | The `Element` being entered                    |
| `"dragleave"` | A drag is leaving into an element              | The `Element` being left                       |
| `"dragover"`  | A drag is occuring over a valid _drop target_  | The _drop target_ Element                      |
| `"dragstart"` | A drag is starting                             | `draggable` element                            |
| `"drop"`      | A user successfully dropped on a _drop target_ | A _drop target_ `Element`                      |

A few things to keep in mind:

- How we use native events to publish our own events might change in the future, so ideally you
  don't want to be writing too many tests that rely on how we use native events. Ideally you want to
  be relying on a small amount of browser testing.
- `onGenerateDragPreview` fires during `"dragstart"`
- `onDragStart` fires in the animation frame after `"dragstart"`
- Internally we do not
- Any event (eg `onDrop`) will flush any pending `onDragStart` event
- We don't use `"drag"` events due to a bug in firefox; we rely on `"dragover"`
- We apply some additional throttling to `"dragover"` so we only fire it at most once per frame
- We mostly ignore `"dragleave"` and `"drag"` events

> **information**
>
> `jsdom` [does not support](https://github.com/jsdom/jsdom/issues/2913) the `DragEvent` interface. As
> a consequence,
> [event properties](https://testing-library.com/docs/dom-testing-library/api-events/#fireeventeventname)
> passed as a second parameter of the `@testing-library/dom` `fireEvent` drag methods (e.g.
> `dragStart`, `dragOver`...) might be ignored during the test execution. Please use our `DragEvent`
> polyfill to avoid this issue.

```ts

afterEach(async () => {
	// cleanup any pending drags
	fireEvent.dragEnd(window);

	// Optional: unwind the "honey pot fix"
	// More details: https://www.youtube.com/watch?v=udE9qbFTeQg
	fireEvent.pointerMove(window);
});

it('should execute callbacks in response to native events', () => {
	const [A] = getElements();
	const ordered: string[] = [];

	const cleanup = combine(
		appendToBody(A),
		draggable({
			element: A,
			onGenerateDragPreview: () => ordered.push('draggable:preview'),
			onDragStart: () => ordered.push('draggable:start'),
			onDrag: () => ordered.push('draggable:drag'),
			onDrop: () => ordered.push('draggable:drop'),
			onDropTargetChange: () => ordered.push('draggable:change'),
		}),
		dropTargetForElements({
			element: A,
			onGenerateDragPreview: () => ordered.push('dropTarget:preview'),
			onDragStart: () => ordered.push('dropTarget:start'),
			onDrag: () => ordered.push('dropTarget:drag'),
			onDrop: () => ordered.push('dropTarget:drop'),
			onDropTargetChange: () => ordered.push('dropTarget:change'),
			onDragEnter: () => ordered.push('dropTarget:enter'),
			onDragLeave: () => ordered.push('dropTarget:leave'),
		}),
		monitorForElements({
			onGenerateDragPreview: () => ordered.push('monitor:preview'),
			onDragStart: () => ordered.push('monitor:start'),
			onDrag: () => ordered.push('monitor:drag'),
			onDrop: () => ordered.push('monitor:drop'),
			onDropTargetChange: () => ordered.push('monitor:change'),
		}),
	);

	expect(ordered).toEqual([]);

	// starting a lift, this will trigger the previews to be generated
	fireEvent.dragStart(A);

	expect(ordered).toEqual(['draggable:preview', 'dropTarget:preview', 'monitor:preview']);
	ordered.length = 0;

	// ticking forward an animation frame will complete the lift
	// @ts-expect-error
	requestAnimationFrame.step();
	expect(ordered).toEqual(['draggable:start', 'dropTarget:start', 'monitor:start']);
	ordered.length = 0;

	// [A] -> []
	fireEvent.dragEnter(document.body);
	expect(ordered).toEqual([
		'draggable:change',
		'dropTarget:change',
		'dropTarget:leave',
		'monitor:change',
	]);
	ordered.length = 0;

	// [] -> [A]
	fireEvent.dragEnter(A);
	expect(ordered).toEqual([
		'draggable:change',
		'dropTarget:change',
		'dropTarget:enter',
		'monitor:change',
	]);
	ordered.length = 0;

	// [A] -> [A]
	fireEvent.dragOver(A, { clientX: 10 });
	// no updates yet (need to wait for the next animation frame)
	expect(ordered).toEqual([]);

	// @ts-expect-error
	requestAnimationFrame.step();
	expect(ordered).toEqual(['draggable:drag', 'dropTarget:drag', 'monitor:drag']);
	ordered.length = 0;

	// drop
	fireEvent.drop(A);
	expect(ordered).toEqual(['draggable:drop', 'dropTarget:drop', 'monitor:drop']);

	cleanup();
});
```

With [`Playwright`](https://playwright.dev/), you can use the
[`dragTo` method](https://playwright.dev/docs/input#drag-and-drop) to perform drop and drop
operations.

```ts

test('should allow drag and drop between columns', async ({ page }) => {
	await page.goto('https://localhost:9000/atlaskit-drag-and-drop');

	// waiting for our board to be visible
	await expect(page.getByTestId('item-A0')).toBeVisible();

	// asserting initial list sizes
	await expect(page.getByTestId('column-A--card-list').locator('[draggable="true"]')).toHaveCount(
		16,
	);

	await expect(page.getByTestId('column-B--card-list').locator('[draggable="true"]')).toHaveCount(
		16,
	);

	// Move A0 to column B
	await page.getByTestId('item-A0').dragTo(page.getByTestId('item-B0'));

	// asserting list sizes after drag and drop
	await expect(page.getByTestId('column-A--card-list').locator('[draggable="true"]')).toHaveCount(
		15,
	);

	await expect(page.getByTestId('column-B--card-list').locator('[draggable="true"]')).toHaveCount(
		17,
	);
});
```

With [`cypress`](https://www.cypress.io/), you need to ensure that when you trigger a drag event (eg
`"dragstart"`), you need to add
[`{force: true}`](https://docs.cypress.io/guides/core-concepts/interacting-with-elements#Forcing).
This will ensure that the drag events fire on the correct elements.

You will also need to ensure that `cypress` triggers `DragEvent`s correctly. By default, a
`.trigger('dragstart')`, fires an `Event`, not a `DragEvent`. So you will need to set the
`eventConstructor` to be `DragEvent`, and pass through a `DataTransfer` (which can be empty).

```ts
it('should allow drag and drop between columns', () => {
	const options = {
		force: true,
		eventConstructor: 'DragEvent',
		// If you wanted to fake dragging particular data,
		// you can add it to this `DataTransfer` with `.setData()`
		// See: https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer
		dataTransfer: new DataTransfer(),
	};

	cy.visit('/scenario/atlaskit-drag-and-drop');

	// waiting for our board to be visible
	cy.get('[data-testid="item-A0"]').should('be.visible');

	// asserting initial list sizes
	cy.get('[data-testid="column-A--card-list"]')
		.find('[draggable="true"]')
		.should('have.length', 16);

	cy.get('[data-testid="column-B--card-list"]')
		.find('[draggable="true"]')
		.should('have.length', 16);

	// Move A0 to column B
	cy.get('[data-testid="item-A0"]').trigger('dragstart', options);

	cy.get('[data-testid="item-B0"]').trigger('dragenter', options).trigger('drop', options);

	// asserting list sizes after drag and drop
	cy.get('[data-testid="column-A--card-list"]')
		.find('[draggable="true"]')
		.should('have.length', 15);

	cy.get('[data-testid="column-B--card-list"]')
		.find('[draggable="true"]')
		.should('have.length', 17);
});
```

When using [`puppeteer`](https://pptr.dev/) you must call
[`page.setDragInterception(true)`](https://pub.dev/documentation/puppeteer/latest/puppeteer/Page/setDragInterception.html)
to successfully leverage drag events.

```ts

it('should support dropping of many files at once', async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto('https://localhost:3000/my-awesome-example');

	// waiting for the drop target to be visible as a way to ensure the example
	// is completely loaded (preemptively avoiding flakiness)
	await page.waitForSelector('[data-testid="drop-target"]', {
		visible: true,
	});

	const body = await getElement('body');
	const dropTarget = await getElement('[data-testid="drop-target"]');
	invariant(dropTarget, `drop target not found`);

	// Allowing capturing of drag events
	// https://pub.dev/documentation/puppeteer/latest/puppeteer/Page/setDragInterception.html
	await page.setDragInterception(true);
	const data: Protocol.Input.DragData = {
		dragOperationsMask: 1,
		files: ['./package.json', './tsconfig.json'],
		items: [],
	};

	await body.dragEnter(data);
	await dropTarget.dragEnter(data);
	await dropTarget.drop(data);

	// just incase there are any delays in the processing of files
	// we will wait until the `dropped-files` element is visible
	// before continuing
	// (eg if the update is delayed by react)
	await page.waitForSelector('[data-testid="dropped-files"]', {
		visible: true,
	});

	const results = await getElement('[data-testid="dropped-files"]');
	const text = await results.evaluate((el) => el.textContent);
	expect(text?.includes('package.json')).toBe(true);
	expect(text?.includes('tsconfig.json')).toBe(true);
});
```

We unsuccesfully tried for a while to get drag and drop tests working with
[`webdriver.io`](https://webdriver.io/docs/api/element/dragAndDrop/). Getting these `webdriver.io`
tests might work, but for now we have parked looking into this concern. If `webdriver.io` usage is
important to you, please reach out and we can do some more exploration.
