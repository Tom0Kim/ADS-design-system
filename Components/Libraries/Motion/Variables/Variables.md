# Variables

Source page: https://atlassian.design/components/motion/variables
Source package: `@atlaskit/motion@7.5.0`

## Code

## Duration

There are three durations available, each size increases in duration. Use a larger duration for an
element that moves a large distance, or is a large element.

```
```

All durations are multiples of `durationStep`. Do the current durations not fit your purpose? No
worries! Make sure to create a custom one from `durationStep`.

### Duration decision matrix

Use this table if you're unsure what duration you should use.

<table>
	<thead>
		<tr>
			<td></td>
			<th>Small element</th>
			<th>Large element</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">
				**Short distance**
			</th>
			<td>
				`smallDurationMs`
			</td>
			<td>
				`mediumDurationMs`
			</td>
		</tr>
		<tr>
			<th scope="row">
				**Long distance**
			</th>
			<td>
				`mediumDurationMs`
			</td>
			<td>
				`largeDurationMs`
			</td>
		</tr>
	</tbody>
</table>

## Curves

There are three curves available, each used for a particular user interaction, or how the element
appears.

```
```

### Curves decision matrix

Use this table if you're unsure what curve you should use.

<table>
	<thead>
		<tr style="vertical-align: top;">
			<td></td>
			<th>
				`easeInOut`
			</th>
			<th>
				`easeOut`
			</th>
			<th>
				`easeIn`
			</th>
		</tr>
	</thead>
	<tbody>
		<tr style="vertical-align: top;">
			<th scope="row">
				*When to use*
			</th>
			<td>When an element has been interacted with indirectly.</td>
			<td>
				When an element has been interacted with directly. 

				When an element appears from off screen.
			</td>
			<td>Use rarely. Only used if an element is moving indirectly entirely off the screen.</td>
		</tr>
		<tr style="vertical-align: top;">
			<th scope="row">
				*Example use case*
			</th>
			<td>A user clicks a button, and a separate element moves.</td>
			<td>
				A user clicks an element, and that same element moves. 
A drawer appears from off
				screen.
			</td>
			<td>
				A user clicks a button which spins and waits. After the operation is finished the button
				enters a confirmed state and the modal slides entirely off the screen.
			</td>
		</tr>
	</tbody>
</table>
